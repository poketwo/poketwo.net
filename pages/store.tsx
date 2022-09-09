import { IpregistryClient } from "@ipregistry/client";
import { loadStripe } from "@stripe/stripe-js";
import classNames from "classnames";
import { APIUser } from "discord-api-types";
import { withIronSessionSsr } from "iron-session/next";
import Link from "next/link";
import { useState } from "react";
import Stripe from "stripe";
import { ironSessionOptions } from "../helpers/session";
import { stripe } from "../helpers/stripe";
import styles from "../styles/store.module.scss";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

type Item = {
    id: string;
    name: string;
    amount: number;
    formatted?: string;
};

const Banner = () => (
    <div className="section">
        <div className="container has-text-centered">
            <p className="title is-2">Store</p>
        </div>
    </div>
);

type AuthenticationProps = {
    user: APIUser | null;
};

const Authentication = ({ user }: AuthenticationProps) => {
    const authenticated = user !== null;
    let file_ext, avatar_url;
    if (authenticated) {
        if (user.avatar) {
            file_ext = user.avatar.startsWith("a_") ? "gif" : "png";
            avatar_url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${file_ext}`;
        } else {
            avatar_url = `https://cdn.discordapp.com/embed/avatars/${Number(user.discriminator) % 5}.png`;
        }
    }
    return (
        <div className="section">
            <div className="container has-text-centered">
                {!authenticated && (
                    <Link href="/api/login">
                        <a className="button is-light is-rounded is-medium has-shadow">Login with Discord</a>
                    </Link>
                )}
                {authenticated && (
                    <div className="columns is-centered">
                        <div className="column is-narrow">
                            <div className="box px-6">
                                <figure className="image is-96x96 mb-5 mx-auto">
                                    <img className="profile-circle is-rounded" src={avatar_url} alt="Profile Picture" />
                                </figure>
                                <p className="title is-4">
                                    {user.username}#{user.discriminator}
                                </p>
                                <p className="subtitle is-5">{user.email}</p>
                            </div>
                        </div>
                    </div>
                )}
                {authenticated && (
                    <Link href="/api/logout">
                        <a className="button is-light is-rounded has-shadow">Logout</a>
                    </Link>
                )}
            </div>
        </div>
    );
};

type ItemProps = {
    item: Item;
    selected: boolean;
    onSelect: () => void;
};

const Item = ({ item, selected, onSelect }: ItemProps) => (
    <div className={classNames("column", styles.item)} onClick={onSelect}>
        <div
            className={classNames({
                "box has-shadow h-100": true,
                "has-background-link-dark": selected,
            })}
        >
            <p className="title is-4">{item.name}</p>
            <p className="subtitle is-5">{item.formatted}</p>
        </div>
    </div>
);

type ItemsProps = {
    user: APIUser | null;
    items: Item[];
    onCheckout: (item: Item) => void;
};

const Items = ({ user, items, onCheckout }: ItemsProps) => {
    const [selected, setSelected] = useState(-1);
    const authenticated = user !== null;

    return (
        <>
            <div className="section">
                <div className="container has-text-centered">
                    <div className="columns">
                        {items.map((item, idx) => (
                            <Item
                                key={item.id}
                                item={item}
                                selected={selected == idx}
                                onSelect={() => setSelected(idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container has-text-centered">
                    <button
                        className="button is-link is-medium is-rounded has-shadow"
                        onClick={() => onCheckout(items[selected])}
                        disabled={!authenticated || selected === -1}
                    >
                        Checkout{selected !== -1 && <> — {items[selected].formatted}</>}
                    </button>
                </div>
            </div>
        </>
    );
};

type StoreProps = {
    user: APIUser | null;
    currencies: { [key: string]: Item[] };
    defaultCurrency: string;
};

const Store = ({ user, currencies, defaultCurrency }: StoreProps) => {
    if (!currencies.hasOwnProperty(defaultCurrency)) defaultCurrency = "USD";

    const [currency, setCurrency] = useState(defaultCurrency);
    const format = new Intl.NumberFormat(undefined, { currency, style: "currency", maximumFractionDigits: 2 });

    const handleCheckout = async (item: Item) => {
        const stripe = await stripePromise;
        if (!stripe) return;

        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price_id: item.id, user }),
        });

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            alert(result.error.message);
        }
    };

    const items = currencies[currency].map(x => ({ ...x, formatted: `${format.format(x.amount / 100)}` }));

    return (
        <>
            <Banner />
            <Authentication user={user} />
            {/* <CurrencySelect choices={Object.keys(currencies)} selected={currency} onSelect={setCurrency} /> */}
            <Items user={user} items={items} onCheckout={handleCheckout} />
        </>
    );
};

export default Store;

export const getServerSideProps = withIronSessionSsr<StoreProps>(async ({ req }) => {
    // Get products

    const productsData = await stripe.products.list({ active: true });
    const prices = await stripe.prices.list({ active: true, limit: 100 });
    const products = productsData["data"].reduce<Map<string, Stripe.Product>>((acc, x) => {
        acc.set(x.id, x);
        return acc;
    }, new Map());

    const currencies = prices.data.reduce<{ [key: string]: Item[] }>((acc, price) => {
        const curr = price.currency.toUpperCase();
        const prev = acc[curr] ?? [];
        let product = typeof price.product === "string" ? products.get(price.product) : price.product;
        if (product && !product.deleted && price.unit_amount) {
            const item: Item = { id: price.id, name: product.name, amount: price.unit_amount };
            prev.push(item);
            prev.sort((a, b) => a.amount - b.amount);
            acc[curr] = prev;
        }
        return acc;
    }, {});

    // Get default currency

    let defaultCurrency = "USD";

    try {
        const ipregistry = new IpregistryClient(process.env.IPREGISTRY_API_KEY as string);
        const ip = req.headers["x-real-ip"];
        if (typeof ip !== "string") throw new Error();
        const response = await ipregistry.lookup(ip);
        defaultCurrency = response.data.currency.code ?? "USD";
    } catch {}

    return {
        props: {
            user: req.session.user ?? null,
            currencies,
            defaultCurrency,
        },
    };
}, ironSessionOptions);

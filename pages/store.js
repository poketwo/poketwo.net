import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadStripe } from "@stripe/stripe-js";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import Stripe from "stripe";
import { withSession } from "../helpers/session";
import styles from "../styles/store.module.scss";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Banner = () => (
    <div className="section">
        <div className="container has-text-centered">
            <p className="title is-2">Store</p>
        </div>
    </div>
);

const Authentication = ({ user }) => {
    const authenticated = user !== null;
    let file_ext, avatar_url;
    if (authenticated) {
        if (user.avatar) {
            file_ext = user.avatar.startsWith("a_") ? "gif" : "png";
            avatar_url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${file_ext}`;
        } else {
            avatar_url = `https://cdn.discordapp.com/embed/avatars/${user.id % 5}.png`;
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

const Item = ({ name, formatted, selected, onSelect }) => (
    <div className={classNames("column", styles.item)} onClick={onSelect}>
        <div
            className={classNames({
                "box has-shadow h-100": true,
                "has-background-link-dark": selected,
            })}
        >
            <p className="title is-4">{name}</p>
            <p className="subtitle is-5"> {formatted} </p>
        </div>
    </div>
);

const Items = ({ user, items, onCheckout }) => {
    const [selected, setSelected] = useState(-1);
    const authenticated = user !== null;

    return (
        <>
            <div className="section">
                <div className="container has-text-centered">
                    <div className="columns">
                        {items.map(({ name, formatted }, idx) => (
                            <Item
                                name={name}
                                formatted={formatted}
                                key={idx}
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

const CurrencySelect = ({ choices, selected, onSelect }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="section py-0">
            <div className="container has-text-centered">
                <div className={classNames("dropdown", { "is-active": open })}>
                    <div className="dropdown-trigger">
                        <button
                            className="button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu"
                            onClick={() => setOpen(!open)}
                        >
                            <span>{selected}</span>
                            <span className="icon is-small">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content has-text-left">
                            {choices.map(x => (
                                <a
                                    key={x}
                                    className={classNames("dropdown-item", { "is-active": x === selected })}
                                    onClick={() => {
                                        onSelect(x);
                                        setOpen(false);
                                    }}
                                >
                                    {x}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Store = ({ user, currencies }) => {
    const [currency, setCurrency] = useState("USD");
    const format = new Intl.NumberFormat(undefined, { currency, style: "currency", maximumFractionDigits: 2 });

    const handleCheckout = async item => {
        const stripe = await stripePromise;

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
            <CurrencySelect choices={Object.keys(currencies)} selected={currency} onSelect={setCurrency} />
            <Items user={user} items={items} currency={currency} onCheckout={handleCheckout} />
        </>
    );
};

export default Store;

export const getServerSideProps = withSession(async ({ req }) => {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

    const productsData = await stripe.products.list({ active: true });
    const products = productsData["data"].reduce((a, x) => ({ ...a, [x["id"]]: x }), {});
    const prices = await stripe.prices.list({ active: true, limit: 100 });

    const currencies = prices.data.reduce((acc, price) => {
        const curr = price.currency.toUpperCase();
        const prev = acc[curr] ?? [];
        acc[curr] = [...prev, { id: price.id, name: products[price.product].name, amount: price.unit_amount }].sort(
            (a, b) => a.amount - b.amount
        );
        return acc;
    }, {});

    return { props: { user: req.session.get("user") ?? null, currencies } };
});

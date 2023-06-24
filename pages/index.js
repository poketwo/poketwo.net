import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
    faArrowRight,
    faCloudMoon,
    faCode,
    faFilter,
    faInfoCircle,
    faList,
    faPaw,
    faRobot,
    faStar,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import useSWR from "swr";
import styles from "../styles/index.module.scss";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Outage = () => (
    <div className="section">
        <div className="container">
            <div className="columns">
                <div className="column is-8-desktop is-offset-2-desktop has-text-centered">
                    <div className="notification is-danger has-text-left">
                        <strong>Pokétwo is currently experiencing a major outage.</strong> Three of our servers need
                        maintainence. Unfortunately, it's finals week for me, so I have less time to dedicate, and I'm
                        also waiting on our hosting provider to get back to us regarding some details. Join the
                        community server for updates regarding the outage!
                        <div className="has-text-right">— Oliver</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Banner = () => {
    const { data } = useSWR("https://webhooks.poketwo.io/stats", fetcher);

    return (
        <header className={classNames("section", styles.banner)} id="main">
            <div className="container">
                <div className="columns">
                    <div className="column is-8-desktop is-offset-2-desktop has-text-centered">
                        <figure className="image mx-auto" style={{ width: 200, height: 200 }}>
                            <Image src="/assets/logo.png" alt="Pokétwo Logo" width={200} height={200} />
                        </figure>
                        <h1 className="title is-1 is-spaced">
                            The Pokémon experience.
                            <br />
                            On Discord.
                        </h1>
                        <p className="subtitle is-4">
                            Pokétwo brings the Pokémon experience to Discord. Catch randomly-spawning pokémon in your
                            servers, trade them to expand your collection, battle with your friends to win rewards, and
                            more. All free to play and open source.
                        </p>
                        <div className="buttons is-centered">
                            <a
                                className="button is-medium has-background-link-dark is-rounded has-shadow"
                                href="https://invite.poketwo.net"
                            >
                                <span className="icon">
                                    <FontAwesomeIcon icon={faRobot} />
                                </span>
                                <span>Invite Pokétwo</span>
                            </a>
                            <a
                                className="button is-medium is-light is-rounded has-shadow"
                                href="https://discord.gg/poketwo"
                            >
                                <span className="icon">
                                    <FontAwesomeIcon icon={faDiscord} />
                                </span>
                                <span>Join Community</span>
                            </a>
                        </div>
                        {/* <p style={{ opacity: data ? 1 : 0, transition: "opacity 0.3s" }}>
                            Serving <b>{data?.users?.toLocaleString()}</b> registered users in{" "}
                            <b>{data?.servers.toLocaleString()}</b> servers
                        </p> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

const RichFeature = ({ filename, title, children }) => {
    return (
        <div className={classNames("section", styles["feature-wrapper"])}>
            <div className="container">
                <div className="columns is-desktop">
                    <div className="column is-10-desktop desktop-only">
                        <figure className={classNames("image is-3by2", styles["feature-image"])}>
                            <object data={`/assets/mockups/${filename}.svg`} title={title}>
                                <Image src={`/assets/mockups/${filename}.png`} alt={title} layout="fill" />
                            </object>
                        </figure>
                    </div>
                    <div className={classNames("column", styles.feature)}>
                        <article className="box has-background-link-dark">
                            <h3 className="title is-4">{title}</h3>
                            <div className="content">{children}</div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Feature = ({ icon, children }) => (
    <div className="column is-3-desktop is-4-tablet is-6-mobile">
        <div className="box has-background-link-dark has-text-centered h-100">
            {icon && <FontAwesomeIcon icon={icon} size="2x" className="mb-4" />}
            <h3 className="title is-4">{children}</h3>
        </div>
    </div>
);

const Features = () => (
    <section>
        <div className="section">
            <h2 className="title is-2 has-text-centered">Features</h2>
        </div>
        <div className={styles.features}>
            <RichFeature filename="catching_dark" title="Catch &amp; Collect Pokémon">
                <p>
                    As you talk in your server, pokémon will randomly appear. Compete with other server members to be
                    the fastest to catch it!
                </p>
                <p>
                    Keep catching to increase the size of your collection and work toward completing the Pokédex. Catch
                    rare mythical and legendary pokémon so you can brag to your friends!
                </p>
                <p className="is-size-7 desktop-only">
                    (Fun fact: The pokémon on this image is random! Reload the page to get a new one.)
                </p>
            </RichFeature>

            <RichFeature filename="market_dark" title="Trade &amp; Sell Pokémon">
                <p>
                    Really want a rare pokémon? Looking to add to your personal collection? Trade with other players
                    anywhere, anytime!
                </p>
                <p>
                    You can also buy and sell on the global marketplace, where a wide variety of Pokémon are regularly
                    added.
                </p>
            </RichFeature>

            <RichFeature filename="battle_dark" title="Battle with Pokémon">
                <p>
                    Gather your three most powerful pokémon and challenge fellow trainers in a battle of skill and
                    strategy.
                </p>
                <p>
                    The bot supports 3v3 pokémon duels using moves from the real Pokémon games, complete with fancy,
                    customizable images.
                </p>
            </RichFeature>
        </div>
        <div className={classNames("section", styles["extra-features"])}>
            <div className="container">
                <div className="columns">
                    <div className="column is-10-widescreen is-offset-1-widescreen">
                        <div className="columns is-multiline is-mobile is-centered">
                            <Feature icon={faFilter}>Powerful Filters</Feature>
                            <Feature icon={faCloudMoon}>Time &amp; Weather</Feature>
                            <Feature icon={faStar}>Shiny Hunting</Feature>
                            <Feature icon={faPaw}>Form Changes</Feature>
                            <Feature icon={faUsers}>Large Community</Feature>
                            <Feature icon={faInfoCircle}>Excellent Support</Feature>
                            <Feature icon={faCode}>Open Source</Feature>
                            <Feature icon={faList}>And more...</Feature>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const CTA = () => (
    <section className="hero is-large is-transparent">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h2 className="title is-2">Ready to begin your adventure?</h2>
                <a className="button is-large is-link is-rounded has-shadow" href="https://discord.gg/poketwo">
                    <span>Get Started</span>
                    <span className="icon">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </a>
            </div>
        </div>
    </section>
);

const Index = () => (
    <>
        <Banner />
        <main>
            <Features />
            <CTA />
        </main>
    </>
);

export default Index;

import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
    faCloudMoon,
    faCode,
    faFilter,
    faGrinStars,
    faHandSparkles,
    faInfo,
    faInfoCircle,
    faList,
    faPaw,
    faRandom,
    faRobot,
    faStar,
    faTrophy,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import styles from "../styles/index.module.scss";

const Banner = () => (
    <div className={classNames("section", styles.banner)}>
        <div className="container">
            <div className="columns">
                <div className="column is-8-desktop is-offset-2-desktop has-text-centered">
                    <img
                        src={require("../assets/logo.png")}
                        className="has-drop-shadow"
                        width="200"
                    />
                    <p className="title is-1 is-spaced">
                        The Pokémon experience.
                        <br />
                        On Discord.
                    </p>
                    <p className="subtitle is-4">
                        Pokétwo brings the Pokémon experience to Discord. Catch
                        randomly-spawning pokémon in your servers, trade them to
                        expand your collection, battle with your friends to win
                        rewards, and more!
                    </p>
                    <div className="buttons is-centered">
                        <a
                            className="button is-medium is-link is-rounded has-shadow"
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
                            <span>Join Official Server</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const RichFeature = ({ filename, title, children }) => (
    <div className={classNames("section", styles["feature-wrapper"])}>
        <div className="container">
            <div className="columns is-desktop">
                <div className="column is-10-desktop desktop-only">
                    <object
                        type="image/svg+xml"
                        data={require(`../assets/mockups/${filename}.svg`)}
                        className="catching"
                    >
                        <img
                            src={require(`../assets/mockups/${filename}.png`)}
                        />
                    </object>
                </div>
                <div className={classNames("column", styles.feature)}>
                    <div className="box has-background-link-dark">
                        <p className="title is-4">{title}</p>
                        <div className="content">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Feature = ({ icon, children }) => (
    <div className="tile is-child box has-shadow has-text-centered">
        {icon && <FontAwesomeIcon icon={icon} size="2x" className="mb-4" />}
        <p className="title is-4">{children}</p>
    </div>
);

const Features = () => (
    <>
        <div className="section">
            <p className="title is-2 has-text-centered">Features</p>
        </div>
        <div className={styles.features}>
            <RichFeature
                filename="catching_dark"
                title="Catch &amp; Collect Pokémon"
            >
                <p>
                    As you talk in your server, pokémon will randomly appear.
                    Compete with other server members to be the fastest to catch
                    it!
                </p>
                <p>
                    Keep catching to increase the size of your collection and
                    work toward completing the Pokédex. Catch rare mythical and
                    legendary pokémon so you can brag to your friends!
                </p>
                <p className="is-size-7 desktop-only">
                    (Fun fact: The pokémon on this image is random! Reload the
                    page to get a new one.)
                </p>
            </RichFeature>

            <RichFeature
                filename="market_dark"
                title="Trade &amp; Sell Pokémon"
            >
                <p>
                    Really want a rare pokémon? Looking to add to your personal
                    collection? Trade with other players anywhere, anytime!
                </p>
                <p>
                    You can also buy and sell on the global marketplace, where a
                    wide variety of Pokémon are regularly added.
                </p>
            </RichFeature>

            <RichFeature filename="battle_dark" title="Battle with Pokémon">
                <p>
                    Gather your three most powerful pokémon and challenge fellow
                    trainers in a battle of skill and strategy.
                </p>
                <p>
                    The bot supports 3v3 pokémon duels using moves from the real
                    Pokémon games, complete with fancy, customizable images.
                </p>
            </RichFeature>
        </div>
        <div className={classNames("section", styles["extra-features"])}>
            <div className="container">
                <div className="columns">
                    <div className="column is-8-widescreen is-offset-2-widescreen">
                        <div className="tile is-ancestor">
                            <div className="tile is-vertical is-parent">
                                <Feature icon={faStar}>Shiny Pokémon</Feature>
                                <Feature icon={faFilter}>
                                    Powerful Filters
                                </Feature>
                                <Feature icon={faCloudMoon}>
                                    Time &amp; Weather
                                </Feature>
                            </div>
                            <div className="tile is-vertical is-parent">
                                <Feature icon={faCode}>Open Source</Feature>
                                <Feature icon={faUsers}>
                                    Large Community
                                </Feature>
                                <Feature icon={faInfoCircle}>
                                    Excellent Support
                                </Feature>
                            </div>
                            <div className="tile is-vertical is-parent">
                                <Feature icon={faRandom}>
                                    Mega Evolutions
                                </Feature>
                                <Feature icon={faPaw}>Form Changes</Feature>
                                <Feature icon={faList}>And more...</Feature>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

const Index = () => (
    <>
        <Banner />
        <Features />
    </>
);

export default Index;

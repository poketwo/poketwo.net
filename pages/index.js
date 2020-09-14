import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import styles from "../styles/index.module.scss";

const Banner = () => (
    <div className={classNames("section", styles.banner)}>
        <div className="container">
            <div className="columns">
                <div className="column is-8-desktop is-offset-2-desktop has-text-centered">
                    <p className="title is-1 is-spaced">
                        The Pokémon experience.
                        <br />
                        On Discord.
                    </p>
                    <p className="subtitle is-4">
                        Pokétwo brings the Pokémon experience to Discord. Catch
                        randomly-spawning pokémon in your servers, trade them to
                        expand your collection, and battle with your friends to
                        win rewards.
                    </p>
                    <div className="buttons is-centered">
                        <a
                            className="button is-medium is-link is-rounded has-shadow"
                            href="https://invite.poketwo.net"
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faDiscord} />
                            </span>
                            <span>Invite Pokétwo</span>
                        </a>
                        <a
                            className="button is-medium is-light is-rounded has-shadow"
                            href="https://top.gg/bot/716390085896962058"
                        >
                            <span className="icon">
                                <FontAwesomeIcon icon={faVoteYea} />
                            </span>
                            <span>Vote for us</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Section1 = () => (
    <div className="section">
        <div className="container">
            <p className="title is-2 has-text-centered">Features</p>
            <div className="columns is-desktop">
                <div className="column is-10-desktop desktop-only">
                    <object
                        type="image/svg+xml"
                        data={require("../assets/mockups/catching.svg")}
                        className="catching"
                    >
                        <img src={require("../assets/mockups/catching.png")} />
                    </object>
                </div>
                <div className={classNames("column", styles.featurebox)}>
                    <div className="box has-background-link-dark">
                        <p className="title is-4">
                            Catch &amp; Collect Pokémon
                        </p>
                        <div className="content">
                            <p>
                                As you talk in your server, pokémon will
                                randomly appear. Compete with other server
                                members to be the fastest to catch it!
                            </p>
                            <p>
                                Keep catching to increase the size of your
                                collection and work toward completing the
                                Pokédex. Catch rare mythical and legendary
                                pokémon so you can brag to your friends!
                            </p>
                            <p className="is-size-7 desktop-only">
                                (Fun fact: The pokémon on this image is random!
                                Reload the page to get a new one.)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const Index = () => {
    return (
        <>
            <Banner />
            <Section1 />
        </>
    );
};

export default Index;

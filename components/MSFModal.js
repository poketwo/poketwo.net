import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import NoSSR from "react-no-ssr";

const MSFModal = () => {
    const [active, setActive] = useState(true);

    return (
        <NoSSR>
            <div className={classNames("modal", active && "is-active")}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box content">
                        <h2>Pokétwo Thanksgiving Fundraiser</h2>
                        <p>
                            For Thanksgiving, Pokétwo is running a fundraiser to support{" "}
                            <a href="https://www.msf.org/">Médecins Sans Frontières / Doctors Without Borders</a>, an
                            international humanitarian organization that provides millions of consultations, surgeries,
                            treatments and vaccinations across over 70 countries every year.
                        </p>
                        <p>
                            This is a great opportunity to help fund medical relief to save lives and ease suffering
                            around the world, and you'll receive in-game rewards while you're at it.{" "}
                            <b>
                                100% of your donation will go to Médecins Sans Frontières / Doctors Without Borders.
                                Pokétwo will cover all transaction fees and is matching the first $5,000 in donations.
                            </b>
                        </p>
                        <p>
                            For every <b>$15</b> you contribute to the fundraiser, you will be rewarded 1× limited-time
                            event Pokémon{" "}
                            <a href="https://assets.poketwo.net/images/50032.png">
                                <b>United Pikachu</b>
                            </a>
                            . This Pokémon is only obtainable through this fundraiser. There is no limit to the number
                            of United Pikachu you can obtain.
                        </p>
                        <p>
                            <Image src="https://assets.poketwo.net/images/50032.png" width={250} height={250} />
                        </p>
                        <div className="buttons">
                            <a
                                className="button is-medium has-background-link-dark has-shadow"
                                href="https://msf-fundraiser.poketwo.net/"
                            >
                                Donate
                            </a>
                            <button className="button is-medium has-shadow" onClick={() => setActive(false)}>
                                Continue to site
                            </button>
                        </div>
                    </div>
                    <button
                        className="modal-close is-large"
                        aria-label="close"
                        onClick={() => setActive(false)}
                    ></button>
                </div>
            </div>
        </NoSSR>
    );
};

export default MSFModal;

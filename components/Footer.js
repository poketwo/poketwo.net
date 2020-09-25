import { faDiscord, faReddit, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const FooterLink = ({ href, children, external }) => {
    let Tag;
    if (external) {
        Tag = "a";
    } else {
        Tag = ({ href, children, ...props }) => (
            <Link href={href}>
                <a {...props}>{children}</a>
            </Link>
        );
    }
    return (
        <p>
            <Tag href={href} className="is-unstyled">
                {children}
            </Tag>
        </p>
    );
};

const Footer = () => (
    <div className="footer mt-6">
        <div className="container has-text-centered">
            {/* <div className="columns"> */}
            {/* <div className="column is-5-widescreen is-offset-1-widescreen"> */}
            <figure className="image is-96x96 mb-5 mx-auto">
                <picture>
                    <source srcSet={require("../assets/logo.png?webp")} type="image/webp" />
                    <source srcSet={require("../assets/logo.png")} type="image/png" />
                    <img src={require("../assets/logo.png")} alt="Pokétwo Logo" />
                </picture>
            </figure>
            <p className="title is-4">
                <a href="https://discord.gg/poketwo" className="is-unstyled mr-5">
                    <FontAwesomeIcon icon={faDiscord} />
                </a>
                <a href="https://twitter.com/PoketwoBot" className="is-unstyled mr-5">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.reddit.com/r/poketwo/" className="is-unstyled mr-5">
                    <FontAwesomeIcon icon={faReddit} />
                </a>
                <a href="mailto:support@poketwo.net" className="is-unstyled">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </p>
            {/* </div> */}
            {/* <div className="column is-5-widescreen">
                    <p className="title is-5 mb-2">Pokétwo</p>
                    <FooterLink href="/">Home</FooterLink>
                    <FooterLink href="/people">People</FooterLink>
                    <FooterLink href="/store">Store</FooterLink>
                    <FooterLink href="https://github.com/oliver-ni/poketwo" external>
                        Source Code
                    </FooterLink>
                    <FooterLink href="https://top.gg/bot/716390085896962058/vote" external>
                        Vote
                    </FooterLink>
                </div> */}
            {/* </div> */}
        </div>
    </div>
);

export default Footer;

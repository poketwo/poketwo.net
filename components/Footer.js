import { faDiscord, faReddit, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
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
        <div className="container has-text-centered-mobile">
            <div className="columns is-vcentered">
                <div className="column is-6-widescreen is-offset-1-widescreen">
                    <figure className="image is-64x64 mb-6 mx-auto-mobile">
                        <Image src="/assets/logo_dense.png" alt="Pokétwo Logo" width={64} height={64} />
                    </figure>
                    <p className="title is-4">
                        <a href="https://discord.gg/poketwo" className="is-unstyled mr-5" aria-label="Discord">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                        <a href="https://twitter.com/PoketwoBot" className="is-unstyled mr-5" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.reddit.com/r/poketwo/" className="is-unstyled mr-5" aria-label="Reddit">
                            <FontAwesomeIcon icon={faReddit} />
                        </a>
                        <a href="mailto:support@poketwo.net" className="is-unstyled" aria-label="Email">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </p>
                </div>
                <div className="column is-2-widescreen">
                    <h4 className="title is-5 mb-2">Pokétwo</h4>
                    <FooterLink href="/">Home</FooterLink>
                    <FooterLink href="/people">People</FooterLink>
                    <FooterLink href="/store">Store</FooterLink>
                    <FooterLink href="https://github.com/oliver-ni/poketwo" external>
                        Source Code
                    </FooterLink>
                </div>
                <div className="column is-2-widescreen">
                    <h4 className="title is-5 mb-2">Community</h4>
                    <FooterLink href="https://discord.gg/poketwo" external>
                        Discord Server
                    </FooterLink>
                    <FooterLink href="/rules">Community Rules</FooterLink>
                    <FooterLink href="/code-of-conduct" external>
                        Code of Conduct
                    </FooterLink>
                    <FooterLink href="https://forms.gle/FMqRugm5v47AvFQM8" external>
                        Appeals
                    </FooterLink>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;

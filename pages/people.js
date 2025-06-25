import Image from "next/image";
import { Fragment, useMemo } from "react";
import NoSSR from "react-no-ssr";

const Banner = () => (
    <div className="section">
        <div className="container has-text-centered">
            <p className="title is-2">Our Team</p>
        </div>
    </div>
);

const TeamMember = ({ name, secondary, image }) => (
    <div className="column is-6-tablet is-4-desktop is-3-widescreen">
        <div className="box p-4 has-shadow h-100 is-flex is-flex-direction-column is-justify-content-center">
            <NoSSR>
                <div className="card-content p-0">
                    <div className="columns is-mobile is-vcentered">
                        {image && (
                            <div className="column is-narrow">
                                <figure className="image is-64x64">
                                    <Image className="is-rounded" src={image} alt={name} width={64} height={64} />
                                </figure>
                            </div>
                        )}
                        <div className="column">
                            {name && <p className="title is-5">{name.split("#").join("\u200b#")}</p>}
                            {secondary && (
                                <p className="subtitle has-text-grey is-6">
                                    {secondary.split("\n").map(x => (
                                        <Fragment key={x}>
                                            {x}
                                            <br />
                                        </Fragment>
                                    ))}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </NoSSR>
        </div>
    </div>
);

const Team = ({ people }) => {
    const rand = () => 0.5 - Math.random();
    const randomized = useMemo(() => people.map(x => [...x].sort(rand)));

    return (
        <>
            <Banner />
            <div className="section">
                <div className="container">
                    <div className="columns is-multiline is-centered">
                        {randomized.map(section => section.map(x => <TeamMember {...x} key={x.name} />))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;

export async function getStaticProps(context) {
    return {
        props: {
            people:             [
                [
                    {
                        name: "oliver",
                        image: "https://cdn.discordapp.com/avatars/398686833153933313/b785ad852db5f4eeceaee7c23740f849.png?size=1024",
                        secondary: "Admin\nDevelopment Lead"
                    },
                    {
                        name: "hyperbub",
                        image: "https://cdn.discordapp.com/avatars/361759504422928387/a_b0441250052c4e1ea035f81097d924ce.gif?size=1024",
                        secondary: "Admin\nHuman Resources Lead"
                    },
                    {
                        name: "anoea",
                        image: "https://cdn.discordapp.com/avatars/285861483412193280/684987d47b8a64c2e7b2dd6ad1712d80.png?size=1024",
                        secondary: "Admin\nEvent Team Lead"
                    }
                ],
                [
                    {
                        name: "witherr.",
                        image: "https://cdn.discordapp.com/avatars/267550284979503104/e9cceaeb70ca9df3ef9899535439de98.png?size=1024",
                        secondary: "Admin\nDeveloper"
                    }
                ],
                [
                    {
                        name: "skiparoo",
                        image: "https://cdn.discordapp.com/avatars/97104885337575424/602c68b9b032cec5bcda5ba826e0aae0.png?size=1024",
                        secondary: "Developer"
                    }
                ],
                [
                    {
                        name: "lesbians.",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/517063415613751337/avatars/13325936e9b88201502901967f1beeb5.png?size=1024",
                        secondary: "Server Admin\nModerator"
                    },
                    {
                        name: "tazzy989",
                        image: "https://cdn.discordapp.com/avatars/1042169206692651038/ec2e13a27d230f8035606ab0c712deb1.png?size=1024",
                        secondary: "Server Admin\nModerator"
                    },
                    {
                        name: "rusherhey",
                        image: "https://cdn.discordapp.com/avatars/1282634614761848832/a1ea4555da2ab6b14c4e58cf7c9c7dbd.png?size=1024",
                        secondary: "Bot Admin\nModerator"
                    },
                    {
                        name: "bren.__.",
                        image: "https://cdn.discordapp.com/avatars/336148113465278464/d72ac5f3b1cffeb1121800d74c017ab1.png?size=1024",
                        secondary: "Bot Admin\nModerator"
                    }
                ],
                [
                    {
                        name: "somebluepigeon",
                        image: "https://cdn.discordapp.com/avatars/711892049842012190/1487e550da4b8beb50e0da2c5c62e4b5.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    },
                    {
                        name: "frankmyocean",
                        image: "https://cdn.discordapp.com/avatars/546492524366266369/cc59956c246ada3de06bc90c2ceb1949.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    }
                ],
                [
                    {
                        name: "imperatorjordy",
                        image: "https://cdn.discordapp.com/avatars/349284248840175617/b102c27457681426bedcb527528f1c18.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "koh.na",
                        image: "https://cdn.discordapp.com/avatars/1177693947481559090/f385b9d0f4f00afbe4e9c68f666961fa.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "ariesv78",
                        image: "https://cdn.discordapp.com/avatars/898949618149249085/eb3a9385b2611aeb0e2593b2d23ecc71.png?size=1024",
                        secondary: "Moderator"
                    }
                ],
                [
                    {
                        name: "krisppykreme",
                        image: "https://cdn.discordapp.com/avatars/182301129231695872/a_85dae865457503f884c0c7fec1a94609.gif?size=1024",
                        secondary: "Event Team"
                    },
                    {
                        name: "qydv",
                        image: "https://cdn.discordapp.com/avatars/745825974880436294/7c99269530c3c548395e5daba087b090.png?size=1024",
                        secondary: "Event Team"
                    }
                ]
            ],
        },
    };
}

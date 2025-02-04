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
                        image: "https://cdn.discordapp.com/avatars/361759504422928387/a_6964c3c6d24867fdaf0845c57263d3b3.gif?size=1024",
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
                        name: "metspek",
                        image: "https://cdn.discordapp.com/avatars/243763234685976577/66c17b1e501d7cb4c63a783ead604cf1.png?size=1024",
                        secondary: "Developer\nEvent Team"
                    }
                ],
                [
                    {
                        name: "skiparoo",
                        image: "https://cdn.discordapp.com/avatars/97104885337575424/60082d42033b07aba7a746789c279ba2.png?size=1024",
                        secondary: "Developer"
                    }
                ],
                [
                    {
                        name: "ellewoods.",
                        image: "https://cdn.discordapp.com/avatars/470615071035359262/3083017911dd33de2d803043ec16fa41.png?size=1024",
                        secondary: "Bot Manager\nModerator"
                    },
                    {
                        name: "bren.__.",
                        image: "https://cdn.discordapp.com/avatars/336148113465278464/3561df33df2e935660d0cb4f023d99a8.png?size=1024",
                        secondary: "Bot Manager\nModerator"
                    },
                    {
                        name: "lesbians.",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/517063415613751337/avatars/329609d042bee4d475eb87da25563b28.png?size=1024",
                        secondary: "Server Manager\nModerator"
                    }
                ],
                [
                    {
                        name: "frankmyocean",
                        image: "https://cdn.discordapp.com/avatars/546492524366266369/b4fa7c3c363e1bd40bd1b32d8d9b1076.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    }
                ],
                [
                    {
                        name: "dh388jdfm38fj3",
                        image: "https://cdn.discordapp.com/avatars/1282634614761848832/0fb5ccf932bbdab561f51f9630de631f.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "echogecko.",
                        image: "https://cdn.discordapp.com/avatars/386482648945524738/5f64911a070b6d849cec11fdb90ee19a.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "nathuhn",
                        image: "https://cdn.discordapp.com/avatars/344338374489931789/4db83f3d4973f03e3627b71484d6a211.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "fittlesticks",
                        image: "https://cdn.discordapp.com/avatars/162983579536588800/3138f2b60900c97a2ef121b424ff4e25.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "imperatorjordy",
                        image: "https://cdn.discordapp.com/avatars/349284248840175617/b102c27457681426bedcb527528f1c18.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "jynxerso",
                        image: "https://cdn.discordapp.com/avatars/449792537272516628/b1fb19677d823e56026f8418fefd8924.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "koh.na",
                        image: "https://cdn.discordapp.com/avatars/1177693947481559090/6c9bd18c06c38d5b7a215a83d1be5381.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "tazzy989",
                        image: "https://cdn.discordapp.com/avatars/1042169206692651038/57ba9756b334c213a170c622b821ec53.png?size=1024",
                        secondary: "Moderator"
                    }
                ],
                [
                    {
                        name: "krisppykreme",
                        image: "https://cdn.discordapp.com/avatars/182301129231695872/a_b4dcff8caad8c7a344d83e183e51c18d.gif?size=1024",
                        secondary: "Event Team"
                    },
                    {
                        name: "a_spect",
                        image: "https://cdn.discordapp.com/avatars/651131088219144232/2067702fd6c3fc2f19363fadce761345.png?size=1024",
                        secondary: "Event Team"
                    },
                    {
                        name: "angeljanin",
                        image: "https://cdn.discordapp.com/avatars/874420399608332370/8a67d0a620ed11c315e2afd476e85774.png?size=1024",
                        secondary: "Event Team"
                    },
                    {
                        name: "qydv",
                        image: "https://cdn.discordapp.com/avatars/745825974880436294/edd3c3b2993fac6e661fbc8bd9f3da7e.png?size=1024",
                        secondary: "Event Team"
                    }
                ]
            ],
        },
    };
}

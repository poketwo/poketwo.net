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
            people: [
                [
                    {
                        name: "oliver",
                        image: "https://cdn.discordapp.com/avatars/398686833153933313/9479680c069c3cc837bc965bf17226c9.png?size=1024",
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
                        image: "https://cdn.discordapp.com/avatars/267550284979503104/d7988365d15460256f97303e50901420.png?size=1024",
                        secondary: "Admin\nDeveloper"
                    }
                ],
                [
                    {
                        name: "metspek",
                        image: "https://cdn.discordapp.com/avatars/243763234685976577/a96c15a3f8f8323f16f5b0412867acfc.png?size=1024",
                        secondary: "Developer\nEvent Team"
                    }
                ],
                [
                    {
                        name: "skiparoo",
                        image: "https://cdn.discordapp.com/avatars/97104885337575424/f5792475c90ec49005adfe19f5b7761e.png?size=1024",
                        secondary: "Developer"
                    }
                ],
                [
                    {
                        name: "ellewoods.",
                        image: "https://cdn.discordapp.com/avatars/470615071035359262/61184d999be2aaba6ddae5df953c6e11.png?size=1024",
                        secondary: "Bot Manager\nModerator"
                    },
                    {
                        name: "bren.__.",
                        image: "https://cdn.discordapp.com/avatars/336148113465278464/6eb645e4db471fd04c93e75be20920a2.png?size=1024",
                        secondary: "Bot Manager\nModerator"
                    },
                    {
                        name: "lesbians.",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/517063415613751337/avatars/391076db6fa949972ae42ba710543b1c.png?size=1024",
                        secondary: "Server Manager\nModerator"
                    }
                ],
                [
                    {
                        name: "echogecko.",
                        image: "https://cdn.discordapp.com/avatars/386482648945524738/5f64911a070b6d849cec11fdb90ee19a.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    },
                    {
                        name: "tazzy989",
                        image: "https://cdn.discordapp.com/avatars/1042169206692651038/dea52a68870d1a8a462af8c26fb473c0.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    },
                    {
                        name: "fuzzwuzz",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/825499845070028800/avatars/90878f767fcfa2db58103261875cf07d.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    }
                ],
                [
                    {
                        name: "nathuhn",
                        image: "https://cdn.discordapp.com/avatars/344338374489931789/0cf7e6213c093a20492cbe40e698ef79.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "frankmyocean",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/546492524366266369/avatars/33d787301f2ec142e7fd63191fa97c04.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "barbieviewer",
                        image: "https://cdn.discordapp.com/avatars/1282634614761848832/2792c5a30aebd9951be99b22acdfb0dc.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "fittlesticks",
                        image: "https://cdn.discordapp.com/avatars/162983579536588800/5b13df550123a9663772486c1de87244.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "imperatorjordy",
                        image: "https://cdn.discordapp.com/avatars/349284248840175617/b102c27457681426bedcb527528f1c18.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "jynxerso",
                        image: "https://cdn.discordapp.com/avatars/449792537272516628/336a303b05884ed92cb606f3f3de642d.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "koh.na",
                        image: "https://cdn.discordapp.com/avatars/1177693947481559090/4436f6f74f2c60910cdff614fae1d937.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "swpt",
                        image: "https://cdn.discordapp.com/avatars/891522852182982656/ed46fb72746d5d73be5e05b7989d40b9.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "yiqii",
                        image: "https://cdn.discordapp.com/avatars/297842109514383360/a33b0c3c718e07fba4e20cfac6050185.png?size=1024",
                        secondary: "Moderator"
                    }
                ],
                [
                    {
                        name: "krisppykreme",
                        image: "https://cdn.discordapp.com/avatars/182301129231695872/a_a2e7404e72186c3272734bad65a9f010.gif?size=1024",
                        secondary: "Event Team"
                    },
                    {
                        name: "a_spect",
                        image: "https://cdn.discordapp.com/avatars/651131088219144232/2067702fd6c3fc2f19363fadce761345.png?size=1024",
                        secondary: "Event Team"
                    },
                    {
                        name: "angeljanin",
                        image: "https://cdn.discordapp.com/avatars/874420399608332370/6569c5ddb82ff34c5abe0ebaec9acbea.png?size=1024",
                        secondary: "Event Team"
                    },
                    {
                        name: "qydv",
                        image: "https://cdn.discordapp.com/avatars/745825974880436294/cc7667307008d49927db71e7537f9ded.png?size=1024",
                        secondary: "Event Team"
                    }
                ]
            ],
        },
    };
}

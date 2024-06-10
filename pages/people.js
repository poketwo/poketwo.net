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
                        image: "https://cdn.discordapp.com/avatars/285861483412193280/4dbbe03b6adb36c5eda92e3415f51d20.png?size=1024",
                        secondary: "Admin\nEvent Team Lead"
                    }
                ],
                [
                    {
                        name: "witherr.",
                        image: "https://cdn.discordapp.com/avatars/267550284979503104/f89cf0f3d1af26565b995f4b1ac6c546.png?size=1024",
                        secondary: "Admin\nDeveloper"
                    }
                ],
                [
                    {
                        name: "somebluepigeon",
                        image: "https://cdn.discordapp.com/avatars/711892049842012190/b601a37ad50d15195b99d0339e69876d.png?size=1024",
                        secondary: "Admin\nModerator"
                    }
                ],
                [
                    {
                        name: "metspek",
                        image: "https://cdn.discordapp.com/avatars/243763234685976577/d254b4bd1a736c40423db6ebf4f451db.png?size=1024",
                        secondary: "Developer\nEvent Team"
                    }
                ],
                [
                    {
                        name: "skiparoo",
                        image: "https://cdn.discordapp.com/avatars/97104885337575424/a2800c9c00832e19c3b8d19f99f0deb6.png?size=1024",
                        secondary: "Developer"
                    }
                ],
                [
                    {
                        name: "echogecko.",
                        image: "https://cdn.discordapp.com/avatars/386482648945524738/5f64911a070b6d849cec11fdb90ee19a.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    },
                    {
                        name: "lesbians.",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/517063415613751337/avatars/95bb1345096df9473553acd32661ff25.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    },
                    {
                        name: "angeljanin",
                        image: "https://cdn.discordapp.com/avatars/874420399608332370/c419e2ceeb02bdf2626ec6bd92501eb6.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    },
                    {
                        name: "ellewoods.",
                        image: "https://cdn.discordapp.com/avatars/470615071035359262/511a6b1a8ec7d51a058c7661b2a22010.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    },
                    {
                        name: "tazzy989",
                        image: "https://cdn.discordapp.com/avatars/1042169206692651038/8d730a1c96e84c3ac9870444faed5dc9.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    },
                    {
                        name: "fuzzwuzz",
                        image: "https://cdn.discordapp.com/avatars/825499845070028800/098407f20da523594ec556919ec47294.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    },
                    {
                        name: "bren.__.",
                        image: "https://cdn.discordapp.com/avatars/336148113465278464/512dd676ef7af261afd4183d4530369f.png?size=1024",
                        secondary: "Moderator\nEvent Team"
                    }
                ],
                [
                    {
                        name: ".lime_.",
                        image: "https://cdn.discordapp.com/avatars/554611606492020737/de433b0d00ad204575d47c791b311ef2.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "born2shit",
                        image: "https://cdn.discordapp.com/avatars/406805791274827786/e1c92ec156a00b2f14d49aec706171fa.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "saerauh",
                        image: "https://cdn.discordapp.com/avatars/903797931533025310/a_39b8e891a20a348f687f53c22e3c0082.gif?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "_amethyst_1",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/457553805442023426/avatars/a_7abe944d74b3300df4f7de1bce7405d4.gif?size=1024",
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
                        image: "https://cdn.discordapp.com/avatars/449792537272516628/776b3163cd7b3d85d5133e865bbd7848.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "marc614",
                        image: "https://cdn.discordapp.com/avatars/906333339080884235/577b99c57b711c8af7a06d18139a5518.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "enemy_yes",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/663245308549005334/avatars/ebf87353b17be140b199b440e690408a.png?size=1024",
                        secondary: "Moderator"
                    },
                    {
                        name: "yiqii",
                        image: "https://cdn.discordapp.com/avatars/297842109514383360/f363df274fa845c5a91c73496935bfeb.png?size=1024",
                        secondary: "Moderator"
                    }
                ],
                [
                    {
                        name: "krisppykreme",
                        image: "https://cdn.discordapp.com/avatars/182301129231695872/a_73f74271776a1e2c861ad965a685ac06.gif?size=1024",
                        secondary: "Event Team"
                    },
                    {
                        name: "jjyamanie",
                        image: "https://cdn.discordapp.com/avatars/635631164601663489/c722783a8d2adacd49783c761c71015f.png?size=1024",
                        secondary: "Event Team"
                    },
                    {
                        name: "jasreetdhillon",
                        image: "https://cdn.discordapp.com/avatars/745825974880436294/a46d8aa570487cebc31035f424b91eda.png?size=1024",
                        secondary: "Event Team"
                    }
                ]
            ],
        },
    };
}

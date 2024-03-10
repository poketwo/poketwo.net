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
                        name: "@oliver",
                        image: "https://cdn.discordapp.com/avatars/398686833153933313/9479680c069c3cc837bc965bf17226c9.png?size=1024",
                        secondary: "Admin\nDevelopment Lead",
                    },
                    {
                        name: "@hyperbub",
                        image: "https://cdn.discordapp.com/avatars/361759504422928387/a_6964c3c6d24867fdaf0845c57263d3b3.gif?size=1024",
                        secondary: "Admin\nHuman Resources Lead",
                    },
                    {
                        name: "@anoea",
                        image: "https://cdn.discordapp.com/avatars/285861483412193280/5d81a02bbe4670967cb5baf8c3eb4b40.png?size=1024",
                        secondary: "Admin\nEvent Team Lead",
                    },
                ],
                [
                    {
                        name: "@witherr.",
                        image: "https://cdn.discordapp.com/avatars/267550284979503104/00ef012f18f5960227fcfe7cf9443a6a.png?size=1024",
                        secondary: "Admin\nDeveloper",
                    },
                ],
                [
                    {
                        name: "@metspek",
                        image: "https://cdn.discordapp.com/avatars/243763234685976577/23c01adfb241872717ea4096effe2b85.png?size=1024",
                        secondary: "Developer\nModerator",
                    },
                ],
                [
                    {
                        name: "@joe_lin",
                        image: "https://cdn.discordapp.com/avatars/266729189997150208/fc4184bf8f2431f5731e1ee091a6eb5e.png?size=1024",
                        secondary: "Developer",
                    },
                    {
                        name: "@skiparoo",
                        image: "https://cdn.discordapp.com/avatars/97104885337575424/f0786600cda59b760b503856c85996ae.png?size=1024",
                        secondary: "Developer",
                    },
                ],
                [
                    {
                        name: "@echogecko.",
                        image: "https://cdn.discordapp.com/avatars/386482648945524738/5f64911a070b6d849cec11fdb90ee19a.png?size=1024",
                        secondary: "Moderator\nEvent Team",
                    },
                    {
                        name: "@angeljanin",
                        image: "https://cdn.discordapp.com/avatars/874420399608332370/c419e2ceeb02bdf2626ec6bd92501eb6.png?size=1024",
                        secondary: "Moderator\nEvent Team",
                    },
                    {
                        name: "@ellewoods.",
                        image: "https://cdn.discordapp.com/avatars/470615071035359262/a3083a897c28b8c318ecbe312daf37d2.png?size=1024",
                        secondary: "Moderator\nEvent Team",
                    },
                    {
                        name: "@fuzzwuzz",
                        image: "https://cdn.discordapp.com/avatars/825499845070028800/a37befda03c942cb344fceb85d514cdc.png?size=1024",
                        secondary: "Moderator\nEvent Team",
                    },
                    {
                        name: "@bren.__.",
                        image: "https://cdn.discordapp.com/avatars/336148113465278464/1e52520faacf4c944f96c552fcda3907.png?size=1024",
                        secondary: "Moderator\nEvent Team",
                    },
                    {
                        name: "@taz989",
                        image: "https://cdn.discordapp.com/avatars/118587743746916353/723bd326059dbc33c63e25fa9e118a23.png?size=1024",
                        secondary: "Moderator\nEvent Team",
                    },
                ],
                [
                    {
                        name: "@.lime_.",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/554611606492020737/avatars/c9f61bce87366b44a463a75d3810f67b.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@lesbians.",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/517063415613751337/avatars/38f1a590fbc91b9e686ef8295d1883e9.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@a_spect",
                        image: "https://cdn.discordapp.com/avatars/651131088219144232/2067702fd6c3fc2f19363fadce761345.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@saerauh",
                        image: "https://cdn.discordapp.com/avatars/903797931533025310/a_39b8e891a20a348f687f53c22e3c0082.gif?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@haltfire302",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/130438329484181504/avatars/9d874e2cec7ed868a3a30119358c9df4.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@_amethyst_1",
                        image: "https://cdn.discordapp.com/avatars/457553805442023426/d9711bd004b3d845d1e5f9bfbadefc91.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@imperatorjordy",
                        image: "https://cdn.discordapp.com/avatars/349284248840175617/b102c27457681426bedcb527528f1c18.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@felixzhan",
                        image: "https://cdn.discordapp.com/avatars/424590449164943371/a_43d3c9c3ba4a0daf35d7969861e9113c.gif?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@jynxerso",
                        image: "https://cdn.discordapp.com/avatars/449792537272516628/7a14b24b23aa9acaaf3914c2e5779df4.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@astra._.xx",
                        image: "https://cdn.discordapp.com/avatars/596583995463172106/a93e09ef591f659f5ef409baf4ee934f.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@marc614",
                        image: "https://cdn.discordapp.com/avatars/906333339080884235/a_e1d9d764a6232c8fb856b570597dd77f.gif?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@var_monke",
                        image: "https://cdn.discordapp.com/avatars/857103603130302514/4bcdd76fb2be2e88f61008ff285dad7b.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@yiqii",
                        image: "https://cdn.discordapp.com/avatars/297842109514383360/9414555eecf34aa72ffac4efb2cfb3fa.png?size=1024",
                        secondary: "Moderator",
                    },
                ],
                [
                    {
                        name: "@krisppykreme",
                        image: "https://cdn.discordapp.com/avatars/182301129231695872/a_6f2fa0983eff5e9d9f22c66f3a195e4b.gif?size=1024",
                        secondary: "Event Team",
                    },
                    {
                        name: "@somebluepigeon",
                        image: "https://cdn.discordapp.com/avatars/711892049842012190/13beac52eef0fe7c7fe14857add7e4ca.png?size=1024",
                        secondary: "Event Team",
                    },
                ],
            ],
        },
    };
}

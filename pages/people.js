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
                        secondary: "Admin\nContent & Artwork Lead",
                    },
                ],
                [
                    {
                        name: "@witherr.",
                        image: "https://cdn.discordapp.com/avatars/267550284979503104/6012b7aa3d8fa7659ca2756a59507d58.png?size=1024",
                        secondary: "Admin\nDeveloper",
                    },
                ],
                [
                    {
                        name: "@somebluepigeon",
                        image: "https://cdn.discordapp.com/avatars/711892049842012190/1662a447c3e34021aec39faa9133909e.png?size=1024",
                        secondary: "Admin\nModerator",
                    },
                    {
                        name: "@dagger_mace",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/611659645760831506/avatars/af615152155dea331db75e54a08c3018.png?size=1024",
                        secondary: "Admin\nModerator",
                    },
                ],
                [
                    {
                        name: "@berkeley.edu",
                        image: "https://cdn.discordapp.com/avatars/138498458075136000/d8e2ab371ab85c7cd19f6eb5d155baa1.png?size=1024",
                        secondary: "Admin",
                    },
                ],
                [
                    {
                        name: "@metspek",
                        image: "https://cdn.discordapp.com/avatars/243763234685976577/5edc4c39e70607d599b60345b5353d91.png?size=1024",
                        secondary: "Developer\nModerator",
                    },
                ],
                [
                    {
                        name: "@skiparoo",
                        image: "https://cdn.discordapp.com/avatars/97104885337575424/8e1051525868ae6e8eb0929f91ad25e2.png?size=1024",
                        secondary: "Developer",
                    },
                ],
                [
                    {
                        name: "@echogecko.",
                        image: "https://cdn.discordapp.com/avatars/386482648945524738/e02cfa7d77f93cc5af8018a3cb3a9815.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                    {
                        name: "@a_spect",
                        image: "https://cdn.discordapp.com/avatars/651131088219144232/2067702fd6c3fc2f19363fadce761345.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                    {
                        name: "@saerauh",
                        image: "https://cdn.discordapp.com/avatars/903797931533025310/a_30c5a08d8adb01166939fc5b7d83e7eb.gif?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                    {
                        name: "@angeljanin",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/874420399608332370/avatars/77f89b5ae1dd8aa4696faf83076f9467.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                    {
                        name: "@jynxerso",
                        image: "https://cdn.discordapp.com/avatars/449792537272516628/e00adbf642cc97e68313742ccae04774.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                    {
                        name: "@fuzzwuzz",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/825499845070028800/avatars/dc8630d4db8e3f966d8e9c5ee8b65ac8.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                    {
                        name: "@bren.__.",
                        image: "https://cdn.discordapp.com/avatars/336148113465278464/2d3ba5b2669f90ec2382ef470ee5c657.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                    {
                        name: "@astra._.xx",
                        image: "https://cdn.discordapp.com/avatars/596583995463172106/35be1375cbadeeaa24981228d18feba7.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                    {
                        name: "@taz989",
                        image: "https://cdn.discordapp.com/avatars/118587743746916353/a7328af9dc595aca0320002da9fcc9d0.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                ],
                [
                    {
                        name: "@.lime_.",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/554611606492020737/avatars/b822f68978f4c6a68140a3dc3772a736.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@lesbians.",
                        image: "https://cdn.discordapp.com/avatars/517063415613751337/e7da2af86a778a9193b2c311dddc44d2.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@ellewoods.",
                        image: "https://cdn.discordapp.com/avatars/470615071035359262/0595587866e102a8f0103f4c9ce3d8f8.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@haltfire302",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/130438329484181504/avatars/9d874e2cec7ed868a3a30119358c9df4.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@amethyst_000",
                        image: "https://cdn.discordapp.com/avatars/457553805442023426/7cf068d3ad5339e2a4b9000b31989d71.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@imperatorjordy",
                        image: "https://cdn.discordapp.com/avatars/349284248840175617/c29fd71f486741d2a575a52af8455bff.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@felixzhan",
                        image: "https://cdn.discordapp.com/avatars/424590449164943371/a_43d3c9c3ba4a0daf35d7969861e9113c.gif?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@marc614",
                        image: "https://cdn.discordapp.com/avatars/906333339080884235/a_c46af76079267feae414cd28625453ac.gif?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@var_monke",
                        image: "https://cdn.discordapp.com/avatars/857103603130302514/4bcdd76fb2be2e88f61008ff285dad7b.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@yiqii",
                        image: "https://cdn.discordapp.com/avatars/297842109514383360/2680e63c2c2e2be906986a64f93cebe8.png?size=1024",
                        secondary: "Moderator",
                    },
                ],
                [
                    {
                        name: "@krisppykreme",
                        image: "https://cdn.discordapp.com/avatars/182301129231695872/a_bd226dd988b5a3e20db2dabba77b9dc1.gif?size=1024",
                        secondary: "Content & Artwork Team",
                    },
                ],
            ],
        },
    };
}

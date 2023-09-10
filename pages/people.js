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
                        image: "https://cdn.discordapp.com/avatars/361759504422928387/fb3ed0c52bba5880b4889380dfab008a.png?size=1024",
                        secondary: "Admin\nHuman Resources Lead",
                    },
                    {
                        name: "@anoea",
                        image: "https://cdn.discordapp.com/avatars/285861483412193280/5acba460c4de33cc3628609091f23975.png?size=1024",
                        secondary: "Admin\nContent & Artwork Lead",
                    },
                ],
                [
                    {
                        name: "@witherr.",
                        image: "https://cdn.discordapp.com/avatars/267550284979503104/3404048356c9b53a2f846730852432aa.png?size=1024",
                        secondary: "Admin\nDeveloper",
                    },
                ],
                [
                    {
                        name: "@somebluepigeon",
                        image: "https://cdn.discordapp.com/avatars/711892049842012190/6659658f17f89a4aff3f2b2bf11a0de7.png?size=1024",
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
                        image: "https://cdn.discordapp.com/avatars/243763234685976577/a_a50de0fddb611b7d3cb511ed5c77fe25.gif?size=1024",
                        secondary: "Developer\nModerator",
                    },
                ],
                [
                    {
                        name: "@skiparoo",
                        image: "https://cdn.discordapp.com/avatars/97104885337575424/02ee2c24d827d32d481db0f160d0a175.png?size=1024",
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
                        image: "https://cdn.discordapp.com/avatars/903797931533025310/0f1159b76fcb4771fdb2ccf3756b29b4.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                    {
                        name: "@foxrii_",
                        image: "https://cdn.discordapp.com/avatars/850079219681722398/b1660925451d6bd65d13ac783369bba9.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                    {
                        name: "@fuzzwuzz",
                        image: "https://cdn.discordapp.com/avatars/825499845070028800/8c845d5f8662e4cd7a6faa2ef34b8895.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                    {
                        name: "@bren.__.",
                        image: "https://cdn.discordapp.com/avatars/336148113465278464/4a21f0caffcb49991d0a3b9efb3c1657.png?size=1024",
                        secondary: "Moderator\nContent & Artwork Team",
                    },
                ],
                [
                    {
                        name: "@.lime_.",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/554611606492020737/avatars/993b2df23bcbaabe4b3f4d50895fd31e.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@lesbians.",
                        image: "https://cdn.discordapp.com/avatars/517063415613751337/1796a71c7ac6312d3f5355a88085a21c.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@angeljanin",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/874420399608332370/avatars/ad7c2c257651f5d97dfbef8481461260.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@ellewoods.",
                        image: "https://cdn.discordapp.com/avatars/470615071035359262/a38b8b668bf5e0b91e938910741b31b2.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@haltfire302",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/130438329484181504/avatars/9d874e2cec7ed868a3a30119358c9df4.png?size=1024",
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
                        name: "@haloboy_",
                        image: "https://cdn.discordapp.com/avatars/808227231376736267/b5d475cb3350555f998ac437a138f11c.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@jynxerso",
                        image: "https://cdn.discordapp.com/avatars/449792537272516628/e00adbf642cc97e68313742ccae04774.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@astra._.xx",
                        image: "https://cdn.discordapp.com/avatars/596583995463172106/0b91a9fe28e5c11806412f97eaa7273d.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@marc614",
                        image: "https://cdn.discordapp.com/avatars/906333339080884235/a_b684fde22c4ba2e75f064af4a186f6e1.gif?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@.data.",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/450646613682159647/avatars/a_d9cefa0edf36c3bbef0d89621863ee67.gif?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@var_monke",
                        image: "https://cdn.discordapp.com/avatars/857103603130302514/4bcdd76fb2be2e88f61008ff285dad7b.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "@yiqii",
                        image: "https://cdn.discordapp.com/avatars/297842109514383360/28e423b135688886d32647ff48865bc6.png?size=1024",
                        secondary: "Moderator",
                    },
                ],
                [
                    {
                        name: "@krisppykreme",
                        image: "https://cdn.discordapp.com/avatars/182301129231695872/a_bef3265d9cd8d893ce706def2e2280a0.gif?size=1024",
                        secondary: "Content & Artwork Team",
                    },
                ],
            ],
        },
    };
}

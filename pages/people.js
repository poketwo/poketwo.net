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
                        image: "https://cdn.discordapp.com/avatars/398686833153933313/b785ad852db5f4eeceaee7c23740f849.png?size=1024",
                        secondary: "Admin\nDevelopment Lead",
                    },
                ],
                [
                    {
                        name: "foreboding",
                        image: "https://cdn.discordapp.com/avatars/334155028170407949/f4f7f89f1163baa04ba11c3e6371888f.png?size=1024",
                        secondary: "Admin\nDeveloper",
                    },
                    {
                        name: "witherr.",
                        image: "https://cdn.discordapp.com/avatars/267550284979503104/e9cceaeb70ca9df3ef9899535439de98.png?size=1024",
                        secondary: "Admin\nDeveloper",
                    },
                ],
                [
                    {
                        name: "tazzy989",
                        image: "https://cdn.discordapp.com/avatars/1042169206692651038/ec2e13a27d230f8035606ab0c712deb1.png?size=1024",
                        secondary: "Admin\nModerator",
                    },
                ],
                [
                    {
                        name: "anoea",
                        image: "https://cdn.discordapp.com/avatars/285861483412193280/684987d47b8a64c2e7b2dd6ad1712d80.png?size=1024",
                        secondary: "Event Team Lead\nModerator",
                    },
                ],
                [
                    {
                        name: "varmonke",
                        image: "https://cdn.discordapp.com/avatars/857103603130302514/6b34a23c82e4f49dcce2500d0408dc2a.png?size=1024",
                        secondary: "Developer",
                    },
                ],
                [
                    {
                        name: "frankmyocean",
                        image: "https://cdn.discordapp.com/avatars/546492524366266369/5a1f4e905b7351709b96c6c999191618.png?size=1024",
                        secondary: "Moderator\nEvent Team",
                    },
                    {
                        name: "bren.__.",
                        image: "https://cdn.discordapp.com/avatars/336148113465278464/bc0adab136a4db602dc3721e87da9ec6.png?size=1024",
                        secondary: "Moderator\nEvent Team",
                    },
                ],
                [
                    {
                        name: "djlo",
                        image: "https://cdn.discordapp.com/avatars/1069709648598401145/5f72289ced453f53291a08549201965d.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "mr_rio",
                        image: "https://cdn.discordapp.com/avatars/720010802614239252/ea378abc63a8db617665b8ab49fef2ac.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "zoro_tatsuya",
                        image: "https://cdn.discordapp.com/avatars/710045949397041205/87cb09110e596dfd6e3a79be500317a5.png?size=1024",
                        secondary: "Moderator",
                    },
                    {
                        name: "tokohyo",
                        image: "https://cdn.discordapp.com/avatars/1177693947481559090/44248f56ccb46bda4cb700cf6119876c.png?size=1024",
                        secondary: "Moderator",
                    },
                ],
                [
                    {
                        name: "krisppykreme",
                        image: "https://cdn.discordapp.com/avatars/182301129231695872/8dd082c7fbdbfb9b231b834f28d2dfa0.png?size=1024",
                        secondary: "Event Team",
                    },
                    {
                        name: "somebluepigeon",
                        image: "https://cdn.discordapp.com/avatars/711892049842012190/6b3396bc3a0523df8a899c5b4f178509.png?size=1024",
                        secondary: "Event Team",
                    },
                    {
                        name: "qydv",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/745825974880436294/avatars/70ed47efb07e8b1912b6f8bbff01d0e9.png?size=1024",
                        secondary: "Event Team",
                    },
                ],
            ],
        },
    };
}

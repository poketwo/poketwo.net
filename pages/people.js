import classNames from "classnames";
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

const TeamMember = ({ name, secondary, image, small = false }) => (
    <div
        className={classNames(
            "column",
            !small && "is-6-tablet is-4-desktop is-3-widescreen",
            small && "is-4-tablet is-3-desktop is-3-widescreen"
        )}
    >
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
                        <div className={classNames("column", small && "has-text-centered")}>
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

const Section = ({ title, members, small = false }) => {
    const randomized = useMemo(() =>
        members.map(x =>
            [...x].sort(function () {
                return 0.5 - Math.random();
            })
        )
    );
    const Wrapper = small
        ? ({ children }) => (
              <div className="columns">
                  <div className="column is-10-widescreen is-offset-1-widescreen">{children}</div>
              </div>
          )
        : React.Fragment;
    return (
        <div className="section">
            <div className="container">
                <Wrapper>
                    <p className="title has-text-centered mb-6">{title}</p>
                    <div className="columns is-multiline is-centered">
                        {randomized.map(section => section.map(x => <TeamMember {...x} key={x.name} small={small} />))}
                    </div>
                </Wrapper>
            </div>
        </div>
    );
};

const Team = ({ people, retired, other }) => (
    <>
        <Banner />
        <Section title="Staff Team" members={people} />
        <Section title="Retired Staff" members={retired} />
        <Section title="Other Significant Contributors" members={other} small />
    </>
);

export default Team;

export async function getStaticProps(context) {
    return {
        props: {
            people: [
                [
                    {
                        name: "Oliver#0001",
                        image:
                            "https://cdn.discordapp.com/avatars/398686833153933313/9a4a1b521bbe3f9d0f3e5da2f659ad93.png",
                        secondary: "Executive Director",
                    },
                ],
                [
                    {
                        name: "Dagger_Mace#5953",
                        image: "https://i.imgur.com/dNUdlPc.png",
                        secondary: "Administrator",
                    },
                    {
                        name: "Hyperbub#9000",
                        image:
                            "https://cdn.discordapp.com/avatars/361759504422928387/a_10c9ab3d1f0b94f126a61c67b64d5029.gif",
                        secondary: "Administrator",
                    },
                    {
                        name: "Taffy#3090",
                        image:
                            "https://cdn.discordapp.com/avatars/342473674902732810/50a973391a4c554a76d6f9eb0a449831.png",
                        secondary: "Administrator",
                    },
                    {
                        name: "sunflower#0159",
                        image:
                            "https://cdn.discordapp.com/avatars/643697069596606475/9ed20a4b7015260536c433297b18842b.png",
                        secondary: "Administrator",
                    },
                ],
                [
                    {
                        name: "Anoea#3441",
                        image:
                            "https://cdn.discordapp.com/avatars/285861483412193280/dd48d794367e8ca137ed58bbcd78c9e1.png",
                        secondary: "Community Manager\nArtwork Director",
                    },
                ],
                [
                    {
                        name: "BlueLego#2332",
                        image:
                            "https://cdn.discordapp.com/avatars/711892049842012190/d100d669ef2931c1e8ffa650db629ea4.png",
                        secondary: "Community Manager",
                    },
                ],
                [
                    {
                        name: "Alkinus#3747",
                        image:
                            "https://cdn.discordapp.com/avatars/189845053101965312/695fba1d6871782305f38e63bf412dee.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Blu Bambii Jess#6814",
                        image:
                            "https://cdn.discordapp.com/avatars/712521240602214400/b7e4109eb0c0b30887fff01e1347c395.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "FBCB#3544",
                        image:
                            "https://cdn.discordapp.com/guilds/716390832034414685/users/435120408706940939/avatars/17e80bebbd6a399e413dee7fdf53d1ba.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Felix Zhan#8215",
                        image:
                            "https://cdn.discordapp.com/avatars/424590449164943371/a_43d3c9c3ba4a0daf35d7969861e9113c.gif",
                        secondary: "Moderator",
                    },
                    {
                        name: "Haltfire302#9839",
                        image:
                            "https://cdn.discordapp.com/guilds/716390832034414685/users/130438329484181504/avatars/84989e8fc6965112e43f3e5b05984c93.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "JellyGreen#5506",
                        image:
                            "https://cdn.discordapp.com/avatars/671500094608244747/836e688fc1ec47d671c7cce3f955626d.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Josh__RL#0001",
                        image:
                            "https://cdn.discordapp.com/avatars/113754480519938052/a_75caaf1ca64c20e71d1f86c8d69ab0ce.gif",
                        secondary: "Moderator",
                    },
                    {
                        name: "Leviquackerman#1611",
                        image:
                            "https://cdn.discordapp.com/avatars/278310968659017731/d465a3a17d20863a0a0050d422c9e4cb.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "MaRc#6749",
                        image:
                            "https://cdn.discordapp.com/avatars/906333339080884235/77766e940e4c0a9c70022a0dc5758abc.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Siesta<3#3680",
                        image:
                            "https://cdn.discordapp.com/avatars/710897590631137332/1bf4e25862ed870f6c72318338836994.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "SuperJedi224#2591",
                        image:
                            "https://cdn.discordapp.com/avatars/304098467192635392/31154f736eace93377f25dfb5361c819.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Witherr\ud83d\udda4#5417",
                        image:
                            "https://cdn.discordapp.com/avatars/267550284979503104/1ea16897c0b10d3676ec7fb0a815f1f5.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Yiqii#6383",
                        image:
                            "https://cdn.discordapp.com/avatars/297842109514383360/09b9d3dcb48d39314a700ddd29c9ba60.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Zerx#6365",
                        image:
                            "https://cdn.discordapp.com/avatars/765624811841519697/b2ed4e414ceaeb5b7b2860eea34e84dc.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "amie#1273",
                        image:
                            "https://cdn.discordapp.com/guilds/716390832034414685/users/430172742289981445/avatars/2b00c24db5551db364c7e7bb59375932.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "rawl#3097",
                        image:
                            "https://cdn.discordapp.com/avatars/679744967928709240/66ec46fe8e6d78e135fb590aee0c6f64.png",
                        secondary: "Moderator",
                    },
                ],
            ],
            retired: [
                [
                    {
                        name: "Godslayer#6969",
                        image:
                            "https://cdn.discordapp.com/avatars/470390645228437504/e0ae7567f1ecfa81768025019c211511.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Harv#0850",
                        image: "https://cdn.discordapp.com/embed/avatars/0.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "HiroWilde#6159",
                        image:
                            "https://cdn.discordapp.com/avatars/405452200656109569/60840c978c7ba52335cda53808119706.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "bell#2796",
                        image:
                            "https://cdn.discordapp.com/avatars/299077948324184064/5e3e82890fedafe128553198b854b874.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "kooqer#2227",
                        image:
                            "https://cdn.discordapp.com/avatars/666294287608053780/84c35bb13801b5013c08dbccfca4568f.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Crunchy#1123",
                        image:
                            "https://cdn.discordapp.com/avatars/173205413683003393/615d0f071596f85825307dcc868e5d03.png",
                        secondary: "Moderator",
                    },
                ],
            ],
            other: [
                [
                    {
                        name: "keelay#0001",
                        secondary: "Development",
                    },
                ],
                [
                    {
                        name: "Cinnabun#6204",
                        secondary: "Art",
                    },
                    {
                        name: "Haltfire302#9839",
                        secondary: "Art",
                    },
                    {
                        name: "Anoea#3441",
                        secondary: "Art",
                    },
                    {
                        name: "HiroWilde#0359",
                        secondary: "Art",
                    },
                    {
                        name: "Gaurav#2388",
                        secondary: "Art",
                    },
                    {
                        name: "Alkinus#3747",
                        secondary: "Art",
                    },
                ],
            ],
        },
    };
}

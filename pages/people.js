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
                        image: "https://cdn.discordapp.com/avatars/398686833153933313/f61c66b3897e7f82fc2093028a80f3ed.png",
                        secondary: "Executive Director",
                    },
                ],
                [
                    {
                        name: "Taffy#3090",
                        image: "https://cdn.discordapp.com/avatars/342473674902732810/3c30aa4a62c80bd1ff7ad0dd62663e50.png",
                        secondary: "Admin",
                    },
                    {
                        name: "sunflower#0159",
                        image: "https://cdn.discordapp.com/avatars/643697069596606475/9ed20a4b7015260536c433297b18842b.png",
                        secondary: "Head of Staff",
                    },
                    {
                        name: "Dagger_Mace#5953",
                        image: "https://i.imgur.com/dNUdlPc.png",
                        secondary: "Admin",
                    },
                    {
                        name: "Hyperbub#9000",
                        image: "https://cdn.discordapp.com/avatars/361759504422928387/afca2f58c36cd0a2a375d70283e85ce8.png",
                        secondary: "Admin",
                    },
                ],
                [
                    {
                        name: "Anoea#3441",
                        image: "https://cdn.discordapp.com/avatars/285861483412193280/5588a21bbe27e8571d8ea720ba3ad10b.png",
                        secondary: "Community Manager\nArtwork Director",
                    },
                ],
                [
                    {
                        name: "BlueLego#2332",
                        image: "https://cdn.discordapp.com/avatars/711892049842012190/d90e3ee53bd00b04355a9eac2355c237.png",
                        secondary: "Community Manager",
                    },
                ],
                [
                    {
                        name: "SuperJedi224#2591",
                        image: "https://i.imgur.com/Bv1L7nu.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Alkinus#3747",
                        image: "https://i.imgur.com/3APWurT.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "BluBambii | Jess#6814",
                        image: "https://cdn.discordapp.com/avatars/712521240602214400/ed32d7bb911cfec26878ba9ec380b62e.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Haltfire302#9839",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/130438329484181504/avatars/84989e8fc6965112e43f3e5b05984c93.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Zerx#6365",
                        image: "https://cdn.discordapp.com/avatars/765624811841519697/79c7f3061bdbec303bb5d1ce0f2a38c9.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Josh__RL#0001",
                        image: "https://cdn.discordapp.com/avatars/113754480519938052/a_75caaf1ca64c20e71d1f86c8d69ab0ce.gif",
                        secondary: "Moderator",
                    },
                    {
                        name: "Knash#2471",
                        image: "https://cdn.discordapp.com/avatars/781992237097287711/e4e2ff0ec443e0a826d0d7a511831cd6.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Kuru Kuru#8368",
                        image: "https://cdn.discordapp.com/avatars/339618844417064961/e7fc697523f3049a7b9a5ecf91445725.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "MaRc#0001",
                        image: "https://cdn.discordapp.com/guilds/716390832034414685/users/906333339080884235/avatars/a_2fee719bdd65c1dc61b7cedab85c3253.gif",
                        secondary: "Moderator",
                    },
                    {
                        name: "Witherr🖤#5417",
                        image: "https://cdn.discordapp.com/avatars/267550284979503104/30abba2453e74c475ab475e1f8429392.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Var_Monke#1354",
                        image: "https://cdn.discordapp.com/avatars/857103603130302514/6133a068e528ddbdcb93c5ee7c6c865b.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "FBCB#3544",
                        image: "https://cdn.discordapp.com/avatars/435120408706940939/feaf6c976665355ef7f582363df3949d.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Sept#8911",
                        image: "https://cdn.discordapp.com/avatars/891522852182982656/4d75072bbe33163d5e9cf48754375a71.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Yiqii#6383",
                        image: "https://cdn.discordapp.com/avatars/297842109514383360/a_0f1b9bd013f147d46c37a269e4e44490.gif",
                        secondary: "Moderator",
                    },
                ],
            ],
            retired: [
                [
                    {
                        name: "Crunchy#1123",
                        image: "https://cdn.discordapp.com/avatars/173205413683003393/615d0f071596f85825307dcc868e5d03.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Siesta#3680",
                        image: "https://cdn.discordapp.com/avatars/710897590631137332/259460e0241d75fc9ae43b2d6787c561.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "Harv#0850",
                        image: "https://cdn.discordapp.com/embed/avatars/0.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "Perkele Saatana#6969",
                        image: "https://cdn.discordapp.com/avatars/470390645228437504/c3a920c50f1be62f93aee3a0079c4755.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "Leviquackerman#1611",
                        image: "https://cdn.discordapp.com/avatars/278310968659017731/d465a3a17d20863a0a0050d422c9e4cb.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "amie#1273",
                        image: "https://cdn.discordapp.com/avatars/430172742289981445/a_d5bd3968d3ff6b8e8447413cd7735d09.gif",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "fzhan#8215",
                        image: "https://cdn.discordapp.com/avatars/424590449164943371/a_43d3c9c3ba4a0daf35d7969861e9113c.gif",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "kooqer#2227",
                        image: "https://cdn.discordapp.com/avatars/666294287608053780/25789de3798470ce78df2db06f078e14.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "rawl#3097",
                        image: "https://cdn.discordapp.com/avatars/679744967928709240/efa30f695339d5522947e4a04ead8019.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "JellyGreen#5506",
                        image: "https://cdn.discordapp.com/avatars/671500094608244747/836e688fc1ec47d671c7cce3f955626d.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "bell#2796",
                        image: "https://cdn.discordapp.com/avatars/299077948324184064/611c9ca4a43f5efc91b1f013e8a825b7.png",
                        secondary: "Retired Staff",
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

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
                        image: "https://i.imgur.com/2aQWGZA.png",
                        secondary: "Executive Director",
                    },
                ],
                [
                    {
                        name: "Taffy#3090",
                        image: "https://i.imgur.com/QlFFSMT.png",
                        secondary: "Admin",
                    },
                    {
                        name: "sunflower#0159",
                        image: "https://i.imgur.com/7EWMkx2.png",
                        secondary: "Head of Staff",
                    },
                    {
                        name: "Dagger_Mace#5953",
                        image: "https://i.imgur.com/dNUdlPc.png",
                        secondary: "Admin",
                    },
                    {
                        name: "Hyperbub#9000",
                        image: "https://i.imgur.com/YyGN2FT.png",
                        secondary: "Admin",
                    },
                ],
                [
                    {
                        name: "Anoea#3441",
                        image: "https://i.imgur.com/uppdW1a.png",
                        secondary: "Community Manager\nArtwork Director",
                    },
                ],
                [
                    {
                        name: "BlueLego#2332",
                        image: "https://i.imgur.com/xBPWYPz.png",
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
                        image: "https://i.imgur.com/vlXnx3v.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Zerx#6365",
                        image: "https://i.imgur.com/gJKdMld.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Josh__RL#0001",
                        image: "https://i.imgur.com/WPWl5eW.gif",
                        secondary: "Moderator",
                    },
                    {
                        name: "Knash#2471",
                        image: "https://i.imgur.com/4t2ttJo.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Kuru Kuru#8368",
                        image: "https://i.imgur.com/6W0yvNg.gif",
                        secondary: "Moderator",
                    },
                    {
                        name: "MaRc#0001",
                        image: "https://i.imgur.com/WhYWYYu.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Witherr🖤#5417",
                        image: "https://i.imgur.com/rYYF0MV.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Var_Monke#1354",
                        image: "https://i.imgur.com/x7DeA5H.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "FBCB#3544",
                        image: "https://i.imgur.com/y3Bg4Cr.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Sept#8911",
                        image: "https://i.imgur.com/jqEMq1u.png",
                        secondary: "Moderator",
                    },
                    {
                        name: "Yiqii#6383",
                        image: "https://i.imgur.com/Pade7Tz.png",
                        secondary: "Moderator",
                    },
                ],
            ],
            retired: [
                [
                    {
                        name: "Crunchy#1123",
                        image: "https://i.imgur.com/bcyAGiT.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "BOO#3680",
                        image: "https://i.imgur.com/ono5iSJ.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "Harv#0850",
                        image: "https://cdn.discordapp.com/embed/avatars/0.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "Godslayer#6969",
                        image: "https://i.imgur.com/SuXLBOm.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "Leviquackerman#1611",
                        image: "https://i.imgur.com/DXqWZRM.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "amie#1273",
                        image: "https://i.imgur.com/gLvj9gs.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "fzhan#8215",
                        image: "https://i.imgur.com/6WoNAi2.gif",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "kooqer#2227",
                        image: "https://i.imgur.com/H8HWbGv.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "rawl#3097",
                        image: "https://i.imgur.com/2EptkGS.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "FAMNIG HJÄRTA#5506",
                        image: "https://i.imgur.com/b8e5Ks1.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "bell#2796",
                        image: "https://i.imgur.com/NAwB27g.png",
                        secondary: "Retired Staff",
                    },
                    {
                        name: "Haltfire302#9839",
                        image: "https://i.imgur.com/EZ6cQdU.png",
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

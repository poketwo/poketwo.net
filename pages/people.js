import classNames from "classnames";
import Image from "next/image";
import { useMemo } from "react";
import NoSSR from "react-no-ssr";

const Banner = () => (
    <div className="section">
        <div className="container has-text-centered">
            <p className="title is-2">Our Team</p>
        </div>
    </div>
);

const TeamMember = ({ name, tagline, image, small = false }) => (
    <div
        className={classNames({
            column: true,
            "is-6-tablet is-4-desktop is-3-widescreen": !small,
            "is-4-tablet is-3-desktop is-3-widescreen": small,
        })}
    >
        <div className="box has-shadow has-text-centered h-100">
            {image && (
                <figure className="image is-96x96 mb-5 mx-auto">
                    <NoSSR>
                        <Image className="is-rounded" src={`/assets/team/${image}`} alt={name} width={96} height={96} />
                    </NoSSR>
                </figure>
            )}
            {name && <p className="title is-5">{name}</p>}
            {tagline && <p className="subtitle has-text-grey is-6">{tagline}</p>}
        </div>
    </div>
);

const Section = ({ title, members, small = false }) => {
    const randomized = useMemo(() =>
        [...members].sort(function () {
            return 0.5 - Math.random();
        })
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
                        {randomized.map(x => (
                            <TeamMember {...x} key={x.name} small={small} />
                        ))}
                    </div>
                </Wrapper>
            </div>
        </div>
    );
};

const Team = ({ developers, admins, moderators, support, other }) => (
    <>
        <Banner />
        <Section title="Development" members={developers} />
        <Section title="Administration" members={admins} />
        <Section title="Moderation" members={moderators} />
        <Section title="Other Significant Contributors" members={other} small />
    </>
);

export default Team;

export async function getStaticProps(context) {
    return {
        props: {
            developers: [
                {
                    name: "Oliver#0001",
                    image: "olidip.png",
                    tagline: "hello world",
                },
            ],
            admins: [
                {
                    name: "Taffy#3090",
                    image: "taffy.png",
                    tagline: "freeshavacadoo",
                },
                {
                    name: "sunflora#0159",
                    image: "sunflora.png",
                    tagline: "i be-leaf in you, sunshine",
                },
                {
                    name: "Dagger_Mace#5953",
                    image: "dagger.png",
                    tagline: "O.o",
                },
                {
                    name: "Hyperbub#9000",
                    image: "hyper.png",
                    tagline: "Your casual fate degenerate who also likes sheep.",
                },
            ],
            moderators: [
                {
                    name: "Alkinus#3747",
                    image: "alki.png",
                    tagline: "Ultimate Cutiefly Maniac. <33",
                },
                {
                    name: "amie#1273",
                    image: "amie.png",
                    tagline: "hiro drew this :qwq:",
                },
                {
                    name: "Anoea#3441",
                    image: "anoea.jpg",
                    tagline: "Kindness inspires beauty in all",
                },
                {
                    name: "bell ❣#9211",
                    image: "bell.png",
                    tagline: "all i do is make box brownies and sing lady gaga",
                },
                {
                    name: "BlueLego#2332",
                    image: "bluelego.png",
                    tagline: "i like lego",
                },
                {
                    name: "MemeBoiFBCB#8224",
                    image: "fbcb.png",
                    tagline: "Gimme your delibirbs",
                },
                {
                    name: "Felix Zhan#8215",
                    image: "felix.png",
                    tagline: "simp-le minded.",
                },
                {
                    name: "Harv#0850",
                    image: "harv.png",
                    tagline: "People? They come and they leave, but what remains is this night sky",
                },
                {
                    name: "Haltfire302#9839",
                    image: "halt.jpg",
                    tagline: "likes manga and videogames",
                },
                {
                    name: "Godslayer#6969",
                    image: "fox.png",
                    tagline: "Just a fox 🦊",
                },
                {
                    name: "JellyGreen#5506",
                    image: "jelly.jpg",
                    tagline: "Praise Sunflora",
                },
                {
                    name: "Josh__RL#0001",
                    image: "josh.jpg",
                    tagline: "Gib food",
                },
                {
                    name: "Leviquackerman#1611",
                    image: "levi.png",
                    tagline: "Sylveon queen.",
                },
                {
                    name: "MaRc#0614",
                    image: "marc.png",
                    tagline: "🐸 owo hug the frogout 🐸",
                },
                {
                    name: "rawl#3097",
                    image: "rawl.jpg",
                    tagline: "probably sleeping",
                },
                {
                    name: "SuperJedi224#2591",
                    image: "jedi.png",
                    tagline: "mysterious",
                },
                {
                    name: "HiroWilde#0359",
                    image: "hiro.png",
                    tagline: "Simpulsive uwu",
                },
                {
                    name: "Tobbe#2196",
                    image: "tobbe.jpg",
                    tagline: "Base",
                },
            ],
            other: [
                {
                    name: "Cinnabun#6204",
                    tagline: "Art",
                },
                {
                    name: "Haltfire302#9839",
                    tagline: "Art",
                },
                {
                    name: "Anoea#3441",
                    tagline: "Art",
                },
                {
                    name: "HiroWilde#0359",
                    tagline: "Art",
                },
                {
                    name: "Gaurav#2388",
                    tagline: "Art",
                },
                {
                    name: "Alkinus#3747",
                    tagline: "Art",
                },
                {
                    name: "keelay#0001",
                    tagline: "Code",
                },
            ],
        },
    };
}

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

// Written hourly by guiduck's StaffRoster cog from live Discord data.
const STAFF_API_URL = "https://admin.poketwo.net/api/staff";
const REVALIDATE_SECONDS = 3600;

// Discord role ID -> title, most senior first. People are grouped into sections by their top title.
const ROLE_TITLES = {
    "974942298301431809": "Admin",
    "718006431231508481": "Admin",
    "1472581910894215268": "Advisor",
    "1150516638236553319": "Development Lead",
    "1150516551368314900": "Event Team Lead",
    "1150517456230694932": "Human Resources Lead",
    "1483962728866644109": "Manager",
    "1483963509275623444": "Manager",
    "1196632752523579423": "Developer",
    "1120600250474827856": "Developer",
    "974937010462683166": "Moderator",
    "724879492622843944": "Moderator",
    "930776361205919804": "Event Team",
};

const TITLE_ORDER = [...new Set(Object.values(ROLE_TITLES))];

const titlesOf = member => {
    const titles = new Set(member.roles.map(role => ROLE_TITLES[role.id]).filter(Boolean));
    return TITLE_ORDER.filter(title => titles.has(title));
};

const groupBySection = members => {
    const sections = TITLE_ORDER.map(() => []);
    for (const member of members) {
        const titles = titlesOf(member);
        if (titles.length === 0) continue;
        sections[TITLE_ORDER.indexOf(titles[0])].push({
            name: member.name,
            secondary: titles.join("\n"),
            image: member.avatar,
        });
    }
    return sections.filter(section => section.length > 0);
};

export async function getStaticProps() {
    const response = await fetch(STAFF_API_URL);
    if (!response.ok) {
        // Throwing keeps the last successfully built page during background revalidation.
        throw new Error(`Staff roster request failed with status ${response.status}`);
    }
    const { members } = await response.json();
    return {
        props: { people: groupBySection(members) },
        revalidate: REVALIDATE_SECONDS,
    };
}

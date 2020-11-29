const Banner = () => (
    <div className="section">
        <div className="container has-text-centered">
            <p className="title is-2">Code of Conduct</p>
        </div>
    </div>
);

const T = () => (
    <div className="section">
        <div className="container content">
            <p>
                In order to maintain a healthy community, please abide by the following rules at all times. This list of
                rules by no means exhaustive. If unsure about whether something falls within the rules, please consult a
                staff member beforehand—we’ll be happy to help you out.
            </p>
            <h2>General Rules</h2>
            <ol>
                <li>
                    Follow the <a href="https://discord.com/terms">Discord Terms of Service</a> and the{" "}
                    <a href="https://discord.com/guidelines">Discord Community Guidelines</a>.
                </li>
                <li>Follow the Pokétwo Code of Conduct.</li>
                <li>Follow and respect staff members and their instructions.</li>
                <li>This is an English-only server, so please speak English to the best of your ability.</li>
                <li>
                    No spamming or unapproved advertising of unrelated content, including other Discord bots, servers,
                    and social media pages.
                </li>
                <li>Keep discussions relevant to channel topics and guidelines.</li>
            </ol>
        </div>
    </div>
);
const COCText = () => (
    <div className="section">
        <div className="container content">
            <p>
                The goal of this document is to help maintain a healthy, respectful community. Please don’t take this as
                an exhaustive list of things you can or cannot do; rather, try to be your best self. Behavior that
                moderators find inappropriate, whether listed in the Code of Conduct, the Community Rules, or not, is
                also not allowed.
            </p>
            <h2>Our Pledge</h2>
            <p>
                We are committed to providing a friendly, safe and welcoming environment for all, regardless of level of
                experience, gender identity and expression, sexual orientation, disability, personal appearance, body
                size, race, ethnicity, age, religion, nationality, or other similar characteristics.
            </p>
            <h2>Our Standards</h2>
            <h4>Examples of behavior that contributes to creating a positive environment include:</h4>
            <ul>
                <li>Being kind and courteous to others</li>
                <li>Using welcoming and inclusive language</li>
                <li>Being respectful of differing viewpoints and experiences</li>
                <li>Collaborating with other server members</li>
                <li>Gracefully accepting constructive criticism</li>
                <li>Focusing on what is best for the community</li>
                <li>Showing empathy towards other server members</li>
            </ul>
            <h4>Examples of unacceptable behavior by participants include:</h4>
            <ul>
                <li>The use of sexualized language or imagery and sexual attention or advances</li>
                <li>The use of inappropriate images, including in a server member's avatar</li>
                <li>The use of inappropriate language, including in a server member's username or nickname</li>
                <li>Any spamming, flaming, baiting or other attention-stealing behavior</li>
                <li>Any harassment, whether public or private</li>
                <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
                <li>
                    Promoting or spreading disinformation, lies, or conspiracy theories against a person, group,
                    organization, project, or community
                </li>
                <li>
                    Publishing others' private information, such as a physical or electronic address, without explicit
                    permission
                </li>
            </ul>
            <h2>Attribution</h2>
            <p>
                This Code of Conduct is adapted from the{" "}
                <a href="https://github.com/adafruit/Adafruit_Community_Code_of_Conduct/blob/master/code-of-conduct.md">
                    Adafruit Community Code of Conduct.
                </a>
            </p>
        </div>
    </div>
);

const CodeOfConduct = () => (
    <>
        <Banner />
        <COCText />
    </>
);

export default CodeOfConduct;

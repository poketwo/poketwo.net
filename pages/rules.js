import Link from "next/link";

const Banner = () => (
    <div className="section">
        <div className="container has-text-centered">
            <p className="title is-2">Server Rules</p>
        </div>
    </div>
);

const RulesText = () => (
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
                <li>
                    Follow the{" "}
                    <Link href="/code-of-conduct">
                        <a>Pokétwo Code of Conduct.</a>
                    </Link>
                </li>
                <li>Follow and respect staff members and their instructions.</li>
                <li>This is an English-only server, so please speak English to the best of your ability.</li>
                <li>
                    No spamming or unapproved advertising of unrelated content, including other Discord bots, servers,
                    and social media pages.
                </li>
                <li>Keep discussions relevant to channel topics and guidelines.</li>
            </ol>
            <h2>Trading Rules</h2>
            <ol>
                <li>
                    Trade at your own risk. We provide resources such as #price-check, but it is your responsibility to
                    evaluate your trades.
                </li>
                <li>No trading items in Pokétwo for external currencies, goods, or services.</li>
                <li>Avoid advertising in channels other than designated ad channels.</li>
                <li>
                    Unofficial transactions including gambling and daycare are disallowed in this server and will
                    receive no support of any kind.
                </li>
            </ol>
            <h2>Nickname Policy</h2>
            <ol>
                <li>No invisible names.</li>
                <li>No advertising in nicknames.</li>
                <li>No noisy unicode characters, such as ẓ̷̄ǎ̷̮̞l̶̰̞̓ģ̶̮̊́o̷̟̒ and 𝓯𝓪𝓷𝓬𝔂 𝓯𝓸𝓷𝓽𝓼.</li>
                <li>No nicknames designed to annoy, insult, or impersonate other users.</li>
                <li>Do not change your nickname to hoist yourself to the top of the member list.</li>
            </ol>
            <h2>Infractions</h2>
            <p>
                We generally follow a two-strike policy for our rules. If you notice someone breaking them, please
                mention or DM a staff member and we’ll deal with it as soon as we can.
            </p>
            <p>Possible actions we take include:</p>
            <ul>
                <li>A public verbal warning</li>
                <li>A formal bot warning</li>
                <li>A short temporary mute</li>
                <li>A long temporary mute</li>
                <li>A kick from the server</li>
                <li>A temporary ban from the server</li>
                <li>A permanent ban from the server</li>
            </ul>
            <p>
                While serious infractions are discussed internally before a punishment is given, simpler infractions are
                dealt with by individual staff members and the punishment they hand out is left to their own discretion.
            </p>
            <h2>Attribution</h2>
            <p>
                Portions of these Server Rules are adapted from the{" "}
                <a href="https://pythondiscord.com/pages/rules/">Python Discord Rules.</a>
            </p>
        </div>
    </div>
);

const Rules = () => (
    <>
        <Banner />
        <RulesText />
    </>
);

export default Rules;

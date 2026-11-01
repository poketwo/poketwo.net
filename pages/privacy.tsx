const Banner = () => (
    <div className="section">
        <div className="container has-text-centered">
            <p className="title is-2">Privacy Policy</p>
            <p className="subtitle">Effective Date: November 1, 2026</p>
        </div>
    </div>
);

const Content = () => (
    <div className="content">
        <p>We at Pokétwo take your privacy very seriously. Please read on to learn how we handle your personal data.</p>

        <h2>Data Collection and Use</h2>
        <p>The following information is stored by the Services solely for the their proper operation:</p>
        <ul>
            <li>
                Discord user, server, and channel names and identifiers, to associate you, your channels, and your
                servers, with your configuration and assets within the Services;
            </li>
            <li>
                user-supplied content, including, but not limited to, text for nicknames, bot prefixes, location
                configuration; and
            </li>
            <li>
                data regarding interactions you have made with the Services, including commands executed, time of
                execution, Discord server and channel of execution, and any arguments passed to the command.
            </li>
        </ul>
        <p>
            We retain collected information for as long as is necessary to provide you with your requested service. Data
            is removed when the reason for its collection is no longer applicable.
        </p>
        <h2 id="guiduck">Guiduck</h2>
        <p>
            Guiduck is the moderation bot for the official Pokétwo Discord server. In addition to the above, it stores
            the following to allow server moderators to review deleted and edited messages when handling reports:
        </p>
        <ul>
            <li>
                the text of messages sent in the server, including edit history and whether the message was deleted;
            </li>
            <li>
                the author, channel, time, and attachment filenames of those messages (attachments themselves are
                not stored); and
            </li>
            <li>moderation actions taken against members and their reasons.</li>
        </ul>
        <p>
            Message text is retained for 30 days and then deleted automatically. It is accessible only to server
            moderators, is encrypted at rest, and is not used for any other purpose. To request deletion of your data
            earlier, contact <a href="mailto:support@poketwo.net">support@poketwo.net</a>.
        </p>
        <h2 id="verification">Human Verification</h2>
        <p>
            Pokétwo may ask you to complete a captcha at verify.poketwo.net. To prevent automated play, abuse, and the
            use of multiple accounts to get around restrictions, when you complete it we store:
        </p>
        <ul>
            <li>
                a one-way, keyed hash of your IP address and of the network range it belongs to (the IP address itself
                is not stored);
            </li>
            <li>the identifier of your network provider (autonomous system number); and</li>
            <li>the Discord account that completed the captcha, and when.</li>
        </ul>
        <p>
            This information is used only to detect automated or linked accounts and to restrict them. It is accessible
            only to Pokétwo administrators. It is deleted automatically 90 days after your last verification, unless
            your account is suspended, in which case it is kept for as long as the suspension remains in place. If a
            network has been used for abuse, we may suspend accounts while they are verified from that network; the
            hashed identifier of such a network is kept for as long as the restriction remains in place. Deleted data
            may remain in backups for up to 7 days. The captcha is provided by hCaptcha, and the site is hosted by
            Vercel and served through Cloudflare, who process your IP address under their own privacy policies. To
            request access to or deletion of this data, contact{" "}
            <a href="mailto:support@poketwo.net">support@poketwo.net</a>.
        </p>
        <h4>Third Parties</h4>
        <p>
            We do not provide collected data to third parties for reasons beyond maintaining the proper operation of the
            Services. However, our Services may link to external sites not operated by us. We have no control over the
            policies of these sites.
        </p>

        <h2>Contacting Us</h2>
        <p>
            In the case of any questions or concerns regarding this Privacy Policy, please send a message to{" "}
            <a href="mailto:support@poketwo.net">support@poketwo.net</a>, and we will do our best to resolve your
            concerns.
        </p>
    </div>
);

const Privacy = () => (
    <>
        <Banner />
        <div className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-8-desktop is-offset-2-desktop">
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Privacy;

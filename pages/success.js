import Stripe from "stripe";

const Banner = () => (
    <div className="section">
        <div className="container has-text-centered">
            <p className="title is-2">Thank You!</p>
        </div>
    </div>
);

const SessionDetails = ({ session }) => (
    <div className="section">
        <div className="container has-text-centered">
            <p>
                Your purchase of <b>${session.amount_total / 100}</b> was successful, and a receipt has been sent to{" "}
                <b>{session.customer_email}</b>.
            </p>
            <p>For any questions or concerns, please contact Oliver#0001 on Discord.</p>
        </div>
    </div>
);

const Success = ({ session }) => {
    return (
        <>
            <Banner />
            <SessionDetails session={session} />
        </>
    );
};

export default Success;

export async function getServerSideProps({ query: { session_id: sessionId } }) {
    const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    console.log(session);

    return {
        props: {
            session,
        },
    };
}

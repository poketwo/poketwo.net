import { withIronSessionApiRoute } from "iron-session/next";
import { ironSessionOptions } from "../../helpers/session";
import { checkout } from "../../helpers/stripe";

const handler = withIronSessionApiRoute(async (req, res) => {
    if (req.method !== "POST") return res.status(405).end();
    if (!req.session.user) return res.status(401).send("Missing session data");

    const { price_id, currency } = req.body;

    const session = await checkout({
        currency,
        user: req.session.user,
        line_items: [{ price: price_id, quantity: 1 }],
        success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/store`,
    });

    res.status(200).json({ id: session.id });
}, ironSessionOptions);

export default handler;

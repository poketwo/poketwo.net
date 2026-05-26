import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";
import { fetchPoketwoAccount } from "../../helpers/db";
import { ironSessionOptions } from "../../helpers/session";
import { checkout } from "../../helpers/stripe";

interface SessionData {
    id?: string;
    user?: any;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getIronSession<SessionData>(req, res, ironSessionOptions);
    if (req.method !== "POST") {
        res.status(405).end();
        return;
    }
    if (!session.user) {
        res.status(401).send("Missing session data");
        return;
    }

    const account = await fetchPoketwoAccount(session.user.id);
    if (!account) {
        res.status(403).send("No Pokétwo account found for this Discord account");
        return;
    }

    const { price_id, currency } = req.body;

    const checkoutSession = await checkout({
        user: session.user,
        line_items: [{ price: price_id, quantity: 1 }],
        success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/store`,
    });

    res.status(200).json({ id: checkoutSession.id });
};

export default handler;

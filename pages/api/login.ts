import crypto from "crypto";
import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";
import oauth from "../../helpers/oauth";
import { ironSessionOptions } from "../../helpers/session";

interface SessionData {
    id?: string;
    user?: any;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getIronSession<SessionData>(req, res, ironSessionOptions);
    if (!session.id) {
        session.id = crypto.randomBytes(16).toString("hex");
        await session.save();
    }
    const state = crypto.createHash("sha256").update(session.id).digest("hex");
    const url = oauth.generateAuthUrl({
        state,
        scope: "identify email",
    });
    res.redirect(url).end();
};

export default handler;

import crypto from "crypto";
import { getIronSession, IronSession } from "iron-session";
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
        res.status(401).end();
        return;
    }

    const { code, state } = req.query;
    if (typeof code !== "string" || typeof state !== "string") {
        res.status(400).end();
        return;
    }

    const currentState = crypto.createHash("sha256").update(session.id).digest("hex");
    if (currentState !== state) {
        res.status(401).end();
        return;
    }

    const token = await oauth.tokenRequest({
        code,
        grantType: "authorization_code",
        scope: "identify email",
    });

    const user = await oauth.getUser(token.access_token);
    if (!user) {
        res.status(400).end();
        return;
    }

    session.user = {
        ...user,
        accent_color: user.accent_color ? Number(user.accent_color) : null,
        avatar: user.avatar ?? null,
        mfa_enabled: !!user.mfa_enabled,
    };
    await session.save();

    res.redirect("/store").end();
};

export default handler;

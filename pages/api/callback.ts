import crypto from "crypto";
import { withIronSessionApiRoute } from "iron-session/next";
import oauth from "../../helpers/oauth";
import { ironSessionOptions } from "../../helpers/session";

const handler = withIronSessionApiRoute(async (req, res) => {
    if (!req.session.id) {
        res.status(401).end();
        return;
    }

    const { code, state } = req.query;
    if (typeof code !== "string" || typeof state !== "string") {
        res.status(400).end();
        return;
    }

    const currentState = crypto.createHash("sha256").update(req.session.id).digest("hex");
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

    req.session.user = {
        ...user,
        accent_color: user.accent_color ? Number(user.accent_color) : null,
        avatar: user.avatar ?? null,
        mfa_enabled: !!user.mfa_enabled,
    };
    await req.session.save();

    res.redirect("/store").end();
}, ironSessionOptions);

export default handler;

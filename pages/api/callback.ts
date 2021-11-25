import crypto from "crypto";
import { withIronSessionApiRoute } from "iron-session/next/dist";
import oauth from "../../helpers/oauth";
import { ironSessionOptions } from "../../helpers/session";

const handler = withIronSessionApiRoute(async (req, res) => {
    if (!req.session.id) return res.status(401).end();

    const { code, state } = req.query;
    if (typeof code !== "string") return res.status(400).end();
    if (typeof state !== "string") return res.status(400).end();

    const currentState = crypto.createHash("sha256").update(req.session.id).digest("hex");
    if (currentState !== state) return res.status(401).end();

    const token = await oauth.tokenRequest({
        code,
        grantType: "authorization_code",
        scope: "identify email",
    });

    const user = await oauth.getUser(token.access_token);
    if (!user) return res.status(400).end();

    req.session.user = {
        ...user,
        avatar: user.avatar ?? null,
        mfa_enabled: !!user.mfa_enabled,
    };
    await req.session.save();

    res.redirect("/store").end();
}, ironSessionOptions);

export default handler;

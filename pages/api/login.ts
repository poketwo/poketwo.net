import crypto from "crypto";
import { withIronSessionApiRoute } from "iron-session/next";
import oauth from "../../helpers/oauth";
import { ironSessionOptions } from "../../helpers/session";

const handler = withIronSessionApiRoute(async (req, res) => {
    if (!req.session.id) {
        req.session.id = crypto.randomBytes(16).toString("hex");
        await req.session.save();
    }
    const state = crypto.createHash("sha256").update(req.session.id).digest("hex");
    const url = oauth.generateAuthUrl({
        state,
        scope: "identify email",
    });
    res.redirect(url).end();
}, ironSessionOptions);

export default handler;

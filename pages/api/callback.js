import crypto from "crypto";
import oauth from "../../helpers/oauth";
import { withSession } from "../../helpers/session";

const handler = async (req, res) => {
    if (!req.session.get("id")) {
        res.status(401).end();
    }

    const { code, state } = req.query;
    const currentState = crypto.createHash("sha256").update(req.session.get("id")).digest("hex");

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

    req.session.set("token", token);
    req.session.set("user", user);
    await req.session.save();

    console.log(user);

    res.redirect("/store").end();
};

export default withSession(handler);

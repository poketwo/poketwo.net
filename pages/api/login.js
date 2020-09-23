import crypto from "crypto";
import oauth from "../../helpers/oauth";
import { withSession } from "../../helpers/session";

const handler = async (req, res) => {
    if (!req.session.get("id")) {
        req.session.set("id", crypto.randomBytes(16).toString("hex"));
        await req.session.save();
    }
    const state = crypto.createHash("sha256").update(req.session.get("id")).digest("hex");
    const url = oauth.generateAuthUrl({
        state,
        scope: "identify email",
    });
    res.redirect(url).end();
};

export default withSession(handler);

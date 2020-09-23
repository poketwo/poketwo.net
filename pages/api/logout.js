import { withSession } from "../../helpers/session";

function handler(req, res) {
    req.session.destroy();
    res.redirect("/store").end();
}

export default withSession(handler);

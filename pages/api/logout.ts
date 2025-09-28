import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";
import { ironSessionOptions } from "../../helpers/session";

interface SessionData {
    id?: string;
    user?: any;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getIronSession<SessionData>(req, res, ironSessionOptions);
    session.destroy();
    res.redirect("/store").end();
};

export default handler;

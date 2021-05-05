import { dbPromise } from "../../../helpers/db";

const handler = async (req, res) => {
    const db = await dbPromise;

    const [{ servers }] = await db
        .collection("stats")
        .aggregate([
            {
                $group: {
                    _id: null,
                    servers: { $sum: "$servers" },
                },
            },
        ])
        .toArray();

    const users = await db.collection("member").estimatedDocumentCount();

    res.status(200).json({ users, servers });
};

export default handler;

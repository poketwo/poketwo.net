import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URI, { useUnifiedTopology: true });

const connect = async () => {
    try {
        await client.connect();
        return client.db(process.env.DATABASE_NAME);
    } catch (err) {
        throw err;
    }
};

export const dbPromise = connect();

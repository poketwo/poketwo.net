import { Long, MongoClient } from "mongodb";

const uri = process.env.DATABASE_URI as string;
const dbName = process.env.DATABASE_NAME as string;

let cachedClient: MongoClient | null = null;

async function getClient(): Promise<MongoClient> {
    if (cachedClient) return cachedClient;
    const client = new MongoClient(uri);
    await client.connect();
    cachedClient = client;
    return client;
}

export type PoketwoAccount = {
    balance: number;
    pokemonCount: number;
};

export async function fetchPoketwoAccount(discordId: string): Promise<PoketwoAccount | null> {
    const client = await getClient();
    const db = client.db(dbName);
    const id = Long.fromString(discordId);

    const member = await db.collection("member").findOne({ _id: id as any });
    if (!member) return null;

    const pokemonCount = await db.collection("pokemon").countDocuments({
        owner_id: id,
        owned_by: "user",
    });

    return {
        balance: member.balance ?? 0,
        pokemonCount,
    };
}

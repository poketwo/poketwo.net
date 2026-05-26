const WEBHOOK_SERVER_URL = process.env.WEBHOOK_SERVER_URL ?? "https://webhooks.poketwo.io";
const ACCOUNT_SECRET = process.env.ACCOUNT_SECRET ?? "";

export type PoketwoAccount = {
    balance: number;
    pokemonCount: number;
};

export async function fetchPoketwoAccount(discordId: string): Promise<PoketwoAccount | null> {
    const res = await fetch(`${WEBHOOK_SERVER_URL}/account/${discordId}`, {
        headers: { Authorization: ACCOUNT_SECRET },
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Account lookup failed: ${res.status}`);
    return await res.json();
}

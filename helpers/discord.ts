import { APIUser } from "discord-api-types/v10";

const DEFAULT_AVATAR_COUNT = 6;
const LEGACY_DEFAULT_AVATAR_COUNT = 5;
const SNOWFLAKE_TIMESTAMP_SHIFT = 22;

// Users on Discord's new username system have discriminator "0" and no tag suffix.
const hasLegacyDiscriminator = (discriminator?: string | null) => !!discriminator && discriminator !== "0";

export const formatTag = (user: Pick<APIUser, "username" | "discriminator">) =>
    hasLegacyDiscriminator(user.discriminator) ? `${user.username}#${user.discriminator}` : user.username;

export const avatarUrl = (user: Pick<APIUser, "id" | "avatar" | "discriminator">) => {
    if (user.avatar) {
        const fileExt = user.avatar.startsWith("a_") ? "gif" : "png";
        return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${fileExt}`;
    }
    const index = hasLegacyDiscriminator(user.discriminator)
        ? Number(user.discriminator) % LEGACY_DEFAULT_AVATAR_COUNT
        : Number((BigInt(user.id) >> BigInt(SNOWFLAKE_TIMESTAMP_SHIFT)) % BigInt(DEFAULT_AVATAR_COUNT));
    return `https://cdn.discordapp.com/embed/avatars/${index}.png`;
};

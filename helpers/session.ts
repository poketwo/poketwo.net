import { APIUser } from "discord-api-types/v10";
import { SessionOptions } from "iron-session";

declare module "iron-session" {
    interface IronSessionData {
        id?: string;
        user?: APIUser;
    }
}

export const ironSessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY as string,
    cookieName: "poketwo",
    cookieOptions: { maxAge: 86400 },
};

import { APIUser } from "discord-api-types";
import { IronSessionOptions } from "iron-session";

declare module "iron-session" {
    interface IronSessionData {
        id?: string;
        user?: APIUser;
    }
}

export const ironSessionOptions: IronSessionOptions = {
    password: process.env.SECRET_KEY as string,
    cookieName: "poketwo",
    cookieOptions: { maxAge: 86400 },
};

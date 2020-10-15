import { withIronSession } from "next-iron-session";

export const withSession = handler =>
    withIronSession(handler, {
        password: process.env.SECRET_KEY,
        cookieName: "poketwo",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400,
        },
    });

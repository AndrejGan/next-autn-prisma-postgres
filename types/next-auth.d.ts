import { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface User {
        role?: string | null | undefined
    }

    interface Session {
        user: {
            userId: string | null | undefined
            role: string | null | undefined
        } & DefaultSession["user"];
    }

    interface Account {
        user_id?:  number | null | undefined
        email?:  string | null | undefined
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role: string | null | undefined
    }
}


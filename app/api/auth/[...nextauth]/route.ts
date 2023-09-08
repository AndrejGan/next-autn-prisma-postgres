import NextAuth, { NextAuthOptions } from "next-auth";
import VkProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/libs/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
    providers: [
        VkProvider( {
            clientId: process.env.VK_CLIENT_ID ?? "",
            clientSecret: process.env.VK_CLIENT_SECRET ?? ""
        } ),
        YandexProvider( {
            clientId: process.env.YANDEX_CLIENT_ID ?? "",
            clientSecret: process.env.YANDEX_CLIENT_SECRET ?? "",
        } ),
        GoogleProvider( {
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        } )
    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt( { token, user } ) {
            if ( user ) {
                token.role = user.role;
            }
            return token;
        },
        async session( { session, token } ) {
            if ( token && session.user ) {
                session.user.role = token.role;
            }
            return session;
        }
    }
}


const handler = NextAuth( authOptions )

export { handler as GET, handler as POST }
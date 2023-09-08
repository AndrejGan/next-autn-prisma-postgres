import React from 'react';
import { Metadata } from "next";
import Profile from "@/components/profile/Profile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata: Metadata = {
    title: "Аккаунт пользователя"
}

const Account = async () => {
    const session = await getServerSession( authOptions )

    return (
        <Profile session={session}/>
    );
};

export default Account;

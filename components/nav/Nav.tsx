"use client"
import React from 'react';
import { useSession } from "next-auth/react";
import Link from "next/link";
import ButtonLogin from "@/components/nav/ButtonLogin";
import AuthorazedUser from "@/components/nav/AuthorazedUser";

const Nav = () => {
    const { data: session } = useSession();

    return (
        <nav className='flex justify-between items-center flex-row w-full mb-16 pt-3'>
            <div className={ "flex flex-row gap-2" }>
                <div className={ "red_gradient text-4xl font-bold" }>
                    <Link href={ "/" }>N-A-P-P</Link>
                </div>
            </div>
            <div className={ "flex flex-col gap-2" }>
                { session?.user ? (
                    <AuthorazedUser user={session.user}/>
                ) : (
                   <ButtonLogin />
                ) }
            </div>
        </nav>
    )
};

export default Nav;

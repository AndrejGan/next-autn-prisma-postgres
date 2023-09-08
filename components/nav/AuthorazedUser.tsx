import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { USER } from "@/constants/constants";

type User = {
    userId: string | null | undefined,
    name?: string | null | undefined,
    email?: string | null | undefined,
    image?: string | null | undefined,
    role: string | null | undefined
}

const AuthorizedUser = ( { user }: { user: User } ) => {
    const container = useRef( null )
    const [ toggleDropdown, setToggleDropdown ] = useState( false );

    const handleClickOutside = ( event: Event ) => {
        // @ts-ignore
        if ( container.current && !container.current?.contains( event.target ) ) {
            setToggleDropdown( false );
        }
    };

    useEffect( () => {
        document.addEventListener( "mousedown", handleClickOutside );
        return () => document.removeEventListener( "mousedown", handleClickOutside );
    }, [] );

    function handleToggle() {
        setToggleDropdown( !toggleDropdown )
    }

    return (
        <div className={ "relative" } ref={ container }>
            <div className={ "cursor-pointer flex flex-row items-center gap-2" }
                 onClick={ handleToggle }>
                { user.image ? (
                    <Image src={ user.image } width={ 40 } height={ 40 } className='rounded-full'
                           alt={ user.name || "Профиль" }/>
                ) : (
                    <div>{ user.name || "Профиль" } </div>
                ) }
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"/>
                </svg>
            </div>
            { toggleDropdown && (
                <div className='dropdown'>
                    { user.role === USER ? (
                        <Link
                            onClick={ handleToggle }
                            href={ "/account" }
                            className='dropdown_link'
                        >Аккаунт
                        </Link>
                    ) : (
                        <Link
                            onClick={ handleToggle }
                            href={ "/dashboard" }
                            className='dropdown_link'
                        >Dashboard
                        </Link>
                    ) }
                    <Link
                        href={ "#" }
                        onClick={ () => {
                            signOut( { callbackUrl: "/" } )
                            handleToggle()
                        } }
                        className='dropdown_link'
                    > Выйти
                    </Link>
                </div>
            ) }
        </div>
    );
};

export default AuthorizedUser;

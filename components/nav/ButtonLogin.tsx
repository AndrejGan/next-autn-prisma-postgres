
import React, { useEffect, useRef, useState } from 'react';
import { getProviders, signIn } from "next-auth/react";

const ButtonLogin = () => {
    const [ providers, setProviders ] = useState( null );
    const container = useRef( null )
    const [ toggleDropdown, setToggleDropdown ] = useState( false );

    useEffect( () => {
        ( async () => {
            const result = await getProviders();
            // @ts-ignore
            setProviders( result );
        } )();
    }, [] );

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


    return (
        <div className={ "relative" } ref={ container }>
            <button
                type='button'
                className='black_btn'
                onClick={ ( event ) => {
                    setToggleDropdown( !toggleDropdown )
                } }
            >
                Войти
            </button>
            { toggleDropdown && (
                <div role={ "menu" } className='dropdown'>
                    Войти с помощью:
                    <br/>
                    { providers &&
                        Object.values( providers ).map( ( provider: any ) => (
                            <button key={ provider.name }
                                    onClick={ ( event ) => {
                                        event.preventDefault()
                                        signIn( provider.id );
                                        setToggleDropdown( !toggleDropdown )
                                    } }
                                    className='dropdown_link'
                            >
                                { provider.name }
                            </button>
                        ) )
                    }
                </div>
            ) }
        </div>
    );
};

export default ButtonLogin;

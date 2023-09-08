import "@/styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import Provider from "@/components/Provider";
import Nav from "@/components/nav/Nav";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout( { children }: { children: React.ReactNode } ) {
    return (
        <html lang="en">
        <body>
        <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                <Nav/>
                { children }
            </main>
        </Provider>
        </body>
        </html>
    );
}

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { ADMIN, USER } from "@/constants/constants";

export default withAuth(
    function middleware( request ) {
        if ( request.nextUrl.pathname.startsWith( "/dashboard" ) && request.nextauth.token?.role !== ADMIN ) {
            return NextResponse.rewrite( new URL( "/api/auth/signin", request.url ) )
        }
        if ( request.nextUrl.pathname.startsWith( "/account" ) && request.nextauth.token?.role !== USER ) {
            return NextResponse.rewrite( new URL( "/api/auth/signin", request.url ) )
        }
    },
    {
        callbacks: {
            authorized: ( { token } ) => !!token
        }
    }
)
export const config = {
    matcher: [ '/account/:path*', '/dashboard/:path*' ],
}
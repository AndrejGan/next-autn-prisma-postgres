"use client"
import { Session } from "next-auth";

const Profile = ( { session }: { session: Session | null } ) => {
    return (
        <div>
            Profile page components
            <pre>{ JSON.stringify( session ) }</pre>
        </div>
    );
};

export default Profile;

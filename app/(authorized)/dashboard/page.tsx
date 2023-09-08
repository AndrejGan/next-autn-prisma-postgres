import React from 'react';
import { getSession } from "next-auth/react";

const Dashboard = async () => {
    const session = await getSession()
    console.log(session)

    return (
        <div>
            Dashboard page app
        </div>
    );
};

export default Dashboard;

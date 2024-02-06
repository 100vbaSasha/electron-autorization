import React from 'react';
import { useUser } from '../UserContext';

const UserDetails: React.FC = () => {
    const { user, logout } = useUser();

    if (!user) {
        return <p>You are not logged in.</p>;
    }

    return (
        <div>
            <h2>User Details</h2>
            <p>Welcome, {user.username}!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default UserDetails;
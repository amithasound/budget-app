import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@material-ui/core';

const Profile = () => {
    const changePassword = () => {
        // Add your change password logic here
    };

    return (
        <div className = "profile-container">
            <header>
                 <AccountCircleIcon style={{ fontSize: '10rem' }} />
            </header>
            <h1 style={{ fontSize: '1.5rem', color: '#6A088C' }}>Julia Foy</h1>
            <div>
                <p style={{ fontSize: '1.5rem' }}>Joined: March 18th, 2024</p>
                <p style={{ fontSize: '1.5rem' }}>Username: jfoy3</p>
                <Button variant="contained" style={{ backgroundColor: '#6A088C', fontSize: '1.5rem' }} color="primary" onClick={changePassword}>
                    Change Password
                </Button>
            </div>
            <footer>

            </footer>
        </div>
    );
};

export default Profile;
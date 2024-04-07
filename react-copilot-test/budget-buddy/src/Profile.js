import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@material-ui/core';

const Profile = () => {
    const changePassword = () => {
        // Add your change password logic here
    };

    return (
        <div>
            <header>
                 <AccountCircleIcon style={{ fontSize: 100 }} />
            </header>
            <h1>Julia Foy</h1>
            <div>
                <p>Joined: March 18th, 2024</p>
                <p>Username: jfoy3</p>
                <Button variant="contained" color="primary" onClick={changePassword}>
                                    Change Password
                                </Button>
            </div>
            <footer>

            </footer>
        </div>
    );
};

export default Profile;
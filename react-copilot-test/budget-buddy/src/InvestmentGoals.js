import React from 'react';
import { useNavigate } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const InvestmentGoals = () => {
     const navigate = useNavigate();

        const navigateToIRA = () => {
                navigate('/IRA');
        }
        const navigateToRothIRAinfo = () => {
            navigate('/RothIRAinfo');
        }

        const navigateToRoth401K = () => {
            navigate('/Roth401K');
        }


        const navigateToK401 = () => {
            navigate('/K401');
        }

        const navigateTo529 = () => {
                    navigate('/Plans529');
         }

    return (
        <div>
            <h1 style={{color: '#6A088C', fontSize: '1.5rem'}}>Learn about some popular investment accounts!</h1>
            <List>
                <ListItem sx={{ border: '1px solid gray', borderRadius: '5px', marginBottom: '0px', padding: '0px', margin: '0px', height: '150px', fontSize: '1.5rem', backgroundColor: '#DCC5E4' }}>
                    <ListItemButton onClick={navigateToIRA}>
                        <span style={{color: 'black', fontWeight: 'bold'}}>IRA</span>
                        <ListItemIcon> <ArrowForwardIcon /> </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ border: '1px solid gray', borderRadius: '5px', marginBottom: '0px', padding: '0px', margin: '0px', height: '150px', fontSize: '1.5rem',  backgroundColor: '#DCC5E4' }}>
                    <ListItemButton onClick={navigateToK401}>
                        <span style={{color: 'black', fontWeight: 'bold'}}>401K</span>
                        <ListItemIcon> <ArrowForwardIcon /> </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem sx= {{ border: '1px solid gray', borderRadius: '5px', marginBottom: '0px', padding: '0px', margin: '0px',height: '150px', fontSize: '1.5rem',  backgroundColor: '#DCC5E4' }}>
                    <ListItemButton onClick={navigateToRothIRAinfo}>
                        <span style={{color: 'black', fontWeight: 'bold'}}>Roth IRA</span>
                        <ListItemIcon> <ArrowForwardIcon /> </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem sx={{ border: '1px solid gray', borderRadius: '5px', marginBottom: '0px', padding: '0px', margin: '0px' , height: '150px', fontSize: '1.5rem',  backgroundColor: '#DCC5E4'}}>
                    <ListItemButton onClick={navigateToRoth401K}>
                        <span style={{color: 'black', fontWeight: 'bold'}}>Roth 401K</span>
                        <ListItemIcon> <ArrowForwardIcon /> </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem sx={{ border: '1px solid gray', borderRadius: '5px', marginBottom: '0px', padding: '0px', margin: '0px', height: '150px', fontSize: '1.5rem',  backgroundColor: '#DCC5E4'}}>
                    <ListItemButton onClick={navigateTo529}>
                        <span style={{color: 'black', fontWeight: 'bold'}}>529</span>
                        <ListItemIcon> <ArrowForwardIcon /> </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );
}

export default InvestmentGoals;
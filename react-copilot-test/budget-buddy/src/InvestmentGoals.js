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
                   <h1>Learn about some popular investment accounts!</h1>
                   <List>
                       <ListItem sx={{ border: '1px solid gray', borderRadius: '5px', marginBottom: '0px', padding: '0px', margin: '0px', height: '150px' }}>
                           <ListItemButton onClick={navigateToIRA}>
                               IRA
                                <ListItemIcon> <ArrowForwardIcon /> </ListItemIcon>
                           </ListItemButton>
                       </ListItem>

                       <ListItem sx={{ border: '1px solid gray', borderRadius: '5px', marginBottom: '0px', padding: '0px', margin: '0px', height: '150px'}}>
                           <ListItemButton onClick={navigateToK401}>
                               401K
                              <ListItemIcon> <ArrowForwardIcon /> </ListItemIcon>
                           </ListItemButton>
                       </ListItem>
                       <ListItem sx= {{ border: '1px solid gray', borderRadius: '5px', marginBottom: '0px', padding: '0px', margin: '0px',height: '150px' }}>
                           <ListItemButton onClick={navigateToRothIRAinfo}>
                               Roth IRA
                              <ListItemIcon> <ArrowForwardIcon /> </ListItemIcon>
                           </ListItemButton>
                       </ListItem>
                       <ListItem sx={{ border: '1px solid gray', borderRadius: '5px', marginBottom: '0px', padding: '0px', margin: '0px' , height: '150px'}}>
                           <ListItemButton onClick={navigateToRoth401K}>
                               Roth 401K
                                <ListItemIcon> <ArrowForwardIcon /> </ListItemIcon>
                           </ListItemButton>
                       </ListItem>
                       <ListItem sx={{ border: '1px solid gray', borderRadius: '5px', marginBottom: '0px', padding: '0px', margin: '0px', height: '150px'}}>
                              <ListItemButton onClick={navigateTo529}>
                                   529
                                  <ListItemIcon> <ArrowForwardIcon /> </ListItemIcon>
                               </ListItemButton>

                         </ListItem>
                   </List>
               </div>
    );
}

export default InvestmentGoals;
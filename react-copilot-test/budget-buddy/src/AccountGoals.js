import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const AccountGoals = () => {
    const [selectedAccounts, setSelectedAccounts] = useState([]);

    const handleAccountSelection = (account) => {
        if (selectedAccounts.includes(account)) {
            setSelectedAccounts(selectedAccounts.filter((acc) => acc !== account));
        } else {
            setSelectedAccounts([...selectedAccounts, account]);
        }
    };

    const handleSubmit = () => {
        console.log("Selected Accounts:", selectedAccounts);
    };

    return (
        <div>
            <Typography variant="h6" style={{ color: '#6A088C', fontWeight: 'bold', fontSize: '1.5rem' }}>Select Investment Accounts:</Typography>
            <List>
                <ListItem>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes("401K")}
                                onChange={() => handleAccountSelection("401K")}
                            />
                        }
                        label={<Typography style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>401K</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes("Roth 401K")}
                                onChange={() => handleAccountSelection("Roth 401K")}
                            />
                        }
                        label={<Typography style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Roth 401K</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes("IRA")}
                                onChange={() => handleAccountSelection("IRA")}
                            />
                        }
                        label={<Typography style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>IRA</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes("Roth IRA")}
                                onChange={() => handleAccountSelection("Roth IRA")}
                            />
                        }
                        label={<Typography style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Roth IRA</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes("529")}
                                onChange={() => handleAccountSelection("529")}
                            />
                        }
                        label={<Typography style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>529</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes("Other Investment Goal")}
                                onChange={() => handleAccountSelection("Other Investment Goal")}
                            />
                        }
                        label={<Typography style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Other Investment Goal</Typography>}
                    />
                </ListItem>
            </List>
            <button onClick={handleSubmit}>Submit</button> 
        </div>
    );
};

export default AccountGoals;
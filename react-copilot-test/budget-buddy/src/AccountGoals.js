import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
<Typography variant="h6" style={{fontSize: '1.5rem'}}>Select Accounts:</Typography>
const AccountGoals = () => {
    const [selectedAccounts, setSelectedAccounts] = useState([]);

    const handleAccountSelection = (account) => {
        if (selectedAccounts.includes(account)) {
            setSelectedAccounts(selectedAccounts.filter((acc) => acc !== account));
        } else {
            setSelectedAccounts([...selectedAccounts, account]);
        }
    };
    const handleMoveUp = (index) => {
        if (index > 0) {
            const updatedAccounts = [...selectedAccounts];
            const temp = updatedAccounts[index];
            updatedAccounts[index] = updatedAccounts[index - 1];
            updatedAccounts[index - 1] = temp;
            setSelectedAccounts(updatedAccounts);
        }
    };
    const handleMoveDown = (index) => {
        if (index < selectedAccounts.length - 1) {
            const updatedAccounts = [...selectedAccounts];
            const temp = updatedAccounts[index];
            updatedAccounts[index] = updatedAccounts[index + 1];
            updatedAccounts[index + 1] = temp;
            setSelectedAccounts(updatedAccounts);
        }
    };

    return (
        <div>
            <Typography variant="h6" style={{ color: '#6A088C', fontSize: '1.5rem', fontWeight: 'bold' }}>Select Accounts:</Typography>
            <ol>
                {selectedAccounts.map((account, index) => (
                    <li key={index} style={{ fontSize: '1.5rem' }}>
                        {account}
                        <button onClick={() => handleMoveUp(index)}>&uarr;</button>
                        <button onClick={() => handleMoveDown(index)}>&darr;</button>
                    </li>
                ))}
            </ol>
            <button onClick={() => {
                const orderedListItems = selectedAccounts.map((account, index) => account);
                console.log(orderedListItems);
            }} style={{ fontSize: '1.5rem' }}>Submit Final Ranking</button>
            <List >
                <ListItem >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes('401K')}
                                onChange={() => handleAccountSelection('401K')}
                            />
                        }
                        label="401K"
                        style={{ fontSize: '1.5rem' }}
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes('Roth 401K')}
                                onChange={() => handleAccountSelection('Roth 401K')}
                            />
                        }
                        label="Roth 401k"
                        style={{ fontSize: '1.5rem' }}
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes('IRA')}
                                onChange={() => handleAccountSelection('IRA')}
                            />
                        }
                        label="IRA"
                        style={{ fontSize: '1.5rem' }}
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes('Roth IRA')}
                                onChange={() => handleAccountSelection('Roth IRA')}
                            />
                        }
                        label="Roth IRA"
                        style={{ fontSize: '1.5rem' }}
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes('529')}
                                onChange={() => handleAccountSelection('529')}
                            />
                        }
                        label="529"
                        style={{ fontSize: '1.5rem' }}
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedAccounts.includes('Other Investment Goal')}
                                onChange={() => handleAccountSelection('Other Investment Goal')}
                            />
                        }
                        label="Other Investment Goal"
                        style={{ fontSize: '1.5rem' }}
                    />
                </ListItem>
                {/* Add more ListItem components for additional accounts */}
            </List>
        </div>
    );
};

export default AccountGoals;

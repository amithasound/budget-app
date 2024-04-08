import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const AccountGoals = () => {
    const [checkedIRA, setCheckedIRA] = useState(false);
    const [checkedRothIRA, setCheckedRothIRA] = useState(false);
    const [checked401K, setChecked401K] = useState(false);
    const [checkedRoth401K, setCheckedRoth401K] = useState(false);
    const [checked529, setChecked529] = useState(false);

    return (
        <div>
            <Typography variant="h4">Set Your Account Goals</Typography>
            <List>
                <ListItem>
                    <FormControlLabel
                        control={<Checkbox
                                    style={{color: checkedIRA ? '#6A088C' : ''}}
                                    onChange={() => setCheckedIRA(!checkedIRA)}
                                 />}
                        label="IRA"
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={<Checkbox
                                    style={{color: checkedRothIRA ? '#6A088C' : ''}}
                                    onChange={() => setCheckedRothIRA(!checkedRothIRA)}
                                 />}
                        label="Roth IRA"
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={<Checkbox
                                    style={{color: checked401K ? '#6A088C' : ''}}
                                    onChange={() => setChecked401K(!checked401K)}
                                 />}
                        label="401K"
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={<Checkbox
                                    style={{color: checkedRoth401K ? '#6A088C' : ''}}
                                    onChange={() => setCheckedRoth401K(!checkedRoth401K)}
                                 />}
                        label="Roth 401K"
                    />
                </ListItem>
                <ListItem>
                    <FormControlLabel
                        control={<Checkbox
                                    style={{color: checked529 ? '#6A088C' : ''}}
                                    onChange={() => setChecked529(!checked529)}
                                 />}
                        label="529"
                    />
                </ListItem>
            </List>
        </div>
    );
};

export default AccountGoals;
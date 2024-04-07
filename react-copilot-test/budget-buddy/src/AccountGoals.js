import React from 'react';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const AccountGoals = () => {
    return (
        <div>
            <Typography variant="h4">Set Your Account Goals</Typography>
            <List>
                <ListItem>
                    <FormControlLabel control={<Checkbox />} label="IRA" />
                </ListItem>
                <ListItem>
                    <FormControlLabel control={<Checkbox />} label="Roth IRA" />
                </ListItem>
                <ListItem>
                    <FormControlLabel control={<Checkbox />} label="401K" />
                </ListItem>
                <ListItem>
                    <FormControlLabel control={<Checkbox />} label="Roth 401K" />
                </ListItem>
                <ListItem>
                    <FormControlLabel control={<Checkbox />} label="529" />
                </ListItem>
            </List>
        </div>
    );
};

export default AccountGoals;
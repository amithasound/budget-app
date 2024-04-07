import React from 'react';
import TextField from '@material-ui/core/TextField';

const BudgetCalculator = () => {
    return (
        <div>
            <h1>Enter your expenses:</h1>
            <div><TextField label="Monthly Income" variant="outlined" /></div>
            <div><TextField label="Rent" variant="outlined" /></div>
            <div><TextField label="Food" variant="outlined" /></div>
            <div><TextField label="Streaming" variant="outlined" /></div>
            <div><TextField label="Recreation" variant="outlined" /></div>
            <div><TextField label="Gym" variant="outlined" /></div>
            <div><TextField label="Rainy Day Fund" variant="outlined" /></div>
        </div>
    );
};

export default BudgetCalculator;
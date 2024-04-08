import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Build = () => {
    const navigate = useNavigate();

    const navigateToBudgetCalculator = () => {
        navigate('/BudgetCalculator');
    }

    const navigateToAccountGoals = () => {
        navigate('/AccountGoals');
    }

    return (
        <div>
            <h1>Build and Edit Your Finances!</h1>

            <Button variant="contained" style={{backgroundColor: '#6A088C'}}  color="primary" onClick={navigateToBudgetCalculator}>
                Budget Calculator
            </Button>
            <p>Enter your expenses to calculate how much money you have available to invest</p>

            <Button variant="contained"style={{backgroundColor: '#6A088C'}} color="primary" onClick={navigateToAccountGoals}>
                Account Goals Selection
            </Button>
            <p>Select and rank your account goals to calculate how to divide up your money </p>

            <footer>
            </footer>
        </div>
    );
};

export default Build;
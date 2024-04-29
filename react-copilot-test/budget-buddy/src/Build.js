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
            <h1 style={{ color: '#6A088C' }}>Build and Edit Your Finances!</h1>

            <Button variant="contained" style={{backgroundColor: '#6A088C', borderRadius: '20px', fontSize: '1.5rem'}}  color="primary" onClick={navigateToBudgetCalculator}>
                Budget Calculator 
                <span style={{ color: 'white' }}> --{'>'} </span>
            </Button>
            <p style={{fontSize: '1.5rem'}}>Enter your expenses to calculate how much money you have available to invest</p>

            <footer>
            </footer>
        </div>
    );
};

export default Build;
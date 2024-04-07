import React from 'react';
import { Link } from 'react-router-dom';

const Build = () => {
    return (
        <div>
            <h1>Build and Edit Your Finances!</h1>

            <button onClick={() => window.location.href='budget_calculator.html'}>Budget Calculator</button>
            <p>Enter your expenses to calculate how much money you have available to invest</p>

            <button onClick={() => window.location.href='account_goals_selection.html'}>Account Goals Selection</button>
            <p>Select and rank your account goals to calculate how to divide up your money </p>

            <footer>
            </footer>
        </div>
    );
};

export default Build;
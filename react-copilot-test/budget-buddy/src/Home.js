// Home.js
import React from 'react';
import {Link} from 'react-router-dom';
import InvestmentGoals from './InvestmentGoals';
import './styles.css';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome, Julia!</h1>
                <h2>Welcome to Budget Buddy!</h2>
            </header>

            <main>
                <p>insert progress bars for different accounts here</p>
            <Button component={Link} to="/investment-goals" variant="contained" color="primary" endIcon={<ArrowForwardIcon />}>
                Investment Accounts 101
            </Button>
            </main>

            <footer>
            </footer>

        </div>
    );
}

export default Home;
// Home.js
import React from 'react';
import {Link} from 'react-router-dom';
import InvestmentGoals from './InvestmentGoals';
import './styles.css';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/system';

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 22,
  borderRadius: 300,
  width: '30%',
  margin: '10px 0',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey ? theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800] : '#ccc',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 300,
    backgroundColor: theme.palette.mode === 'light' ? '#6A088C' : '#308fe8',
  },
}));

const Home = () => {
    return (
        <div className="main-container">
            <header>
                <h1 style={{ color: '#6A088C' }}>Hello, Julia!</h1>
                <p>Welcome to Budget Buddy!</p>
            </header>
            <main>
                            <h4>View your Investment Progress: </h4>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '2px', width: '100px' }}>   IRA :  </span>
                                <StyledLinearProgress variant="determinate" value={40} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '2px', width: '100px' }}> 401K :</span>
                                <StyledLinearProgress variant="determinate" value={60} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{ marginRight: '2px', width: '100px' }}> 529 :</span>
                                <StyledLinearProgress variant="determinate" value={30} />
                            </div>
                            <Button component={Link} to="/investment-goals" variant="contained"  style={{backgroundColor: '#6A088C', marginTop: '20px', borderRadius: '20px',  fontWeight: 'bold',textTransform: 'none'}} color="primary" endIcon={<ArrowForwardIcon />}>
                                Investment Accounts 101
                            </Button>
                        </main>
            <footer>
            </footer>

        </div>
    );
}

export default Home;
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountGoals from './AccountGoals';
 import { useNavigate } from 'react-router-dom';// Import AccountGoals component

const BudgetCalculator = () => {
    const [monthlyIncome, setMonthlyIncome] = useState(0);
    const [rent, setRent] = useState(0);
    const [food, setFood] = useState(0);
    const [streaming, setStreaming] = useState(0);
    const [recreation, setRecreation] = useState(0);
    const [gym, setGym] = useState(0);
    const [rainyDayFund, setRainyDayFund] = useState(0);
    const [totalToInvest, setTotalToInvest] = useState(0);
    const navigate = useNavigate();

    const navigateToAccountGoals = () => {
            navigate('/AccountGoals');
        }


    const calculateTotalToInvest = () => {
        const totalExpenses = parseFloat(rent) + parseFloat(food) + parseFloat(streaming) + parseFloat(recreation) + parseFloat(gym) + parseFloat(rainyDayFund);
        const totalToInvest = parseFloat(monthlyIncome) - totalExpenses;
        setTotalToInvest(totalToInvest);
    };

    return (
        <div>
            <h1 style={{ color: '#6A088C', fontSize: '1.5rem' }}>Enter your expenses:</h1>
            <div><TextField label="Monthly Income" variant="outlined" onChange={e => setMonthlyIncome(e.target.value)} style={{ fontSize: '1.5rem' }} /></div>
            <div><TextField label="Rent" variant="outlined" onChange={e => setRent(e.target.value)} style={{ fontSize: '1.5rem' }} /></div>
            <div><TextField label="Food" variant="outlined" onChange={e => setFood(e.target.value)} style={{ fontSize: '1.5rem' }} /></div>
            <div><TextField label="Streaming" variant="outlined" onChange={e => setStreaming(e.target.value)} style={{ fontSize: '1.5rem' }} /></div>
            <div><TextField label="Recreation" variant="outlined" onChange={e => setRecreation(e.target.value)} style={{ fontSize: '1.5rem' }} /></div>
            <div><TextField label="Gym" variant="outlined" onChange={e => setGym(e.target.value)} style={{ fontSize: '1.5rem' }} /></div>
            <div><TextField label="Rainy Day Fund" variant="outlined" onChange={e => setRainyDayFund(e.target.value)} style={{ fontSize: '1.5rem' }} /></div>
            <Button variant="contained" color="primary" style={{ backgroundColor: '#6A088C', fontSize: '1.5rem' }} onClick={calculateTotalToInvest}>
                Calculate Total To Invest
            </Button>
            <Typography variant="h6" style={{ color: '#6A088C', fontSize: '1.5rem' }}>Total to Invest: ${totalToInvest}</Typography>
            <Button variant="contained"style={{backgroundColor: '#6A088C', borderRadius: '20px', fontSize: '1.5rem'}} color="primary" onClick={navigateToAccountGoals}>
                                Account Goals Selection
                                <span style={{ color: 'white' }}>--{'>'}</span>
             </Button>


        </div>

    );
};

export default BudgetCalculator;
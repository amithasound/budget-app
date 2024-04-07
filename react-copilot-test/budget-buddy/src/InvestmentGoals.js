import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvestmentGoals = () => {
     const navigate = useNavigate();

        const navigateToIRA = () => {
                navigate('/IRA');
        }
        const navigateToRothIRAinfo = () => {
            navigate('/RothIRAinfo');
        }

        const navigateToRoth401K = () => {
            navigate('/Roth401K');
        }


        const navigateToK401 = () => {
            navigate('/K401');
        }

        const navigateTo529 = () => {
                    navigate('/Plans529');
         }

    return (
        <div>
            <h1>Learn about some popular investment accounts!</h1>
            <button onClick={navigateToIRA}>IRA</button>
            <button onClick={navigateToK401}>401K</button>
            <button onClick={navigateToRothIRAinfo}>Roth IRA</button>
            <button onClick ={navigateToRoth401K}> Roth 401K</button>
            <button onClick ={navigateTo529} >529</button>
        </div>
    );
}

export default InvestmentGoals;
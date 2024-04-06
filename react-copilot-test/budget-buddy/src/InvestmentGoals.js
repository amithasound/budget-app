import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvestmentGoals = () => {
     const navigate = useNavigate();

        const navigateToRothIRAinfo = () => {
            navigate('/RothIRAinfo');
        }

    return (
        <div>
            <h1>Learn about some popular investment accounts!</h1>
            <button>IRA</button>
            <button>401K</button>
            <button onClick={navigateToRothIRAinfo}>Roth IRA</button>
            <button>Roth 401K</button>
            <button>529</button>
        </div>
    );
}

export default InvestmentGoals;
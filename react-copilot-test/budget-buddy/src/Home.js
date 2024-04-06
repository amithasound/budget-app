// Home.js
import React from 'react';
import {Link} from 'react-router-dom';
import InvestmentGoals from './InvestmentGoals';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Budget Buddy!</h1>
            </header>

            <main>
                <p>insert progress bars for different accounts here</p>
                <Link to="/investment-goals" className="btn btn-primary">Investment Accounts 101</Link>
            </main>

            <footer>
            </footer>

        </div>
    );
}

export default Home;
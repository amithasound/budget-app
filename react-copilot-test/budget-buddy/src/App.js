import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvestmentGoals from './InvestmentGoals';
import Home from './Home';
import RothIRAinfo from './RothIRAinfo';
import IRA from './IRA';
import Roth401K from './Roth401K';
import K401 from './K401';
import Plans529 from './Plans529';
import Profile from './Profile';
import Build from './Build';
import BudgetCalculator from './BudgetCalculator';
import AccountGoals from './AccountGoals';
import Navbar from './Navbar';


const App = () => {
    return (
        <div>
           <Router>
                <Navbar />
                 <Routes>
                       <Route path="/" element={<Home />} />
                       <Route path="/investment-goals" element={<InvestmentGoals />} />
                       <Route path="/RothIRAinfo" element={<RothIRAinfo />} />
                       <Route path="/IRA" element={<IRA />} />
                       <Route path="/Roth401K" element={<Roth401K />} />`
                       <Route path="/K401" element={<K401 />} />`
                       <Route path="/Plans529" element={<Plans529 />} />`
                       <Route path="/Profile" element={<Profile />} />`
                       <Route path="/Build" element={<Build />} />`
                       <Route path="/BudgetCalculator" element={<BudgetCalculator />} />`
                       <Route path="/AccountGoals" element={<AccountGoals />} />`
                  </Routes>
           </Router>
        </div>
    );
}

export default App;
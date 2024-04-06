import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvestmentGoals from './InvestmentGoals';
import Home from './Home';
import RothIRAinfo from './RothIRAinfo';


const App = () => {
    return (
        <div>
           <Router>
                 <Routes>
                       <Route path="/" element={<Home />} />
                       <Route path="/investment-goals" element={<InvestmentGoals />} />
                       <Route path="/RothIRAinfo" element={<RothIRAinfo />} />
                  </Routes>
           </Router>
        </div>
    );
}

export default App;
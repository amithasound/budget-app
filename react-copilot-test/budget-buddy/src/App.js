import React from 'react';

const App = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Budget Buddy!</h1>
            </header>

            <main>
                <p>insert progress bars for different accounts here</p>
                <button onClick={() => window.location.href='investment_accounts_101.html'}>Investment Accounts 101</button>
            </main>

            <footer>
                <nav>
                    <ul>
                        <li><a href="CopilotBudgetApp.html">Home</a></li>
                        <li><a href="build.html">Build</a></li>
                        <li><a href="projections.html">Projections</a></li>
                        <li><a href="profile.html">Profile</a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}

export default App;
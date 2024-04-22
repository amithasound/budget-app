import React from 'react';

const RothIRA = () => {
    return (
        <div>
            <h1 style={{color: '#6A088C', fontSize: '1.5rem'}}>Roth IRA</h1>
            <h2 style={{color: '#6A088C', fontSize: '1.5rem'}}>Individual Retirement Plan</h2>

            <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Basics:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>A Roth IRA is an individual retirement account where contributions are made after taxes.</li>
            </ul>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Pros:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>Tax-Free Withdrawals in Retirement: One of the most significant advantages of a Roth IRA is that qualified withdrawals, including earnings, are tax-free in retirement. Since contributions are made with after-tax dollars, you won't owe taxes on the earnings when you withdraw them in retirement, as long as the withdrawals are qualified. This provides valuable tax diversification and can potentially save you a substantial amount of money in taxes during retirement.
                </li>
                <li style={{fontSize: '1.5rem'}}>No Required Minimum Distributions (RMDs): Unlike traditional IRAs and 401(k) plans, Roth IRAs do not require you to take required minimum distributions (RMDs) during your lifetime. This allows your investments to continue growing tax-free for as long as you like, providing greater flexibility in retirement income planning.
                </li>
                <li style={{fontSize: '1.5rem'}}>No Age Limit for Contributions: While traditional IRAs have age restrictions on contributions (you cannot contribute after age 70½), Roth IRAs have no age limit for contributions, allowing you to continue contributing as long as you have earned income.
                </li>
            </ul>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Cons:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>No Up-Front Tax Deduction: Unlike traditional IRAs, contributions to a Roth IRA are made with after-tax dollars, so you don't receive an immediate tax deduction. This means you miss out on the potential tax savings in the year of contribution.
                </li>
                <li style={{fontSize: '1.5rem'}}>Income Limitations: Roth IRA contributions are subject to income limits. If your income exceeds certain thresholds, you may be ineligible to contribute directly to a Roth IRA, limiting your ability to take advantage of its tax benefits.
                </li>
                <li style={{fontSize: '1.5rem'}}>Early Withdrawal Penalties on Earnings: While you can withdraw your contributions from a Roth IRA penalty-free at any time, withdrawals of earnings before age 59½ may be subject to a 10% early withdrawal penalty, in addition to income taxes, unless an exception applies.
                </li>
            </ul>
        </div>
    );
}

export default RothIRA;
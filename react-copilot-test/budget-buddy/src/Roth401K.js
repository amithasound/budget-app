import React from 'react';

const Roth401K = () => {
    return (
        <div>
            <h1 style={{color: '#6A088C', fontSize: '1.5rem'}}>Roth 401K</h1>
            <h2 style={{color: '#6A088C', fontSize: '1.5rem'}}>Retirement Plan</h2>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Basics:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>Similar to a traditional 401(k), a Roth 401(k) is an employer-sponsored retirement savings plan. The key difference is that contributions to a Roth 401(k) are made after taxes, meaning withdrawals in retirement, including earnings, are tax-free.</li>
            </ul>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Pros:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>Tax-Free Withdrawals in Retirement: Similar to a Roth IRA, one of the primary advantages of a Roth 401(k) is that qualified withdrawals, including earnings, are tax-free in retirement. This can provide valuable tax diversification and potentially save you a significant amount of money in taxes during retirement.</li>
                <li style={{fontSize: '1.5rem'}}>No Income Limits: Unlike Roth IRAs, which have income limitations on contributions, Roth 401(k) plans do not have income restrictions. This allows high-income earners to take advantage of the tax benefits of Roth contributions without being limited by income thresholds.</li>
                <li style={{fontSize: '1.5rem'}}>Employer Matching Contributions: Some employers offer matching contributions to Roth 401(k) plans, which can significantly boost your retirement savings. This is essentially free money added to your account based on your contributions.</li>
            </ul>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Cons:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>No Up-Front Tax Deduction: Contributions to a Roth 401(k) are made with after-tax dollars, so you don't receive an immediate tax deduction like you would with traditional 401(k) contributions. This means you miss out on potential tax savings in the year of contribution.</li>
                <li style={{fontSize: '1.5rem'}}>Early Withdrawal Penalties on Earnings: Withdrawals of earnings from a Roth 401(k) before age 59½ may be subject to a 10% early withdrawal penalty, in addition to income taxes, unless an exception applies. This penalty can erode your savings if you need to access the funds before retirement.</li>
                <li style={{fontSize: '1.5rem'}}>Employer Control: As with traditional 401(k) plans, Roth 401(k) plans are employer-sponsored, meaning they may have restrictions on withdrawals, investment options, and other aspects of the plan determined by the employer rather than the individual participant.</li>
            </ul>
        </div>
    );
}

export default Roth401K;
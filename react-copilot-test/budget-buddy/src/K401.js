import React from 'react';

const K401 = () => {
    return (
        <div>
            <h1 style={{color: '#6A088C', fontSize: '1.5rem'}}>401K</h1>
            <h2 style={{color: '#6A088C', fontSize: '1.5rem'}}>Retirement Plan</h2>
            <p style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Basics:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>A 401(k) is an employer-sponsored retirement savings plan. You contribute a portion of your salary to this account, often with the option for your employer to match a portion of your contributions. </li>
            </ul>
            <p style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Pros:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>Employer Matching Contributions: Many employers offer matching contributions to 401(k) plans, which can significantly boost your retirement savings. This is essentially free money added to your account based on your contributions.</li>
                <li style={{fontSize: '1.5rem'}}>Tax Advantages: Contributions to a traditional 401(k) are made with pre-tax dollars, reducing your taxable income for the year. This can lower your current tax bill and allow your investments to grow tax-deferred until retirement.</li>
                <li style={{fontSize: '1.5rem'}}>Automatic Contributions: 401(k) contributions are often deducted automatically from your paycheck, making it easier to save consistently for retirement without having to actively manage your contributions.</li>
            </ul>
            <p style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Cons:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>Limited Investment Choices: 401(k) plans often have a limited selection of investment options compared to IRAs, which may restrict your ability to diversify your portfolio according to your investment preferences.</li>
                <li style={{fontSize: '1.5rem'}}>Employer Control: Since 401(k) plans are sponsored by employers, they may have restrictions on withdrawals, investment options, and other aspects of the plan that are determined by the employer rather than the individual participant. If you change jobs, you may face restrictions or penalties when rolling over your 401(k) to a new employer's plan or an IRA.</li>
                <li style={{fontSize: '1.5rem'}}>Early Withdrawal Penalties: Withdrawals from a 401(k) before age 59½ are generally subject to a 10% early withdrawal penalty, in addition to income taxes. This penalty can erode your savings if you need to access the funds before retirement.</li>
            </ul>
        </div>
    );
}

export default K401;
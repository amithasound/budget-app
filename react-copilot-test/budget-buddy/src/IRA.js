import React from 'react';

const IRA = () => {
    return (
        <div>
            <h1 style={{color: '#6A088C', fontSize: '1.5rem'}}>IRA</h1>
            <h2 style={{color: '#6A088C', fontSize: '1.5rem'}}>Individual Retirement Account</h2>
            <p style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Basics:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>An IRA is a personal savings account designed to help you save for retirement.</li>
            </ul>
            <p style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Pros:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>Tax Advantages: Traditional IRAs provide tax-deferred growth, meaning you don't pay taxes on earnings until you withdraw funds in retirement.</li>
                <li style={{fontSize: '1.5rem'}}>Retirement Savings Flexibility: IRAs offer flexibility in investment choices, allowing you to invest in various assets such as stocks, bonds, mutual funds, and more.</li>
                <li style={{fontSize: '1.5rem'}}>Portability: IRAs are portable, meaning you can roll over funds from one IRA to another or from a former employer's retirement plan into an IRA without incurring taxes or penalties, providing greater control over your retirement savings.</li>
            </ul>
            <p style={{fontWeight: 'bold', fontSize: '1.5rem'}}>Cons:</p>
            <ul>
                <li style={{fontSize: '1.5rem'}}>Contribution Limits: IRAs have annual contribution limits, which can restrict the amount you can save for retirement in a given year.</li>
                <li style={{fontSize: '1.5rem'}}>Early Withdrawal Penalties: With Traditional IRAs, withdrawals before age 59½ are generally subject to a 10% early withdrawal penalty, in addition to income taxes.</li>
                <li style={{fontSize: '1.5rem'}}>Required Minimum Distributions (RMDs): Traditional IRAs require you to start taking required minimum distributions (RMDs) once you reach age 72, which can impact your tax situation and retirement income strategy.</li>
            </ul>
        </div>
    );
}

export default IRA;
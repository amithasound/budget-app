import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'; // make sure the path to your logo is correct

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo"/> {/* Add this line */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Build">Build</Link>
                </li>
                <li>
                    <Link to="/Profile">Profile</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
import React from 'react';
import './Header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="BrainFlix Logo" className="header__logo" />
            <input type="text" className="header__search" placeholder="Search" />
            <div className="header__upload">
                <button className="header__button">UPLOAD</button>
                <img src="./src/assets/Images/Mohan-muruge.jpg" alt="Profile" className="header__profile" />
            </div>
        </header>
    );
}

export default Header;

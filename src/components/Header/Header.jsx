import React from 'react';
import './Header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/Icons/search.svg';
import uploadIcon from '../../assets/Icons/upload.svg';
import profileImage from '../../assets/Images/Mohan-muruge.jpg';

function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <img src={logo} alt="BrainFlix Logo" className="header__logo" />
            </div>
            <div className="header__center">
                <div className="header__search-container">
                    <img src={searchIcon} alt="Search Icon" className="header__search-icon" />
                    <input type="text" className="header__search" placeholder="Search" />
                </div>
                <img src={profileImage} alt="Profile" className="header__profile" />
            </div>
            <div className="header__right">
                <button className="header__button">
                    <img src={uploadIcon} alt="Upload Icon" className="header__upload-icon" />
                    <span className="header__button-text">UPLOAD</span>
                </button>
            </div>
        </header>
    );
}

export default Header;

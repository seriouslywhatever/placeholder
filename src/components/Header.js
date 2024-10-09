import React from 'react';
import Button from '@mui/material/Button';
import '../styling/Header.css';
import logo from '../images/placeholder.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-section-1'>
                <div className='header-logo-container'>
                    <img src={logo} style={{ width: '3.5vw', height: '3.5vw' }} />
                </div>
                <div className='header-name-container'>
                    <h1>PlaceHolder</h1>
                </div>
            </div>
            <div className='header-section-2'>
                <input type='search' placeholder='Search...'></input>
            </div>
            <div className='header-section-3'>
                <Button onClick={() => console.log("navigate to Login")}>Login</Button>
                <Button onClick={() => console.log("navigate to Register")}>Register</Button>
            </div>
        </div>
    )
}

export default Header;
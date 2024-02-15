import React from 'react';
import { Navigate } from 'react-router-dom';
import style from './style.css';

let path = window.location.pathname;

console.log(path);

const StartPage = () => {
    return (
        <div className='navbar'>
            <div className='login'>

            </div>
            <div className='nav-center'>
                <a href="/">START</a>
                <a
                    className="member-button"
                    href="https://ebas.sverok.se/blimedlem/etowngaming"
                >BLI MEDLEM</a>
                <a href="/book">LAN</a>
            </div>
            <div>
                <a className="login" href="/login"></a>
            </div>
        </div>
    );
};

export default StartPage;
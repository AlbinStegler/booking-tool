import React from 'react';
import { Navigate } from 'react-router-dom';
import style from './style.css';

let path = window.location.pathname;

console.log(path);

const StartPage = () => {
    return (
        <div className='navbar'>
            <a href="/">START</a>
            <a
                className="member-button"
                href="https://ebas.sverok.se/blimedlem/etowngaming"
            >BLI MEDLEM</a>
            <a href="/event">EVENT</a>
            <a href="/create-event">BOOK A SEAT</a>
        </div>
    );
};

export default StartPage;
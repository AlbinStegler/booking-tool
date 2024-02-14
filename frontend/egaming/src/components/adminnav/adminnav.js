import React, { useEffect } from 'react';
import style from './style.css';

import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/');
        // navigate to login page
    };
    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === false || localStorage.getItem('isLoggedIn') === null) {
            navigate('/');
            console.log('Not logged in')
        }
    });

    return (
        <div className='navbar'>
            <div className='navbar-admin'>
                <a href="/admin">ADMIN</a>
                <a href="/create-event">SKAPA EVENT</a>
            </div>
            <a className="logout" onClick={handleLogout} >LOGGA UT</a>
        </div>
    );

};

export default StartPage;
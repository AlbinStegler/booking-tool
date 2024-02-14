import React from 'react';
import Hero from '../../components/start/hero';
import Nav from '../../components/navbar/nav';
import style from './style.css';
import Info1 from '../../components/info-1/info-1';
import Member from '../../components/member/member';
const StartPage = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <Info1 />
            <Member />
        </div>
    );
};

export default StartPage;
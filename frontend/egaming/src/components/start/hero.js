import React from 'react';
import style from './style.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className='hero-content'>
                <img src="images/Banner.png" alt="banner" />
                <h1>Eskilstunas största e-sportförening</h1>
            </div>
            <video className="background-video" autoPlay loop muted>
                <source src="images/first_export_long.mp4" type="video/mp4" alt="backgroundvideo" />
            </video>
        </div >
    );
};

export default Hero;
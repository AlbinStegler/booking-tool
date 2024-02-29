import React from 'react';
import './style.css';

const Hero = () => {
    return (
        <div className="hero">
            <video className="background-video" autoPlay loop muted>
                <source src="videos/first_export_long.webm" type="video/mp4" alt="backgroundvideo" />
            </video>
            <div className='hero-content'>
                <img src="images/Banner.png" alt="banner" />
                <h1>Eskilstunas största e-sportförening</h1>
            </div>
        </div >
    );
};

export default Hero;
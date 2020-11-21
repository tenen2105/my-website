import React from 'react';
import './css_pages/HeroSection.css';
import "../App.css";

function HeroSection() {
    return (
        <div className='hero-container'>                                 
            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <h1 className="home-head">NATURE AWAITS YOU</h1><br/>
            <p className="home-text">"Knowing trees, I understand the meaning of patience. 
             Knowing grass, I can appreciate persistence." -Hal Borland</p>     
        </div>
    )
}

export default HeroSection;

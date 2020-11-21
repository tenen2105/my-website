import React from 'react';
import "../../App.css";
import AboutMe from "../AboutMe";

export default function About(){
    return (
        <>
        <div className='hero-container'>
            <img className="home-about" alt="home" src="/images/img-home.jpg" /> 
            <div>
                 <h1 className="about">WHAT TO KNOW ABOUT ME?</h1> 
            </div>                       
        </div>
        <AboutMe />
        </>
    )
    
    
}
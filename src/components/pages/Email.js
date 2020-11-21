import React from 'react';
import ContactForm from "../ContactForm";
import "../../App.css";


function Email(){
    return(
        <>
        <div className='hero-container'>
            <img className="home-about" alt="home" src="/images/img-email.jpg" /> 
            <h1 className="email">Where to contact me?</h1>
        </div>
        <ContactForm />
        </>
    )
}


export default Email;
    
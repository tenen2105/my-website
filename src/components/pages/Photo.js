import React from 'react';
import PhotoSection from "../PhotoSection";
import "../../App.css";

function Photo(){
    return(
        <>
        <div className='hero-container'>       
            <img className="home-about" alt="home" src="/images/img-9.jpg" /> 

            <div className="photo-container">
            <h1 className="photo">PHOTOGRAPHY</h1><br/>
            <p className="intro">“What do we feel when we look at a good photograph? 
             We just want to be there, right at the exact moment that photo taken!" -Mehmet Murat Ildan</p> 
           </div>
            
                
      </div> 
        <PhotoSection />       
        </>
    )
}

export default Photo;


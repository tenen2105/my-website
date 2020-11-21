import React from 'react'
import CardItem from './CardItem';
import './css_pages/PhotoCards.css';



function PhotoSection(props) {
    return (
        <div className="cards">
            
            <h1>Check out these EPIC Destinations!</h1>
            
                <p className="cards-text">Whether you are an amateur or a professional photographer,  
                photography is more than just a skill or talent. It's a passion that needs 
                constant fulfillment. Photography would motivate you to find your passion 
                and love for life and nature. It's not enough to just own a camera everyone owns a camera. 
                To be a photographer, you must understand, appreciate, and harness the power you hold on a camera. 
                A great photograph is one that fully expresses what one feels, in the deepest sense, about
                what is being photographed.</p>
         
            
            <div className="cards__container">
                <div className="cards__wrapper ">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-10.jpg"
                        text="Exploring in the hidden parks in NY State with amazing hikes, 
                        views, and routes.."
                        label="New Paltz, NY"
                        path="/photo"
                         />
                        <CardItem
                        src="images/img-14.jpg"
                        text=" The perfect beach to relax on the summer time with amazing 
                        seafood and views"
                        label="Southamton, NY"
                        path="/photo"
                         />
                        <CardItem
                        src="images/img-15.jpg"
                        
                        text="One of the best places in Westchester to hike and explore nature before sunset.."
                        label="Rockefeller State Park, NY"
                        path="/photo"
                         />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-16.jpg"
                        text="Next to the breathtaking Lago San Pablo in Otavalo"
                        label="Cerro Imbabura, Ecuador"
                        path="/photo"
                         />
                        <CardItem
                        src="images/img-17.jpg"
                        text="Most fascinating and exciting attraction in Ecuador.."
                        label="Mitad del Mundo, Ecuador"
                        path="/photo"
                         />
                        <CardItem
                        src="images/img-18.jpg"
                        text="An amazing small version of Notre-Dame in Cuenca"
                        label="Catedral de Cuenca, Ecuador"
                        path="/photo"
                         />
                    </ul>
                    <ul className="cards__items">                      
                        <CardItem
                        src="images/img-19.jpg"
                        text="The City that never sleeps with mesmerizing views..!"             
                        label="New York City, New York"
                        path="/photo"
                         />
                        <CardItem
                        src="images/img-20.jpg"
                        text="The most amazing and relaxing views in Tarryntown"
                        label="Tarrytown, New York"
                        path="/photo"
                         />
                        <CardItem
                        src="images/img-21.jpg"
                        text="Hiking the edge of the mountain to see this views.."
                        label="Castle Craig, Connecticut"
                        path="/photo"
                         />
                       
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PhotoSection;
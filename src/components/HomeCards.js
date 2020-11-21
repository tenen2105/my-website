import React,{Component} from 'react';
import './css_pages/HomeCard.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


export default class HomeCards extends Component {
    render() {        
      return (          
        <div className="homeCards">
        <h1 className="homes-title">WHY WE SHOULD SPEND TIME IN NATURE?</h1><br />
        
        <div className="home__wrapper">
            <Carousel infinite autoPlay="12000">
                <div className="home__items">Whether you call it God, Earth Mother, the Great Mystery or by 
                another name, nature helps you to connect with this powerful, loving presence. You might feel 
                this presence loving and supporting you. You might receive guidance and wisdom. Nature brings 
                you closer to our own spirit and to Spirit. These are the reasons why I believe we are so happy 
                in the natural world. This is why nature heals, and helps us to live lives of meaning and joy.</div>

                <div className="home__items">You feel comfortable in your own skin, you experience your 
                own quiet peace and strength, you sense the inner you that is the true you. The mask you present 
                to the outer world is irrelevant for a time, and put in its proper place.</div>

                <div className="home__items">You feel that you belong to this Earth. That you are part of the 
                community of nature. You are made of the same substance, and that you are no better—and no 
                worse—than that bird, that tree, that other human walking up the trail.</div>

                <div className="home__items">How is such majesty possible? The strength of that mountain, 
                standing there for all those years! The miracle of this single flower, infused with sunlight. 
                The revelation of a tree, rooted deep in the earth, stretching to the sky, and bearing silent witness 
                to the world around it! You feel awe and joy and are whole again.</div>
            </Carousel>
        </div>            
    </div>       
      );
    }
  }


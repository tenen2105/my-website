import React from 'react'
import { Link } from 'react-router-dom';
import "./css_pages/Footer.css";



const date = new Date().getFullYear();

function Footer() {
    return (
        <div className="footer-container">           
            <Link to="/" className="social-logo">
               The Traveler <i className="fas fa-globe-americas" />
             </Link>
            <section className="social-media">
                <div className="social-media-wrap">                
                    <div className="social-icons">                    
                        <a
                            className="social-icon-link instagram"
                            target="instagram"
                            href="https://www.instagram.com/tenen21/"
                            aria-label="Instagram"
                            >
                            <i className="fab fa-instagram"></i>
                        </a>                        
                        <a 
                            className="social-icon-link linkedin"
                            target="linkedin"
                            href="https://www.linkedin.com/in/luis-tenen-338b0549/"
                            aria-label="LinkedIn"
                            >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            className="social-icon-link github"
                            target="github"
                            href="https://github.com/tenen2105"
                            aria-label="Github"
                            >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    
                </div>
                <section className="footer-bottom">
                    <small className="website-rights">Copyright © {date}</small>
                </section>
            </section>
        </div>
    )
}

export default Footer

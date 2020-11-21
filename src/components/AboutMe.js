import React from 'react';
import './css_pages/AboutMe.css';


function AboutMe() {
    return (
        <div className="cards">
        <div className="row">
            <div className="personal">
                <div className="personal-skill">
                <img className="me-img" alt="Me" src="/images/img-me.jpg" />
                <h3 className="personal-name">HI, MY NAME IS LUIS E. TENEN</h3>
                <p className="col-md-8 personal-message">I'm a Web Developer and an IT System Administrator in New York City, and
                I love to make cool and creative web designs, regarless of what medium I'm working on. </p>
                <br/>
                <hr className="hr-lines"  />

                <div className="personal-row">

                    <div className="col-md-7 peronal-skill-row">
                        <img className="browser" src="/images/browser.png" alt="skill-browser" />
                        <h4 className="skill-title-one"><u>Web Developer</u></h4>
                        <p className="skill-descOne">I've been working on my own product for about a 2 years now.
                        Most of my experience has been working closely with developers on the company I'm currently working with.
                        I've been working with, HTML, CSS, JavaScript, NodeJS, React, Bootstrap, and Version Control on Github.
                        I'm passionate about creating long-term value for the customer, especially in the ecommerce businesses.
                        I developed this website with my own knowledge and tools, because I love being a developer and building new and cool stuff.
                        If your company is creating something amazing for consumers, and looking to sell on the internet I'd like to
                        work with you on them.</p>
                    </div>
                    <br />
                    <hr className="hr-lines"/>

                    <div className=" col-md-7 peronal-skill-row">
                        <img className="computer" src="/images/computer.png" alt="skill-computer" />
                        <h4 className="skill-title-two"><u>NETWORK ADMINISTRATOR</u></h4>
                        <p className="skill-descTwo">As an IT System Administrator, I've worked on a lot of projects
                        on the financial business industry and gain tremendous experience in different technlolgies for the las 5 years.
                        I have worked on AWS Cloud Computing, Windows, MacOS, Office365 Products, Barracuda,
                        Fortigate, Cisco, and Telephone Sysmtems. Accustomed to providing
                        integral technical support and troubleshooting issues related to
                        hardware, software, and installations setup. Extremely adept at
                        providing exceptional customer service support in technical and diverse
                        settings.</p>
                    </div>
                </div>
               <br/>
              <hr className="hr-lines" />
            </div>
         </div>
        </div>
        <div className="personal-list">
            <h4><u>Facts About Me</u></h4><br />
             <ul >
                <li className="list-me">I am a dual citizen of the USA and Ecuador.</li>
                <li className="list-me">Aside from web devoloping and system admin, I love photography and hiking.</li>
                <li className="list-me">My love for nature and exploring national parks will never allow me to
                 live full-time in New York City.</li>
                <li className="list-me">I've been told that I have a sweet tooth for waffle cookies.</li>
                <li className="list-me">I am planing to travel all 5 continents and explorer their national parks.</li>
                <li className="list-me">My love to enjoy new food will never allow me to become a vegan or vegetarian.</li>
                <li className="list-me">I enjoy converstations with extrangers when I'm exploring new places</li>
                <li className="list-me">I belive that communication is very important in our personal and professional lives.</li>
                <li className="list-me">To this day, I still watch classic movies or independent.</li>
                <li className="list-me">Education is the key for any type of success in our lives.</li>
                <li className="list-me">The amount of random movie quotes that I know, it would scare you.</li>
              </ul>
            </div>
            <br />
            <br />
            <br />
            <p className="foot-text">If you would like to know more about my photography work or professional work,
            you can fallow me on <u className="social">Instagram</u> or <u className="social">LinkedIn</u> by clicking on the icon links below.</p>
        </div>
    )
}

export default AboutMe;

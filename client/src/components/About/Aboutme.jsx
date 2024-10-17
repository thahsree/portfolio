import React from 'react';
import Skills from "../Skills/Skills";
import './aboutme.css';
function Aboutme(props) {



    return (
        <div className='about' id='about'>
            <div className="aboutHeading">
                <i className="fa-solid fa-user"></i>ABOUT ME
            </div>
            <div className="aboutContent">
                Passionate MERN Stack Developer with expertise in MongoDB, Express.js, React.js, and Node.js. Proven track record of translating ideas into robust, user-friendly web applications. Skilled in crafting responsive front-end interfaces and optimizing back-end processes. Committed to clean, maintainable code and staying updated with industry trends. A proactive learner dedicated to continuous improvement. Let's build something great together!
            </div>
            <div className="aboutHeading">
                MY SKILLS
            </div>
            <Skills />

        </div>
    );
}

export default Aboutme;
import { motion } from "framer-motion";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';


function Home() {

    return (
        <div className="Home" id='home'>
            <motion.div

                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate='visible'
                transition={{ duration: 0.5, delay: 0.26 }}

            >
                <div className="personalDetails">
                    <div className="intro">
                        <div className="static-text">Hello I'm</div>
                        <div className="name">THASHREEF</div>
                    </div>
                    <div className="wrapper">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'WEB DESIGNER',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'BACKEND DEVELOPER',
                                1000,
                                'FRONTEND DEVELOPER',
                                1000,
                                'FULL STACK WEB DEVELOPER',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{
                                fontSize: '2em',
                                display: 'inline-block',
                                color: 'gray',
                            }}

                            className="type-animation"
                        />
                    </div>
                    <div className="resume">

                    </div>
                </div>
            </motion.div>

            <motion.div

                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate='visible'
                transition={{ duration: 0.5, delay: 0.26 }}
            >

                <div className="social">
                    <div className="insta social_icon">
                        <a target="_blank" href="https://www.instagram.com/tha.shree_/">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <div className="overlay"></div>
                    </div>
                    <div className="git social_icon">
                        <a target="_blank" href="https://github.com/thahsree" aria-label="GitHub">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <div className="linkedin social_icon">
                        <a target="_blank" href="https://www.linkedin.com/in/thashreefch/" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>

            </motion.div>


        </div>
    );
}

export default Home;

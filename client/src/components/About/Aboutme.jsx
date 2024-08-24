import { motion } from "framer-motion";
import React from 'react';
import { MotionAnimate } from 'react-motion-animate';
import { fadeIn } from "../../varients";
import Skills from "../Skills/Skills";
import './aboutme.css';
function Aboutme(props) {



    return (
        <div className='about' id='about'>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}

                className="aboutHeading">
                <i className="fa-solid fa-user"></i>ABOUT ME
            </motion.div>

            <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}

                className="aboutContent">
                Passionate MERN Stack Developer with expertise in MongoDB, Express.js, React.js, and Node.js. Proven track record of translating ideas into robust, user-friendly web applications. Skilled in crafting responsive front-end interfaces and optimizing back-end processes. Committed to clean, maintainable code and staying updated with industry trends. A proactive learner dedicated to continuous improvement. Let's build something great together!
            </motion.div>

            <MotionAnimate animation='fadeInUp' reset={true}>
            <div className="aboutHeading">
                MY SKILLS
            </div>
            </MotionAnimate>
            
            <Skills/>

        </div>
    );
}

export default Aboutme;
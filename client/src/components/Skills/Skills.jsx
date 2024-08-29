import { motion } from 'framer-motion';
import React from 'react';
import { MotionAnimate } from 'react-motion-animate';
import aws from '../../assets/AWS.png';
import bootstrap from '../../assets/BOOTSTRAP.png';
import css from '../../assets/CSS.png';
import html from '../../assets/HTML.png';
import java from '../../assets/JAVA.png';
import javascript from '../../assets/javascript.png';
import mongo from '../../assets/Mongo.png';
import mysql from '../../assets/MYSWL.png';
import nodejs from '../../assets/NODEJS.png';
import react from '../../assets/React.png';
import { fadeIn } from '../../varients';
import './skills.css';


function Skills(props) {

    const skills = [
        {
            skillname: 'HTML5',
            skillImage: html,
        },
        {
            skillname: 'CSS',
            skillImage: css,
        },
        {
            skillname: 'JAVA SCRIPT',
            skillImage: javascript,
        },
        {
            skillname: 'REACT',
            skillImage: react,
        },

        {
            skillname: 'JAVA',
            skillImage: java,
        },
        {
            skillname: 'NODEJS',
            skillImage: nodejs,
        },
        {
            skillname: 'MYSQL',
            skillImage: mysql
        },


        {
            skillname: 'MONGODB',
            skillImage: mongo,

        },
        {
            skillname: 'AWS',
            skillImage: aws
        },
        {
            skillname: 'BOOTSTRAP',
            skillImage: bootstrap
        },


    ]
    return (
        <div

            className="skills-section">
            <motion.div
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: .1 }}

                className="gridParent">
                <div className="grid grid-cols-3 mobile:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5 gap-4">

                    {
                        skills.map((item, i) => (

                            <MotionAnimate 
                            key={i}
                            animation='fadeInUp'
                            reset={true}
                            distance={50}
                            delay={.2}
                            speed={1}
                            >
                                <div className="skill-item" >

                                    <h3>{item.skillname}</h3>
                                    <img className="w-10 h-10 mobile:w-15 mobile:h-15 lg:w-48 lg:h-48" src={item.skillImage} alt="" />
                                </div>
                            </MotionAnimate>
                        ))
                    }

                </div>
            </motion.div>
        </div>
    );
}

export default Skills;
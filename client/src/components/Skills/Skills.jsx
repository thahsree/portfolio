import { motion } from 'framer-motion';
import React from 'react';
import { MotionAnimate } from 'react-motion-animate';
import aws from '../../assets/aws.svg';
import bootstrap from '../../assets/bootstrap.svg';
import css from '../../assets/css.svg';
import docker from '../../assets/docker.svg';
import html from '../../assets/html5.svg';
import mongo from '../../assets/icons8-mongodb.svg';
import mysql from '../../assets/icons8-mysql.svg';
import nodejs from '../../assets/icons8-nodejs.svg';
import react from '../../assets/icons8-react-native.svg';
import typescript from '../../assets/icons8-typescript.svg';
import java from '../../assets/java.svg';
import javascript from '../../assets/js.svg';
import MUI from '../../assets/material-ui.svg';
import redux from '../../assets/redux.svg';
import tailwind from '../../assets/tailwind.svg';
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
            skillname: 'TYPE SCRIPT',
            skillImage: typescript,
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
            skillname: 'Material UI',
            skillImage: MUI,

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
        {
            skillname:'TAILWIND',
            skillImage:tailwind
        },
        {
            skillname:'DOCKER',
            skillImage:docker
        },
        {
            skillname:'REDUX',
            skillImage:redux
        }


    ]
    return (
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
    );
}

export default Skills;
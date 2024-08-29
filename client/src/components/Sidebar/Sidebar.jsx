import { motion } from 'framer-motion';
import { useState } from 'react';
import Links from './Links/Links';
import './sidebar.css';
import ToggleButton from './ToggleBar/ToggleButton';

function Sidebar(props) {

    const variants = {
        open:{
            clipPath:"circle(1000px at 50px 50px)",
            transition:{
                type:'spring',
                stiffness:20
            }
        },
        closed: {
            clipPath:"circle(20px at 40px 40px)",
            transition:{
                delay:0.1,
                type:'spring',
                stiffness:400,
                damping:40
            }
        }
    }

    const [isOpen , setIsOpen] = useState(false);

    return (
        <motion.div className='sidebar' animate={isOpen? 'open' : 'closed'}>
        
            <motion.div className="bg" variants={variants}>
                 <Links setIsOpen={setIsOpen}/>
            </motion.div>      
            <ToggleButton setIsOpen={setIsOpen}/>  
        </motion.div>
    );
}

export default Sidebar;
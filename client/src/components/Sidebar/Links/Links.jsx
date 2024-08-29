import { motion } from 'framer-motion';
import React from 'react';
function Links({setIsOpen}) {

    const variants = {
        open:{
            transition:{
                staggerChildren:0.1
            }
        },
        closed:{
            transition:{
                staggerChildren:0.05,
                staggerDirection:-1
            }
        }
    }
    const itemVariants = {
        open:{
            y:0,
            opacity:1
        },
        closed:{
            y:50,
            opacity:0
        }
    }

    const items = ["home", "about","portfolio" , "contact"]
    return (
        <motion.div className='links'variants={variants}>
            {
                items.map((item,i)=>(
                    <motion.a href={`#${item}`} onClick={()=> setIsOpen(prev => !prev)} key={i} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item.toUpperCase()}</motion.a>
                ))
            }
        </motion.div>
    );
}

export default Links;
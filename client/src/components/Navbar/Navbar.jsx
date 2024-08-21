import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';


function Navbar(props) {


    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };



    return (
        <div className=  'navbar'>
            <div className="logo">
                
            </div>
            <div className="nav-locations">
                <ul> 
                    <Link className='link'  spy={true}  activeClass="active" to='home' offset={-200}>HOME</Link>
                    <Link className='link'  spy={true}  activeClass="active" to='about' offset={-150}>ABOUT ME</Link>
                    <Link className='link'  spy={true}  activeClass="active" to='portfolio'offset={-100}>PORTFOLIO</Link>
                    <Link className='link'  spy={true}  activeClass="active" to='others'>OTHERS</Link>
                    <Link className='link'  spy={true}  activeClass="active" to='contact'>CONTACT</Link>
                </ul>
            </div>
            

        </div>
    );
}

export default Navbar
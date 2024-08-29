import { useState } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';
import Sidebar from '../Sidebar/Sidebar';
import './Navbar.css';

function Navbar(props) {



    const [isOpen, setOpen] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };



    return (
        <>

            <Headroom>

                <div className='navbar'>
                    <div className="logo">

                    </div>
                    <div className="nav-locations">
                        <ul>
                            <Link className='link' spy={true} activeClass="active" to='home' offset={-200}>HOME</Link>
                            <Link className='link' spy={true} activeClass="active" to='about' offset={-150}>ABOUT ME</Link>
                            <Link className='link' spy={true} activeClass="active" to='portfolio' offset={-100}>PORTFOLIO</Link>
                            <Link className='link' spy={true} activeClass="active" to='contact' offset={50}>CONTACT</Link>
                        </ul>
                    </div>


                </div>
            </Headroom>

            <div className="navbarResponsive">
                <Sidebar/>
            </div>
        </>
    );
}

export default Navbar
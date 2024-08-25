import { useState } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';
import {
    Contact,
    MenuBar,
    NavItem,
    SideNavbar
} from "responsive-navigation";
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
                <SideNavbar style={{ width: "250px",zIndex: 1000, height: "100vh", border: "1px solid gray", background: " rgba(7, 7, 78, .9)" }}>
                    <MenuBar>
                        <NavItem>
                            <Link className='link' spy={true} activeClass="active" to='home' offset={-200}>HOME</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='link' spy={true} activeClass="active" to='about' offset={-150}>ABOUT ME</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='link' spy={true} activeClass="active" to='portfolio' offset={-100}>PORTFOLIO</Link>
                        </NavItem>
                        <NavItem>
                            <Link className='link' spy={true} activeClass="active" to='contact' offset={50}>CONTACT</Link>
                        </NavItem>
                    </MenuBar>
                    <Contact>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                height="2em"
                                width="2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="none"
                                    strokeMiterlimit="10"
                                    strokeWidth="32"
                                    d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374z"
                                ></path>
                            </svg>
                            <p
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    fontSize: "14px",
                                }}
                            >
                                
                                <span>  CONTACT</span>
                                <span>+971569672162</span>
                            </p>
                        </div>
                    </Contact>
                </SideNavbar>
            </div>
        </>
    );
}

export default Navbar
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AmplifySignOut } from '@aws-amplify/ui-react';

function Navbar() {
    const [click, setClick] = useState(false);  //initial value is false
    const [button ,setButton] = useState(true);

    const handleClick = () => setClick(!click); //sets the opposite value of click on click
    const closeMobileMenu = () => setClick(false);

    const displayButton = () => { // if the navbar is not visible, change it to a little menu
        if(window.innerWidth <= 960)
            setButton(false);
        else 
            setButton(true);
    };

    window.addEventListener( 'resize', displayButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Circle
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/homepage' className='nav-links' onClick={closeMobileMenu}>
                                Homepage
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                                Events
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/clubs' className='nav-links' onClick={closeMobileMenu}>
                                Clubs
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ul className={click ? 'nav-menu active' : 'nav-menu-second'}>
                        <li className='nav-item'>
                            <Link to='/notifications' className='nav-links' onClick={closeMobileMenu}>
                                Notifications
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <AmplifySignOut />   
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

import './navbar.css'
import logo from '../../assets/logo.png'
import mail from '../../assets/mail.svg'
import menu from '../../assets/menu.png'
import {Link} from 'react-scroll';
import { useState } from 'react';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktop-menu">
                <Link activeClass='active' to="hero-section" spy={true} smooth={true} offset={-100} duration={500}className="desktop-menu-list-item">Home</Link>
                <Link activeClass='active' to="skills-section" className="desktop-menu-list-item" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
                <Link activeClass='active' to="portfolio-section" className="desktop-menu-list-item" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
            </div>
            <button className="desktop-menu-btn" onClick={() => {
                document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={mail} alt="email icon" className="desktop-menu-email-icon"/><p id="btn-text">Contact Me</p>
            </button>

            {/* Burger Menu */}
            <div className="mobMenu" onClick={() => { setShowMenu(!showMenu) }}>
                <div className={`menu-bar ${showMenu ? 'open' : ''}`}></div>
                <div className={`menu-bar ${showMenu ? 'open' : ''}`}></div>
                <div className={`menu-bar ${showMenu ? 'open' : ''}`}></div>
            </div>
            <div className="burger-menu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to="hero-section" spy={true} smooth={true} offset={-100} duration={500} className="burger-menu-list-item" onClick={() => { setShowMenu(false) }}>Home</Link>
                <Link activeClass='active' to="skills-section" className="burger-menu-list-item" spy={true} smooth={true} offset={-100} duration={500} onClick={() => { setShowMenu(false) }}>Skills</Link>
                <Link activeClass='active' to="portfolio-section" className="burger-menu-list-item" spy={true} smooth={true} offset={-100} duration={500} onClick={() => { setShowMenu(false) }}>Portfolio</Link>
                <Link activeClass='active' to="contact-section" className="burger-menu-list-item" spy={true} smooth={true} offset={-100} duration={500} onClick={() => { setShowMenu(false) }}>Contact</Link>
            </div>
        </nav>

        
    );
}

export default NavBar;
import './navbar.css'
import logo from '../../assets/logo.png'
import mail from '../../assets/mail.svg'
import {Link} from 'react-scroll';

const NavBar = () => {
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
                <img src={mail} alt="email icon" className="desktop-menu-email-icon"/>Contact Me
            </button>
        </nav>
    );
}

export default NavBar;
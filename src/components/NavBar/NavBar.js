import './navbar.css'
import logo from '../../assets/logo.png'
import mail from '../../assets/mail.svg'
import {Link} from 'react-scroll';

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktop-menu">
                <Link to="/" className="desktop-menu-list-item">Home</Link>
                <Link className="desktop-menu-list-item">About</Link>
                <Link className="desktop-menu-list-item">Portfolio</Link>
                {/* <Link className="desktop-menu-list-item">Clients</Link> */}
            </div>
            <button className="desktop-menu-btn">
                <img src={mail} alt="email icon" className="desktop-menu-email-icon"/>Contact Me
            </button>
        </nav>
    );
}

export default NavBar;
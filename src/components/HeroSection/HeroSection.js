import './herosection.css'
// import bg from '../../assets/bg.png';
import bgDesign from '../../assets/bgDesign.png';
import hireMe from '../../assets/hireMe.svg'
import { Link } from "react-scroll";

const HeroSection = () => {
    return (
        <section id="hero-section">
            <div className="hero-section-content">
                <span id="hello-text">Hello,</span>
                <span id="intro-text">I'm <span id="intro-name">Rachel</span><br /><p className="smaller">a <span className="text-gradient">website developer</span></p></span>
                <p id="intro-para">I build user-friendly and visually pleasing websites.</p>
                <Link to="">
                    <button className="btn" onClick={() => {document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})}}>
                        <img src={hireMe} alt="smiley face"/>Hire Me
                    </button>
                </Link>
            </div>
            <img src={bgDesign} alt="hero section illustration" className="bg" />
        </section>
    );
}

export default HeroSection;
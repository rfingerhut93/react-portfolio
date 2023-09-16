import './skills.css';
import websiteIcon from '../../assets/websiteIcon.png';
import fullStackIcon from '../../assets/fullStackIcon.png';
import componentIcon from '../../assets/componentIcon.png';
import { useNavigate } from 'react-router-dom';

const Skills = () => {

    const navigate = useNavigate();

    return (
        <section id="skills-section">
            <span className="skill-title">Skills</span>
            <span className="skill-description">I specialize in creating web experiences by using various technologies:</span>
            <div className="skill-card-container">
                <div className="skill-card">
                    <img src={websiteIcon} alt="website icon" className="skill-card-img"/>
                    <div className="skill-card-text">
                        <h2>Websites and Landing Pages</h2>
                        <p>For your online presence, I design and build visually appealing websites and landing pages. I use CSS, HTML, and JavaScript to ensure your site not only looks great but functions seamlessly, providing an excellent user experience.</p>

                    </div>
                </div>
                <div className="skill-card">
                    <img src={fullStackIcon} alt="full stack web app icon" className="skill-card-img"/>
                    <div className="skill-card-text">
                        <h2>Full Stack Web Apps</h2>
                        <p>When you need interactive and feature-rich web applications, I use React and Node.js to create dynamic experiences. For robust data management, I integrate MongoDB as the database, hosted on the Google Cloud Platform for scalability.</p>
                    </div>
                </div>
                <div className="skill-card">
                    <img src={componentIcon} alt="frontend component icon" className="skill-card-img"/>
                    <div className="skill-card-text">
                        <h2>Website Components</h2>
                        <p>I create custom website components to enhance your website's interactivity and overall look. Whether it's user forms, navigation menus, or widgets, I create frontend elements that enhance user engagement and functionality.</p>
                    </div>
                </div>
            </div>         
        </section>
    );
}

export default Skills;
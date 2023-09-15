import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";


const MainSection = () => {
    return (
        <div className="main-container">
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

export default MainSection;
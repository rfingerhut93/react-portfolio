import Skills from "../components/Skills/Skills";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";


const MainSection = () => {
    return (
        <div className="main-container">
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default MainSection;
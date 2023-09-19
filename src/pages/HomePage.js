import HeroSection from "../components/HeroSection/HeroSection";
import MainSection from "../components/MainSection";
import './homepage.css'

const HomePage = () => {
    return (
        <div id="home-page-body">
            <HeroSection/>
            <MainSection />
        </div>
    );
}

export default HomePage;
import './App.css';
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;

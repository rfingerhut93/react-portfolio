import './App.css';
import { BrowserRouter} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HeroSection from './components/HeroSection/HeroSection';
import MainSection from './components/MainSection';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <HeroSection/>
        <MainSection />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
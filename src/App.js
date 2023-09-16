import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import FullStackPage from "./pages/FullStackPage";
import ComponentPage from "./pages/ComponentPage";
import StaticWebPage from "./pages/StaticWebPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div>
          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/websites" element={<StaticWebPage/>}/>
              <Route path="/fullstack" element={<FullStackPage/>}/>
              <Route path="/components" element={<ComponentPage/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
import "./App.css";
import Skill from "./components/Skill/Skill";
import About from "./components/AboutPage/About";
import Portfolio from "./components/PortfolioPage/Portfolio";
import Resume from "./components/Resume/Resume";
import Blog from "./components/BlogPage/Blog";
import ContactPage from "./components/ContactPageAndFooter/Contact";
import FooterSection from "./components/ContactPageAndFooter/FooterSection";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <HeroSection />
        <Skill />
        <Portfolio />
        <About />
        <Resume />
        <Blog />
        <ContactPage />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./components/HomePage/Home";
import Skill from "./components/Skill/Skill";
import About from "./components/AboutPage/About";
import Portfolio from "./components/PortfolioPage/Portfolio";
import Resume from "./components/Resume/Resume";
import Blog from "./components/BlogPage/Blog";
import ContactPage from "./components/ContactPageAndFooter/Contact";
import FooterSection from "./components/ContactPageAndFooter/FooterSection";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Home />
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

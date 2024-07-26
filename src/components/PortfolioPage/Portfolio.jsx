import "./Portfolio.css";
import Subtitle from "../Other Components/Subtitle";
import Projects from "./Projects";

function Portfolio() {
  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-wrapper">
        <Subtitle>Portfolio</Subtitle>
        <h1>
          <span>Creative</span> Work
        </h1>
        <div className="portfolio-project-container">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

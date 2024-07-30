import "./HeroSection.css";
import CommonButton from "../Other Components/CommonButton";
import githubLogo from "../../assets/github_logo.svg";
import linkedinLogo from "../../assets/linkedin_logo.svg";
import heroSectionRight from "../../assets/hero-section-right.svg";

function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div className="hero-left">
        <h1>Hi, I'm Dhruvi 👋</h1>
        <p className="hero-first-para">
          I bring{" "}
          <span>
            ideas <span></span>
          </span>
          to web.
        </p>
        <p className="hero-second-para">
          Transforming complex ideas into elegant and scalable web solutions.
        </p>
        <a href="#portfolio" className="hero-button">
          <CommonButton>View My Work</CommonButton>
        </a>

        <div className="social-links-wrapper">
          <a href="https://github.com/dhruvi-19">
            <div className="social-link-logo-with-name">
              <img
                src={githubLogo}
                alt="Github Logo"
                className="social-media-logo"
              />
              <p>Github</p>
            </div>
          </a>
          <a href="https://in.linkedin.com/in/dhruvi-bhuva-b98123215?original_referer=https%3A%2F%2Fwww.google.com%2F">
            <div className="social-link-logo-with-name">
              {" "}
              <img
                src={linkedinLogo}
                alt="Linkedin Logo"
                className="social-media-logo"
              />
              <p>LinkdIn</p>
            </div>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <img
          src={heroSectionRight}
          alt="Coding girl"
          className="hero-right-pic"
        />
      </div>
    </div>
  );
}

export default HeroSection;

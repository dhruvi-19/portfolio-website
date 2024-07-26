import "./About.css";
import Subtitle from "../Other Components/Subtitle";
import DhruviPic from "../../assets/Dhruvi-YellowBackground.png";
import github from "../../assets/github_logo.svg";
import linkdIn from "../../assets/linkedinAboutLogo.svg";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-orbit">
        <span className="about-circle"></span>
      </div>
      <div className="about-wrapper">
        <div>
          <Subtitle>About me</Subtitle>
        </div>
        <div className="about-main-container">
          <div className="about-left">
            <img src={DhruviPic} alt="Dhruvi's Pic" loading="lazy" />
          </div>
          <div className="about-right">
            <div className="about-text">
              <h2>Dhruvi Bhuva</h2>
              <small>Software Developer</small>
              <p>
                I'm Software Developer with over a year of experience in the web
                development industry. My expertise spans both frontend and
                backend technologies, allowing me to create comprehensive and
                seamlessly integrated web solutions. I am committed to
                developing and optimizing interactive, user-friendly, and
                feature-rich web applications. I'm proficient in troubleshooting
                complex issues and implementing new features.Whether you're a
                business seeking a robust web presence or an employer looking to
                hire a versatile developer, feel free to get in touch.
              </p>

              <ul>
                <li>
                  <strong>Expertise: </strong>
                  Software Development
                </li>
                <li>
                  <strong>Email: </strong>
                  dbhuva1911@gmail.com
                </li>
              </ul>
            </div>
            <div className="about-socials">
              <a href="https://github.com/dhruvi-19" target="_blank">
                <div>
                  <img src={github} alt="github" />
                </div>
              </a>
              <a
                href="https://in.linkedin.com/in/dhruvi-bhuva-b98123215?original_referer=https%3A%2F%2Fwww.google.com%2F"
                target="_blank"
              >
                <div>
                  <img src={linkdIn} alt="linkdIn" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

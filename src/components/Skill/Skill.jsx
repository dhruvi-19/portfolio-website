import "./Skill.css";
import html from "../../assets/html.svg";
import css from "../../assets/css3.svg";
import tailwind from "../../assets/tailwind.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/reactjs.svg";
import mongodb from "../../assets/mongodb.svg";
import nodejs from "../../assets/nodejs.svg";
import express from "../../assets/express.svg";
import mysql from "../../assets/mysql.svg";
import git from "../../assets/git.svg";
import Subtitle from "../Other Components/Subtitle";

function Skill() {
  return (
    <div className="skill-wrapper">
      <div className="skill-container">
        {/* <div className="subtitle-container">
          <span></span>
          <p>I'm Expert In</p>
        </div> */}
        <Subtitle>I'm Expert In</Subtitle>
        <h1>Skills</h1>
        <p className="skill-text">
          I have been working in web development industry since{" "}
          <span>a long time</span>.
        </p>
        <div className="skill-image-container">
          <a href="https://en.wikipedia.org/wiki/HTML">
            <img
              src={html}
              alt="html"
              loading="lazy"
              height="80px"
              width="80px"
            />
            <p>HTML</p>
          </a>
          <a href="https://en.wikipedia.org/wiki/CSS">
            <img
              src={css}
              alt="css"
              loading="lazy"
              height="80px"
              width="80px"
            />
            <p>CSS</p>
          </a>
          <a href="https://en.wikipedia.org/wiki/Tailwind_CSS">
            <img
              src={tailwind}
              alt="tailwind"
              loading="lazy"
              height="80px"
              width="80px"
            />
            <p>CSS Tailwind</p>
          </a>
          <a href="https://en.wikipedia.org/wiki/JavaScript">
            <img
              src={javascript}
              alt="javascript"
              loading="lazy"
              height="80px"
              width="80px"
            />
            <p>Javascript</p>
          </a>
          <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
            <img
              src={react}
              alt="react"
              loading="lazy"
              height="80px"
              width="80px"
            />
            <p>React.js</p>
          </a>
          <a href="https://en.wikipedia.org/wiki/Node.js">
            <img
              src={nodejs}
              alt="nodejs"
              loading="lazy"
              height="80px"
              width="80px"
            />
            <p>Node.js</p>
          </a>
          <a href="https://en.wikipedia.org/wiki/MongoDB">
            <img
              src={mongodb}
              alt="mongodb"
              loading="lazy"
              height="80px"
              width="80px"
            />
            <p>MongoDB</p>
          </a>
          <a href="https://en.wikipedia.org/wiki/MySQL">
            <img
              src={mysql}
              alt="mysql"
              loading="lazy"
              height="80px"
              width="80px"
            />
            <p>MySQL</p>
          </a>
          <a href="https://en.wikipedia.org/wiki/Git">
            <img
              src={git}
              alt="git"
              loading="lazy"
              height="80px"
              width="80px"
            />
            <p>Git</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skill;

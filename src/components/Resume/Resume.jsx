import "./Resume.css";
import Subtitle from "../Other Components/Subtitle";
import ResumeCard from "../Other Components/ResumeCard";
import CommonButton from "../Other Components/CommonButton";
import DhurviResume from "../../assets/Dhruvi-Resume.pdf";
import lampShape from "../../assets/lamp.png";

function Resume() {
  const experince = [
    {
      title: "Software Developer",
      duration: "July 2024 - Present | Prometteur Solutions Pvt Ltd",
      discription:
        "Responsible for developing, and implementing user-friendly and responsive web applications. My primary focus is on creating engaging user experiences by using a combination of ReactJS, NextJS, and other latest Frontend technologies while also working closely with designers and back-end developers to ensure seamless integration of web applications.",
    },
    {
      title: "Web Developer",
      duration: "January 2024 - March 2024 | Aavakar Solution",
      discription:
        "Responsible for developing clean, readable, reusable and maintainable solutions. Mostly work on Javascript technologies such as expressJs and nodeJs",
    },
  ];

  const education = [
    {
      title: "Bachelors in Computer Engineering",
      duration: "2019 - 2024 | Bhagwan Mahavir University",
      discription:
        "Studied some core computer science courses including theory of computation, fundamentals of computer science, compilers and operating systems, information theory, systems and architecture, algorithms, data structures, software development and testing.",
    },
    {
      title: "High School Graduation",
      duration: "2016-2018 | P.P. Savani Vidhyabhavan",
      discription:
        "During this time in school, I enjoyed learning physics, chemistry and mathematics. Also during this time, I started to create static HTML5 and CSS3 websites.",
    },
  ];

  return (
    <div className="resume-container" id="resume">
      <img src={lampShape} alt="Lamp" />
      <div className="resume-wrapper">
        <Subtitle>Development Journey</Subtitle>
        <h1>Resume</h1>
        <div className="resume-box">
          <div className="resume-block">
            <h2>Experience</h2>
            <ResumeCard prop={experince} />
          </div>
          <div className="resume-block">
            <h2>Education</h2>
            <ResumeCard prop={education} />
          </div>
        </div>

        <a href={DhurviResume} download>
          <CommonButton>Download Resume</CommonButton>
        </a>
      </div>
    </div>
  );
}

export default Resume;

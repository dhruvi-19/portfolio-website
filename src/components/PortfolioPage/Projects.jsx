import "./Projects.css";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AmazonProject from "../../assets/amazonProject.png";
import RazorpayClone from "../../assets/razorpay-clone.png";
import EdTechPlatform from "../../assets/EdTech-Platform.png";

const projects = [
  {
    id: 1,
    image: AmazonProject,
    name: "Amazon Project",
    description:
      "In Amazon Add-to-Cart feature project, I implemented a fully functional shopping cart using HTML, CSS, and JavaScript. This project includes a dynamic product display, where users can browse items and add them to their cart with a single click. The cart dynamically updates to show the total number of items and the total cost, enhancing the user experience. Additionally, the project features responsive design techniques to ensure a seamless shopping experience across various devices.",
    technologies: "HTML, CSS, Javascript",
    githubLink: "https://github.com/user/project1",
    color: "#1d3557",
  },
  {
    id: 2,
    image: RazorpayClone,
    name: "Razorpay Clone",
    description:
      "This project is a functional clone of the Razorpay payment gateway, designed to showcase an intuitive user interface and seamless payment processing. The website features responsive design and dynamic elements, allowing users to navigate through various payment options and view transaction histories. The secure payment flow effectively mimics real-world transactions, highlighting my skills in front-end development.",
    technologies: "HTML, CSS, CSS Tailwind, Javascript",
    color: "#1d3557",
  },
  {
    id: 3,
    image: EdTechPlatform,
    name: "EdTech Platform",
    description:
      "The EdTech Platform is a comprehensive web application designed to connect educators and students seamlessly. In this platform, educators can create, manage, and sell their courses, while students can easily browse and purchase courses that fit their learning needs. This project provides an intuitive and scalable solution for online education. Users can enjoy a smooth and interactive interface, ensuring a satisfying learning journey.",
    technologies: "HTML, CSS, Javascript, ReactJs, ExpressJs, NodeJs, MongoDB",
    color: "#1d3557",
  },
];

function Projects() {
  const [currentProject, setCurrentProject] = useState(projects[0]);
  const [animationKey, setAnimationKey] = useState(0); // State to reset animation

  const handleCarouselChange = (index) => {
    setCurrentProject(projects[index]);
    setAnimationKey((prevKey) => prevKey + 1); // Change the key to reset the animation
  };

  return (
    <div className="portfolio-project-container">
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          onChange={handleCarouselChange}
        >
          {projects.map((project, index) => (
            <div key={index} className="project-index">
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="carousel-image"
                style={{
                  borderTop: `50px solid ${currentProject.color}`,
                  borderBottom: `50px solid ${currentProject.color}`,
                  borderLeft: `25px solid ${currentProject.color}`,
                  borderRight: `25px solid ${currentProject.color}`,
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="project-details" key={animationKey}>
        <h2>{currentProject.name}</h2>
        <p>{currentProject.description}</p>
        <ul>
          <li>
            <strong>Technologies:</strong> {currentProject.technologies}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;

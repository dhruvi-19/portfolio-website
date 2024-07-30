import "./Blog.css";
import Subtitle from "../Other Components/Subtitle";
import BlogCard from "../Other Components/BlogCard";

import journeyFromFrontToFull from "../../assets/development-journey.avif";
import javascriptEngine from "../../assets/js-engine.jpeg";

function Blog() {
  const Blogs = [
    {
      id: 1,
      image: journeyFromFrontToFull,
      category: "Career",
      date: "February.10.2024",
      blogTitle: "My Journey from Frontend Developer to Full Stack Developer",
      blogPara:
        "Transitioning from a Frontend Developer to a Full Stack Developer was a significant moment in my career journey.",
    },
    {
      id: 2,
      image: javascriptEngine,
      category: "Javascript",
      date: "December.12.2023",
      blogTitle:
        "How The Heck JavaScript Works Behind The Scenes? What is a JavaScript Engine?",
      blogPara:
        "The browser does not understand JavaScript. It uses a JavaScript engine that reads and executes the source code so that the computer knows what to do. Eachh major browser has its own engine.",
    },
  ];

  return (
    <div className="blog-container" id="blog">
      <div className="blog-orbit-yellow">
        <span className="blog-circle-yellow"></span>
      </div>
      <div className="blog-orbit-blue">
        <span className="blog-circle-blue"></span>
      </div>
      <div className="blog-wrapper">
        <Subtitle>Blog</Subtitle>
        <h1>
          Recent{" "}
          <span>
            {" "}
            blog<span className="blog-underline"></span>
          </span>{" "}
          post
        </h1>
        <div className="blog-card-box">
          <BlogCard prop={Blogs} />
        </div>
      </div>
    </div>
  );
}

export default Blog;

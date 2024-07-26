import "./Navbar.css";
import CommonButton from "../Other Components/CommonButton";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <div className="navContainer">
        <a href="/" className="logo-link" style={{ scrollBehavior: "smooth" }}>
          {/* <img src={dbLogo} alt="DB" className="db-logo" /> */}
          <h1 className="logo-name">
            <span className="logo--of-d">DB</span>
            {/* <span className="logo-of-b"></span> */}
          </h1>
        </a>

        <div className="link-container">
          <a href="#portfolio" style={{ scrollBehavior: "smooth" }}>
            Portfolio
          </a>
          <a href="#about" style={{ scrollBehavior: "smooth" }}>
            About
          </a>
          <a href="#resume" style={{ scrollBehavior: "smooth" }}>
            Resume
          </a>
          <a href="#blog" style={{ scrollBehavior: "smooth" }}>
            Blog
          </a>
        </div>

        <div>
          <a href="#contact" style={{ scrollBehavior: "smooth" }}>
            <CommonButton>Let's Talk</CommonButton>
          </a>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;

// function Navbar() {
//   return (
//     <Router>
//       <div className="navContainer">
//         <Link to="/" className="logo-link">
//           {/* <img src={dbLogo} alt="DB" className="db-logo" /> */}
//           <h1 className="logo-name">
//             <span className="logo--of-d">DB</span>
//             {/* <span className="logo-of-b"></span> */}
//           </h1>
//         </Link>

//         <div className="link-container">
//           <Link to="/">Home</Link>
//           <Link to="/portfolio">Portfolio</Link>
//           <Link to="/about">About</Link>
//           <Link to="/resume">Resume</Link>
//           <Link to="/blog">Blog</Link>
//         </div>

//         <div>
//           <Link to="/contact">
//             <CommonButton>Let's Talk</CommonButton>
//           </Link>
//         </div>
//       </div>

//       <Routes>
//         <Route exact path="/" component={Home} />
//         <Route path="/portfolio" component={Portfolio} />
//         <Route path="/about" component={About} />
//         <Route path="/resume" component={Resume} />
//         <Route path="/blog" component={Blog} />
//         <Route path="/contact" component={ContactPage} />
//       </Routes>
//     </Router>
//   );
// }

// export default Navbar;

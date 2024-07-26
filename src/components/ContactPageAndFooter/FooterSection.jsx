import "./FooterSection.css";
import atSign from "../../assets/atSign_grey.svg";
import phoneSign from "../../assets/phone_grey.svg";
import linkdInLogo from "../../assets/linkedin_white_footer.svg";
import githubLogo from "../../assets/github_white_footer.svg";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-contact-details">
          <p>
            <img src={atSign} alt="at" loading="lazy" />
            dbhuva1911@gmail.com
            <span></span>
          </p>
          <p>
            <img src={phoneSign} alt="phone" loading="lazy" />
            +91 7984145658
          </p>
        </div>
        <div className="footer-socials">
          <a href="https://in.linkedin.com/in/dhruvi-bhuva-b98123215?original_referer=https%3A%2F%2Fwww.google.com%2F">
            <img src={linkdInLogo} alt="LinkdIn" loading="lazy" />
          </a>
          <a href="https://github.com/dhruvi-19">
            <img src={githubLogo} alt="Github" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

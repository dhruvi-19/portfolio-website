import "./Contact.css";
import Subtitle from "../Other Components/Subtitle";
import handshake from "../../assets/handshake.svg";
import CommonButton from "../Other Components/CommonButton";

function ContactPage() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-wrapper">
        <div>
          <Subtitle>Contact me</Subtitle>
        </div>
        {/* <h1>
          Let's Build something Together.{" "}
          <img src={handshake} alt="handshake"></img>
        </h1> */}
        <p className="contact-para">
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </p>

        <form>
          <input type="text" placeholder="Enter Your name" required></input>
          <input type="email" placeholder="Enter your email" required></input>
          <textarea
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>
          <CommonButton>Send Message</CommonButton>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

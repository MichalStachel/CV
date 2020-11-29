import React from "react";
import "../styles/Contact.css";
import { Element } from "react-scroll";

function Contact() {
  return (
    <Element name="Contact">
      <section className="box col">
        <h1 className="textCenter marginTop marginBottom">Contact</h1>
        <h2>Send me an email</h2>
        <form
          action="mailto:michal.stachel@gmail.com"
          method="POST"
          name="EmailForm"
          className="col contactForm"
        >
          <input type="email" placeholder="Enter your email" id="emailInput" />
          <textarea placeholder="Enter message..." id="messageText" />
          <button
            className="btnSubmit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Send
          </button>
        </form>
      </section>
    </Element>
  );
}
export default Contact;

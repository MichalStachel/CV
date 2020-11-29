import React from "react";
import { Element } from "react-scroll";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <Element name="About">
      <section className="col about">
        <h1>About Me</h1>
        <p className="marginTop marginBottom aboutText">
          A year of learning programming made me able to create web applications
          freely. I am willing to learn and open for new knowledge and
          technology. As I am a flexible person I am looking for an internship
          or a job as a frontend developer in full-time employment. In the
          future my goal is to focus on mobile applications.
        </p>
      </section>
    </Element>
  );
};

export default AboutMe;

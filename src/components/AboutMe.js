import React from "react";
import { Element } from "react-scroll";
import "../styles/AboutMe.css";
import ScrollAnimation from "react-animate-on-scroll";

const AboutMe = () => {
  return (
    <ScrollAnimation animateIn="zoomIn" animateOnce>
      <Element name="About">
        <section className="col about">
          <h1>About Me</h1>
          <p className="marginTop marginBottom aboutText">
            A year of learning programming made me able to create web
            applications freely. I am willing to learn and open for new
            knowledge and technology. As I am a flexible person I am looking for
            an internship or a job as a frontend developer in full-time
            employment. Most of my knowledge about programming came from
            FreeCodeCamp and CodeWars websites. In the future my goal is to
            focus on mobile applications. At the end i would like to invite you
            to my{" "}
            <a
              rel="stylesheet"
              href="https://github.com/MichalStachel"
              target="blank"
            >
              Github
            </a>{" "}
            and{" "}
            <a
              rel="stylesheet"
              target="blank"
              href="https://www.codewars.com/users/MichalStachel"
            >
              Codewars
            </a>{" "}
            Profile.
          </p>
        </section>
      </Element>
    </ScrollAnimation>
  );
};

export default AboutMe;

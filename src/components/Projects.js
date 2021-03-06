import React from "react";
import Slider from "react-slick";
import ReactTypingEffect from "react-typing-effect";
import camera from "../images/camera.png";
import discord from "../images/discord.png";
import hangman from "../images/hangman.png";
import contact from "../images/contact.png";
import cv from "../images/CV.png";
import Me from "../images/Me.jpg";
import { Link, Element } from "react-scroll";
import "../styles/Projects.css";
import "../styles/navigation.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollAnimation from "react-animate-on-scroll";

const lorem =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sed architecto minus debitis velit minima alias porro eligendi magni officia quaerat, enim necessitatibus harum explicabo cum est totam, recusandae numquam?";

const data = [
  {
    name: "Hangman",
    img: hangman,
    urlCode: "https://github.com/MichalStachel/Hangman",
    urlSite: "https://michalstachel.github.io/Hangman/",
  },
  {
    name: "Photo-Page",
    img: camera,
    urlCode: "https://github.com/MichalStachel/Photography-Page",
    urlSite: "https://michalstachel.github.io/Photography-Page/",
  },
  {
    name: "Typing Game",
    img: "",
    urlCode: "https://github.com/MichalStachel/Fast-Typing-Game",
    urlSite: "https://michalstachel.github.io/Fast-Typing-Game/",
  },
  {
    name: "Discord Bot",
    img: discord,
    urlCode: "https://github.com/MichalStachel/Discord-bot-node.js-",
    urlSite: "",
  },
  {
    name: "CV",
    img: cv,
    urlCode: "https://github.com/MichalStachel/CV",
    urlSite: "",
  },
];

const Projects = ({ flag }) => {
  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Element name="Home">
      <section className="welcomeScreen">
        <ScrollAnimation animateIn="slideInLeft" animateOnce>
          <div className="row upperHalf">
            <img src={Me} alt="" className="me" />
            <div className="upperHalfText">
              <h1>Hi! My name is</h1>
              <h3>Michael Stachel</h3>
              <h2>I wish to create new features.</h2>

              {!flag ? (
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <button id="talkBtn" className="btnUp">
                    Let's Talk
                  </button>
                </Link>
              ) : (
                <>
                  <button id="talkBtn" className="btnUp">
                    Let's Talk
                  </button>
                  <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <img
                      src={contact}
                      alt=""
                      className="contactBtn"
                      onClick={() => {
                        console.log("gesage");
                      }}
                    />
                  </Link>
                </>
              )}
            </div>
          </div>
        </ScrollAnimation>
        {/* ^UpperHalf end */}
        <ScrollAnimation animateIn="slideInRight" animateOnce>
          <div>
            <h1 className="projectsTitle">Projects</h1>
            <Slider {...settings} className="slider">
              {data.map(({ name, img, urlSite, urlCode }) => {
                return (
                  <div key={name}>
                    <h2 className="projectTitle">{name}</h2>
                    <div className="card col">
                      {img ? (
                        <img src={img} alt="" className="projectImg" />
                      ) : (
                        <h1 id="fastTyping">
                          <ReactTypingEffect text={[lorem]} />
                        </h1>
                      )}
                      <div className="row urlBtn">
                        {urlSite ? (
                          <a href={urlSite} target="blank">
                            <p id="www">WWW</p>
                          </a>
                        ) : null}
                        <a href={urlCode} target="blank">
                          <p id={urlSite ? "code" : "onlyCode"}>Code</p>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </ScrollAnimation>
      </section>
    </Element>
  );
};
export default Projects;

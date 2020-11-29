import React, { useEffect, useState } from "react";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import code from "../images/code.jpg";
import bg from "../images/backgroundPhoto.png";
import "../styles/home.css";

export default function HomeScreen() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [flag, setflag] = useState(false);

  useEffect(() => {
    const changeScrollPosition = () => {
      const cd = document.getElementById("codeImg");
      setScrollPosition(~~window.scrollY);
      cd.style.top = scrollPosition * -0.05 + "px";
    };
    window.addEventListener("scroll", changeScrollPosition);
    if (scrollPosition < 350) {
      setflag(false);
    } else {
      setflag(true);
    }
    return () => {
      window.removeEventListener("scroll", changeScrollPosition);
    };
  }, [scrollPosition]);

  return (
    <section className="col marginLeft">
      <img src={code} alt="" id="codeImg" />
      <img src={bg} alt="" id="bgImg" />
      <Projects flag={flag} />
      <AboutMe />
      <Skills />
      <Contact />
    </section>
  );
}

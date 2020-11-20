import React from "react";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

export default function HomeScreen() {
  return (
    <section className="col marginLeft">
      <Projects />
      <AboutMe />
    </section>
  );
}

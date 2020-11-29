import React from "react";
import "../styles/Contact.css";
import "../styles/Skills.css";
import ReactIcon from "../images/ReactIcon.png";
import AiIcon from "../images/AIIcon.png";
import CssIcon from "../images/CssIcon.png";
import GitIcon from "../images/GitIcon.png";
import JSIcon from "../images/JSIcon.png";
import PSIcon from "../images/PSIcon.png";
import HTMLIcon from "../images/HTML.png";
import NodeIcon from "../images/nodeIcon.jpg";
import brainJS from "../images/brainJS.png";
import phyton from "../images/phytonIcon.png";
import express from "../images/expressIcon.png";
import TSIcon from "../images/TypeScript.png";
import SkillSList from "./SkillsReusbleList.js";
import { Element } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";

const expArr = [
  { src: ReactIcon, text: "React" },
  { src: AiIcon, text: "Illustrator" },
  { src: CssIcon, text: "Css" },
  { src: GitIcon, text: "Git" },
  { src: JSIcon, text: "JavaScript" },
  { src: PSIcon, text: "PhotoShop" },
  { src: HTMLIcon, text: "HTML" },
];
const basics = [
  { src: NodeIcon, text: "Node" },
  { src: brainJS, text: "BrainJS" },
  { src: phyton, text: "Phyton" },
  { src: express, text: "Express" },
];
const focus = [
  { src: ReactIcon, text: "React Native" },
  { src: TSIcon, text: "TypeScript" },
  { src: NodeIcon, text: "Node" },
];

export default function Skills() {
  return (
    <ScrollAnimation animateIn="zoomIn" animateOnce>
      <Element name="Skills">
        <section className="box col">
          <h1 className="marginTop marginBottom">Skills</h1>
          <div className="colLeft marginBottom">
            <SkillSList
              arr={expArr}
              title="Technologies i have experience in:"
            />
            <SkillSList
              arr={basics}
              title="Technologies in which I know the basics:"
            />
            <SkillSList
              arr={focus}
              title="Technologies i'm focusing on right now"
            />
          </div>
        </section>
      </Element>
    </ScrollAnimation>
  );
}

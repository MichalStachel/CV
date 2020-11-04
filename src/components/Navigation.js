import React from "react";
import "../styles/navigation.css";
import home from "../images/home.png";
import about from "../images/about.png";
import skill from "../images/skill.png";
import contact from "../images/contact.png";
import logo from "../images/logo.png";

const items = [
  { name: "Home", url: home },
  { name: "About Me", url: about },
  { name: "Skills", url: skill },
  { name: "Contact", url: contact },
];

function Navigation() {
  return (
    <section className="skewedBox">
      <div className="container">
        <img src={logo} alt="" id="logo" />

        <ul>
          {items.map(({ name, url }) => {
            return (
              <li>
                <img src={url} alt="" className="icons" />
                <p>{name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Navigation;

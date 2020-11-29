import React, { useState, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { Link } from "react-scroll";
import "../styles/navigation.css";
import home from "../images/home.png";
import about from "../images/about.png";
import skill from "../images/skill.png";
import contact from "../images/contact.png";
import logo from "../images/logo.png";
import burger1 from "../images/Burger1.png";
import burger2 from "../images/Burger2.png";
import burger3 from "../images/Burger3.png";
import burger4 from "../images/Burger4.png";
import { Element } from "react-scroll";
const items = [
  { name: "Home", url: home },
  { name: "About", url: about },
  { name: "Skills", url: skill },
  { name: "Contact", url: contact },
];
const defaultState = {
  count: 0,
  image: burger1,
  display: "",
  active: false,
  width: 0,
};

function Navigation() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [count, setCount] = useState(0);
  const [listStyles, setListStyles] = useState({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  });

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkWidth);
    };
  }, []);
  useEffect(() => {
    const sec = document.querySelector("section");
    dispatch({ type: "changeWidth", payload: window.innerWidth });
    if (state.width < 1025) {
      dispatch({ type: "activeOn/Off", payload: false });
      dispatch({ type: "changeDisplay", payload: "" });
      setListStyles({});
    } else if (state.width > 1025) {
      sec.style.display = "flex";
      dispatch({ type: "activeOn/Off", payload: true });
      setListStyles({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      });
    }
  }, [state.width]);

  useEffect(() => {
    const sec = document.querySelector("section");
    switch (count) {
      case 1:
        dispatch({ type: "changeImg", payload: burger2 });
        sec.style.display = "block";
        break;
      case 2:
        dispatch({ type: "changeImg", payload: burger3 });
        break;
      case 3:
        dispatch({ type: "changeImg", payload: burger4 });
        break;
      case 4:
        dispatch({ type: "changeDisplay", payload: "none" });
        dispatch({ type: "changeImg", payload: burger1 });
        break;
      default:
        dispatch({ type: "changeImg", payload: burger1 });
        break;
    }
  }, [count, state.active]);

  const startCounter = () => {
    dispatch({ type: "activeOn/Off", payload: true });
    const imageCounter = setInterval(() => {
      setCount((prevState) => {
        if (prevState === 4) {
          clearInterval(imageCounter);
          setCount(0);
        } else {
          return prevState + 1;
        }
      });
    }, 150);
  };

  const hide = () => {
    if (state.width < 1025) {
      dispatch({ type: "activeOn/Off", payload: false });
      dispatch({ type: "changeDisplay", payload: "" });
    }
  };

  const checkWidth = () => {
    dispatch({ type: "changeWidth", payload: window.innerWidth });
  };

  return (
    <nav>
      <img
        src={state.image}
        alt=""
        className="burger"
        style={{ display: state.display }}
        onClick={startCounter}
      />
      <section
        className={state.active ? "nav container" : "nav containerHide"}
        onClick={() => hide()}
      >
        <Element name="Home">
          <img src={logo} alt="" id="logo" />
        </Element>
        <ul>
          {items.map(({ name, url }) => {
            return (
              <>
                <Link
                  to={name}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => hide()}
                >
                  <li key={name} style={listStyles} className="row navItem">
                    <img
                      src={url}
                      alt=""
                      className={state.active ? "icons" : "iconsHide"}
                    />
                    <p className={state.active ? "navName" : "navNameHide"}>
                      {name}
                    </p>
                  </li>
                </Link>
              </>
            );
          })}
        </ul>
      </section>
    </nav>
  );
}

export default Navigation;

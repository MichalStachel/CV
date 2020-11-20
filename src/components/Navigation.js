import React, { useState, useEffect, useReducer } from "react";
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
const reducer = (state, action) => {
  switch (action.type) {
    case "":
      break;

    default:
      break;
  }
  throw new Error("no matching action type");
};
function Navigation() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(burger1);
  const [display, setDisplay] = useState("");
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(0);
  const [listStyles, setListStyles] = useState({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  });

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkWidth);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkWidth);
    };
  }, []);
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width < 1025) {
      setActive(false);
      setListStyles({});
    } else if (width > 1025) {
      setActive(true);
      setListStyles({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      });
    }
  }, [width]);

  useEffect(() => {
    const sec = document.querySelector("section");
    switch (count) {
      case 1:
        setImage(burger2);
        sec.style.display = "block";
        break;
      case 2:
        setImage(burger3);
        break;
      case 3:
        setImage(burger4);
        break;
      case 4:
        setDisplay("none");

        break;
      default:
        setImage(burger1);
        break;
    }
  }, [count, active]);

  const startCounter = () => {
    setActive(true);
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
    if (width < 1025) {
      setActive(false);
      setDisplay("");
    }
  };

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };
  return (
    <nav>
      {!active ? (
        <img
          src={image}
          alt=""
          className="burger"
          style={{ display }}
          onClick={startCounter}
        />
      ) : null}
      <img
        src={image}
        alt=""
        className="burger"
        style={{ display }}
        onClick={startCounter}
      />
      {/* {active ? ( */}
      <section
        className={active ? "nav container" : "nav containerHide"}
        onClick={() => hide()}
      >
        <img src={logo} alt="" id="logo" />
        <ul>
          {items.map(({ name, url }) => {
            return (
              <li key={name} style={listStyles}>
                <img
                  src={url}
                  alt=""
                  className={active ? "icons" : "iconsHide"}
                />
                <p className={active ? "navName" : "navNameHide"}>{name}</p>
              </li>
            );
          })}
        </ul>
      </section>
      {/* ) : null} */}
    </nav>
  );
}

export default Navigation;

// "nav container"

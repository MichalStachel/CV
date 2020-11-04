import React from "react";
import Me from "../images/Me.jpg";
import "../styles/Home.css";

export default function HomeScreen() {
  return (
    <section className="col">
      <div className="row upperHalf">
        <img src={Me} alt="" className="me" />
        <div>
          <h1>Hi my name is</h1>
          <h3>Michael Stachel</h3>
          <h2>I would like to create new features.</h2>
        </div>
      </div>
    </section>
  );
}

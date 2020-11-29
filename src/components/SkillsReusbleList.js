import React from "react";

export default function SkillsReusbleList({ arr, title }) {
  return (
    <div>
      <h4 className="skillListTitle">{title}</h4>
      <ul className="skillsList row">
        {arr.map(({ src, text }, index) => {
          return (
            <div
              className="colLeft"
              style={{ position: "relative" }}
              key={text}
            >
              <div className="col skillItem">
                <img src={src} alt="" className="skillIcons" />
                <li className="skillsName">{text}</li>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

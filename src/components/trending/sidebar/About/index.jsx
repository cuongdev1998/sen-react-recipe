import React from "react";
import "./About.scss";
function About(props) {
  return (
    <div className="sidebar__about">
      <h3>About me</h3>
      <div className="sidebar__about--avt">
        <img src="/images/avatar.jpeg" alt="" />
      </div>
      <h5 className="sidebar__about--name">SeN CC</h5>
      <p className="sidebar__about--intro">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, sed.
      </p>
    </div>
  );
}

export default About;

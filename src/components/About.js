import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>In a minute</p>
    <img src={image} alt="I made this"></img>
  </div>;
}

export default About;

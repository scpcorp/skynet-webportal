import React from "react";
import Reveal from "react-reveal/Reveal";
import logo from "../../images/logo.svg";
import "./HomeTop.scss";
import { Skynet, Deco1, Deco2 } from "../../svg";

export default function HomeTop() {
  return (
    <Reveal effect="active">
      <div className="home-top">
        <img src={logo} alt="ScPrime logo" className="logo" />
        <Skynet className="wordmark" />
        <h1 className="fadeInUp delay2">Public Web Storage, Better</h1>
        <h2 className="fadeInUp delay2">Web portals are next gen ScPrime Public Cloudstorage !</h2>


        <Deco1 className="deco-1 fadeInUp delay6" />
        <Deco2 className="deco-2 fadeInUp delay6" />
      </div>
    </Reveal>
  );
}

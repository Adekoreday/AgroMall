import React from "react";
import BackgroundImg from "../../assets/background.svg";
import HeroImg from "../../assets/heroImg.svg";
import FarmImg from "../../assets/farmImg.svg";
import "./index.css";
const Hero = () => {
  return (
    <div>
      <div className="hero__container">
        <div className="hero__content">
          <div class="hero__text">
            <div className="hero__title">Welcome To AgroCola </div>
            <div className="hero__subtitle">
              Digital Agriculture for tomorrows leaders{" "}
            </div>
          </div>
          <div className="hero__image">
            <img
              className="hero__image--content"
              src={HeroImg}
              alt="beautiful lady using agro mall app."
            ></img>
          </div>
        </div>
        <div className="background__container">
          <img className="bg__image" src={BackgroundImg} alt="bg"></img>
        </div>
      </div>
      <div className="herotwo__image">
        <img
          className="herotwo__image--content"
          src={FarmImg}
          alt="sketched image of a farm."
        ></img>
      </div>
    </div>
  );
};

export default Hero;

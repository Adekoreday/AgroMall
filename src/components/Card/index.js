import React from "react";
import "./index.css";

const Card = ({ img, title, content }) => {
  return (
    <div className="card">
      <div className="img__container">
        <img className="card__image" src={img}></img>
      </div>
      <div className="card__content">
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="readmore">Read More</div>
      </div>
    </div>
  );
};

export default Card;

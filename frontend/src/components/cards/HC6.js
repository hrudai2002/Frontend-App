import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./styles/hc6.css";

const Card = (props) => {
  const card = props.card,
    scroll = props.scroll;

  // title
  const { title } = card;

  // URL
  const { url } = card;

  // icon
  const { icon } = card;

  return (
    <a href={url}>
      <div className={`hc6-card ${scroll ? "hc6-card-display" : ""}`}>
        <img src={icon.image_url} alt="" className="hc6card-icon" />
        <p className="hc6card-title">{title}</p>
        <div className="hc6card-arrow">
          <IoIosArrowForward />
        </div>
      </div>
    </a>
  );
};

const HC6 = (props) => {
  const cards = props.card;
  const scroll = props.scroll;
  return (
    <>
      {cards.map((card, id) => {
        return <Card card={card} scroll={scroll} />;
      })}
    </>
  );
};

export default HC6;

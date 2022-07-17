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
    <div className={`hc6-card ${scroll && "hc6-card-display"}`}>
      <a href={url}>
        <img src={icon.image_url} alt="" className="hc6card-icon" />
        <p className="hc6card-title">{title}</p>
        <div className="hc6card-arrow">
          <IoIosArrowForward />
        </div>
      </a>
    </div>
  );
};

const HC6 = (props) => {
  const cards = props.card;
  let scroll = props.scroll;
  if (!scroll && cards.length === 1) scroll = true;
  return (
    <div className={`${!scroll && "hc6card-parent"}`}>
      {cards.map((card, id) => {
        return <Card key={id} card={card} scroll={scroll} />;
      })}
    </div>
  );
};

export default HC6;

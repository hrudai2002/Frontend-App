import React from "react";
import "./styles/hc5.css";

const Card = (props) => {
  // All data related to the Card...
  const card = props.card;
  const scroll = props.scroll;

  // Background Image, url
  const bg_image = card.bg_image.image_url;

  // URL
  const url = card.url;

  return (
    <div className={`hc5-card ${scroll && "hc5-card-display"}`}>
      <a href={url}>
        <img src={bg_image} alt="" />
      </a>
    </div>
  );
};

const HC5 = (props) => {
  const cards = props.card;
  let scroll = props.scroll;
  if (!scroll && cards.length === 1) scroll = true;

  return (
    <div className={`${!scroll && "hc5card-parent"}`}>
      {cards.map((card, id) => {
        return <Card key={id} card={card} scroll={scroll} />;
      })}
    </div>
  );
};

export default HC5;

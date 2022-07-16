import React from "react";
import "./styles/hc5.css";

const Card = (props) => {
  const card = props.card;
  const scroll = props.scroll;

  // Background Image, url
  const bg_image = card.bg_image.image_url;

  // URL
  const url = card.url;

  return (
    <a href={url}>
      <div className={`hc5-card ${scroll ? "hc5-card-display" : ""}`}>
        <img src={bg_image} alt="" />
      </div>
    </a>
  );
};

const HC5 = (props) => {
  const cards = props.card;
  const scroll = props.scroll;
  return (
    <>
      {cards.map((card, id) => {
        return <Card key={id} card={card} scroll={scroll} />;
      })}
    </>
  );
};

export default HC5;

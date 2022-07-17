import React from "react";
import "./styles/hc9.css";

const Card = (props) => {
  // All the Data related to the Card
  const card = props.card;
  const scroll = props.scroll;

  // Background Image
  const bg_image = card.bg_image.image_url;

  // URL
  const url = card.url;

  return (
    <div className={`hc9-card ${scroll && "hc9-card-display"}`}>
      <a href={url}>
        <img src={bg_image} alt="" />
      </a>
    </div>
  );
};

const HC9 = (props) => {
  const cards = props.card;
  let scroll = props.scroll;
  if (!scroll && cards.length === 1) scroll = true;
  return (
    <div className={`${!scroll && "hc9card-parent"}`}>
      {cards.map((card, id) => {
        return <Card key={id} card={card} scroll={scroll} />;
      })}
    </div>
  );
};

export default HC9;

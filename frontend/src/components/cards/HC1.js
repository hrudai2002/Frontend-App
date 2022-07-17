import React from "react";
import "./styles/hc1.css";

const Card = (props) => {

  // All the data related to the card ...
  const card = props.card,
    scroll = props.scroll;


  // title, url, bg_color
  const { title, url, bg_color } = card;

  const icon = card.icon.image_url;

  return (
    <div
      className={`hc1-card ${scroll && "hc1-card-display"}`}
      style={{
        backgroundColor: bg_color,
      }}
    >
      <a href={url} alt="">
        <img src={icon} alt="" className="hc1card-icon" />
        <h1 className={`hc1card-title ${!scroll && "hc1card-title-noscroll"}`}>
          {title}
        </h1>
        <p
          className={`hc1card-subtitle ${
            !scroll && "hc1card-subtitle-noscroll"
          }`}
        >
          {title}
        </p>
      </a>
    </div>
  );
};

const HC1 = (props) => {
  const cards = props.card;
  let scroll = props.scroll;
  if (!scroll && cards.length === 1) scroll = true;
  return (
    <div className={`${!scroll && "hc1card-parent"}`}>
      {cards.map((card, id) => {
        return <Card key={id} card={card} scroll={scroll} />;
      })}
    </div>
  );
};

export default HC1;

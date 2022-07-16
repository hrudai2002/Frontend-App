import React, { useState, useEffect } from "react";
import "./styles/hc1.css";

const Card = (props) => {
  const card = props.card,
    scroll = props.scroll;
  // title, url
  const { title, url, bg_color } = card;

  const icon = card.icon.image_url;

  return (
    <a href={url}>
      <div
        className={`hc1-card ${scroll ? "hc1-card-display" : "hc1-card-wrap"}`}
        style={{
          backgroundColor: bg_color,
        }}
      >
        <img src={icon} alt="" className="hc1card-icon" />
        <h1 className="hc1card-title">{title}</h1>
        <p className="hc1card-subtitle">{title}</p>
      </div>
    </a>
  );
};

const HC1 = (props) => {
  const cards = props.card;
  const scroll = props.scroll;
  return (
    <div className="hc1card-parent">
      {cards.map((card, id) => {
        return (
          <Card key={id} card={card} scroll={scroll} length={cards.length} />
        );
      })}
    </div>
  );
};

export default HC1;

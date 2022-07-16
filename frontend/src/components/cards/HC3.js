import React from "react";
import "./styles/hc3.css";


const Card = (props) => {
  const card = props.card,
    scroll = props.scroll;

  // Button Styles
  const { text, bg_color, text_color, url } = card.cta[0];

  return (
    <div className={`hc3-card ${scroll ? "hc3-card-display" : ""}`}>
      <img src={card.bg_image.image_url} alt="" />
      <h1 className="hc3card-title">{card.title}</h1>
      <p className="hc3card-description">{card.description}</p>
      <a href= {url}>
        <button
          className="hc3card-button"
          style={{ color: text_color, backgroundColor: bg_color }}
        >
          <p>{text}</p>
        </button>
      </a>
    </div>
  );
}

const HC3 = (props) => {
    const cards = props.card;
    const scroll = props.scroll;
    return (
      <>
        {cards.map((card, id) => {
          return <Card key = {id} card={card} scroll = {scroll} />;
        })}
      </>
    );
};

export default HC3;

import React from "react";
import "./styles/hc3.css";

const HC3 = (props) => {
  const card = props.card,
    scroll = props.scroll;

  // title, description
  const { title, description } = card;

  // URL
  const { url } = card;
  
  // Button Styles
  const { text, bg_color, text_color } = card.cta[0];

  return (
    <>
      <a href={url}>
        <div className={`hc3-card ${scroll ? "hc3-card-display" : ""}`}>
          <img src={card.bg_image.image_url} alt="" />
          <h1 className="hc3card-title">{title}</h1>
          <p className="hc3card-description">{description}</p>
          <button
            className="hc3card-button"
            style={{ color: text_color, backgroundColor: bg_color }}
          >
            <p>{text}</p>
          </button>
        </div>
      </a>
    </>
  );
};

export default HC3;

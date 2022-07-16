import React from 'react'
import './styles/hc9.css'

const Card = (props) => {
  const card = props.card;
  const scroll = props.scroll;

  // Background Image
  const bg_image = card.bg_image.image_url;

  // URL
  const url = card.url;

  return (
    <a href={url}>
      <div className={`hc9-card ${scroll ? "hc9-card-display" : ""}`}>
        <img src={bg_image} alt="" />
      </div>
    </a>
  );
};


const HC9 = (props) => {
  const cards = props.card;
  const scroll = props.scroll;
  return (
    <>
      {cards.map((card, id) => {
        return <Card key={id} card={card} scroll={scroll} />;
      })}
    </>
  );
}

export default HC9
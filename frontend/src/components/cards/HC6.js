import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./styles/hc6.css";

const HC6 = (props) => {
  const card = props.card,
    scroll = props.scroll;

  // title
  const { title } = card;

  // URL
  const { url } = card;

  // icon
  const { icon } = card;
  return (
    <>
      <a href={url}>
        <div className={`hc6-card ${scroll ? "hc6-card-display" : ""}`}>
          <img src={icon.image_url} alt="" className="hc6card-icon" />
          <p className="hc6card-title">{title}</p>
          <div className="hc6card-arrow">
            <IoIosArrowForward />
          </div>
        </div>
      </a>
    </>
  );
};

export default HC6;

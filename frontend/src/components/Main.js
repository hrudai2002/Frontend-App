import React, { useState, useEffect } from "react";

// importing cards...
import HC1 from "./cards/HC1";
import HC3 from "./cards/HC3";
import HC5 from "./cards/HC5";
import HC6 from "./cards/HC6";
import HC9 from "./cards/HC9";

import axios from "axios";
import "./styles/main.css";

const Main = () => {
  // Different Cards
  const hc1 = {
    card: [],
    scroll: false,
  };
  const hc3 = {
    card: [],
    scroll: false,
  };
  const hc5 = {
    card: [],
    scroll: false,
  };
  const hc6 = {
    card: [],
    scroll: false,
  };
  const hc9 = {
    card: [],
    scroll: false,
  };

  

  useEffect(() => {

    // Storing data from the API
    const setData = (apiData) => {
      apiData.card_groups.forEach((card) => {
        const { cards, is_scrollable } = card;
        if (card.design_type === "HC1") {
          hc1.card.push(cards);
          hc1.scroll = is_scrollable;
        }
        if (card.design_type === "HC3") {
          hc3.card.push(cards);
          hc3.scroll = is_scrollable;
        }
        if (card.design_type === "HC5") {
          hc5.card.push(cards);
          hc5.scroll = is_scrollable;
        }
        if (card.design_type === "HC6") {
          hc6.card.push(cards);
          hc6.scroll = is_scrollable;
        }
        if (card.design_type === "HC9") {
          hc9.card.push(cards);
          hc9.scroll = is_scrollable;
        }
      });
    };

    // Fetching data from API
    const getData = async () => {
      await axios
        .get("https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17")
        .then((res) => {
          setData(res.data);
        });
    };
    getData();
  }, []);

  console.log(hc6);
  return (
    <div className="main">
      {/* HC3 Card */}
      {/* {hc3 && (
        <div className={hc3.scroll ? "scrolling-wrapper" : ""}>
          {hc3.card.map((card, id) => {
            return <HC3 key={id} card={card} scroll={hc3.scroll} />;
          })}
        </div>
      )} */}

      {/* HC6 Card */}
      {/* {hc6 && (
        <div className={hc6.scroll ? "scrolling-wrapper" : ""}>
          {hc6.card.map((card, id) => {
            return <HC6 key={id} card={card} scroll={hc6.scroll} />;
          })}
        </div>
      )} */}

      {/* HC5 Card */}
      {/* {hc5 && (
        <div className={hc5.scroll ? "scrolling-wrapper" : ""}>
          {hc5.card.map((card, id) => {
            return <HC5 key={id} card={card} scroll={hc5.scroll} />;
          })}
        </div>
      )} */}
    </div>
  );
};

export default Main;

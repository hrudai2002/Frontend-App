import React, { useState, useEffect } from "react";

// Importing Cards
import HC1 from "./cards/HC1";
import HC3 from "./cards/HC3";
import HC5 from "./cards/HC5";
import HC6 from "./cards/HC6";
import HC9 from "./cards/HC9";

import axios from "axios";
import "./styles/main.css";

const Main = () => {
  // useState that stores data of different cards
  const [hc1, setHc1] = useState([]);
  const [hc3, setHc3] = useState([]);
  const [hc5, setHc5] = useState([]);
  const [hc6, setHc6] = useState([]);
  const [hc9, setHc9] = useState([]);

  useEffect(() => {
    const setData = (apiData) => {
      // Cleaning the data to remove the duplicate data
      setHc1([]);
      setHc3([]);
      setHc5([]);
      setHc6([]);
      setHc9([]);

      // Storing the data in the useState Hook
      apiData.card_groups.forEach((cardData) => {
        if (cardData.design_type === "HC1") {
          setHc1((card) => [...card, [cardData.cards, cardData.is_scrollable]]);
        } else if (cardData.design_type === "HC3") {
          setHc3((card) => [...card, [cardData.cards, cardData.is_scrollable]]);
        } else if (cardData.design_type === "HC5") {
          setHc5((card) => [...card, [cardData.cards, cardData.is_scrollable]]);
        } else if (cardData.design_type === "HC6") {
          setHc6((card) => [...card, [cardData.cards, cardData.is_scrollable]]);
        } else if (cardData.design_type === "HC9") {
          setHc9((card) => [...card, [cardData.cards, cardData.is_scrollable]]);
        }
      });
    };

    // Fetching data from the API
    const getData = async () => {
      await axios
        .get("https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17")
        .then((res) => {
          setData(res.data);
        });
    };
    getData();
  }, []);

  return (
    <>
      <div className="main">
          {/* HC3 Card */}
          {hc3 &&
            hc3.map((card, id) => {
              return (
                <div
                  key={id}
                  className={card[1] ? "scrolling-wrapper" : "no-scrolling"}
                >
                  <HC3 card={card[0]} scroll={card[1]} />
                </div>
              );
            })}

          {/* HC6 Card */}
          {hc6 &&
            hc6.map((card, id) => {
              return (
                <div
                  key={id}
                  className={card[1] ? "scrolling-wrapper" : "no-scrolling"}
                >
                  <HC6 card={card[0]} scroll={card[1]} />
                </div>
              );
            })}

          {/* HC5 Card */}
          {hc5 &&
            hc5.map((card, id) => {
              return (
                <div
                  key={id}
                  className={card[1] ? "scrolling-wrapper" : "no-scrolling"}
                >
                  <HC5 card={card[0]} scroll={card[1]} />
                </div>
              );
            })}

          {/* HC9 Card */}
          {hc9 &&
            hc9.map((card, id) => {
              return (
                <div
                  key={id}
                  className={card[1] ? "scrolling-wrapper" : "no-scrolling"}
                >
                  <HC9 card={card[0]} scroll={card[1]} />
                </div>
              );
            })}
          {/* HC1 Card */}
          {hc1 &&
            hc1.map((card, id) => {
              return (
                <div
                  key={id}
                  className={card[1] ? "scrolling-wrapper" : "no-scrolling"}
                >
                  <HC1 card={card[0]} scroll={card[1]} />
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Main;

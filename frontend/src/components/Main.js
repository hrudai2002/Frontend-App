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
  // Different Cards
  const [hc1, setHc1] = useState([]);
  const [hc3, setHc3] = useState([]);
  const [hc5, setHc5] = useState([]);
  const [hc6, setHc6] = useState([]);
  const [hc9, setHc9] = useState([]);
  
   const [scrollHc1, setScrollHc1] = useState(false);
   const [scrollHc3, setScrollHc3] = useState(false);
   const [scrollHc5, setScrollHc5] = useState(false);
   const [scrollHc6, setScrollHc6] = useState(false);

  useEffect(() => {
    const setData = (apiData) => {
      // Storing the data
      apiData.card_groups.forEach((cardData) => {
        if (cardData.design_type === "HC1") {
          setHc1((card) => [...card, cardData.cards]);
          setScrollHc1(cardData.is_scrollable);
        }
        else if (cardData.design_type === "HC3") {
          setHc3((card) => [...card, cardData.cards]);
          setScrollHc3(cardData.is_scrollable);
        }
        else if (cardData.design_type === "HC5") {
          setHc5(card => [...card, cardData.cards]);
          setScrollHc5(cardData.is_scrollable);
        }
        else if (cardData.design_type === "HC6") {
          setHc6((card) => [...card, cardData.cards]);
          setScrollHc6(cardData.is_scrollable);
        }
        else if (cardData.design_type === "HC9")
          setHc9((card) => [...card, cardData.cards]);
      });
    };

    // Fetching data from the API
    const getData = async () => {
      await axios
        .get("https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17")
        .then((res) => {
          setData(res.data);
        }) 
    };
    getData();
  }, []);

  return (
    <div className="main">
      
      {/* HC3 Card */}
      {hc3 && (
        <div className={scrollHc3 ? "scrolling-wrapper" : ""}>
          {hc3.map((card, id) => {
            return <HC3 key={id} card={card} scroll={scrollHc3} />;
          })}
        </div>
      )}

      {/* HC6 Card */}
      {hc6 && (
        <div className={scrollHc6 ? "scrolling-wrapper" : ""}>
          {hc6.map((card, id) => {
            return <HC6 key={id} card={card} scroll={scrollHc6} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Main;

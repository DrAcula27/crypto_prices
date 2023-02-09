import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  let { symbol } = useParams();

  const [selectedCoin, setSelectedCoin] = useState(null);

  // useRef -> variable that will hold its value between renders
  let isFirstRender = useRef(true);
  useEffect(() => {
    console.log("useEffect running");
    if (isFirstRender.current) {
      isFirstRender.current = false;
      console.log("calling API");
    }
  }, []);

  return (
    <div className="page-container">
      <h1>{symbol}</h1>
    </div>
  );
};

export default Coin;

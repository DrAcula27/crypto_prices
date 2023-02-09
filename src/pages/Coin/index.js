import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Coin = () => {
  let { symbol } = useParams();

  const [coinData, setCoinData] = useState(null);

  // useRef -> variable that will hold its value between renders
  let isFirstRender = useRef(true);
  useEffect(() => {
    // move api call to server later
    const makeApiCall = async () => {
      let response = await axios(
        `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${process.env.REACT_APP_API_KEY}`
      );
      setCoinData(response.data);
    };
    if (isFirstRender.current) {
      isFirstRender.current = false;
      console.log("calling API");
      makeApiCall();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page-container">
      <h1>{symbol}</h1>
      {coinData === null ? <div>loading...</div> : <div>${coinData.rate}</div>}
    </div>
  );
};

export default Coin;

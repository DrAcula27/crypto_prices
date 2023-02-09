import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Currencies = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line
  const [currencies, setCurrencies] = useState([
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ]);

  const handleClick = (coinSymbol) => {
    navigate(`/coin/${coinSymbol}`);
  };

  let coinList = currencies.map((coin) => {
    return (
      <li key={JSON.stringify(coin)} onClick={() => handleClick(coin.symbol)}>
        {coin.name}
      </li>
    );
  });

  return (
    <div className="page-container">
      <h1>Currencies Page</h1>
      <ul id="coin-ul">{coinList}</ul>
    </div>
  );
};

export default Currencies;

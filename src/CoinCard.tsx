import { Coin } from "./App";
import "./CoinCard.css";

type Props = {
  coin: Coin;
};

function CoinCard({ coin }: Props) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img className="coin-image" src={coin.image} alt="" />
          <h2 className="coin-name">{coin.name}</h2>
          <h3 className="coin-symbol">{coin.symbol}</h3>
        </div>
        <div className="coin-data">
          <p className="coin-price">{coin.current_price}</p> 
          <p className="coin-volume">{coin.market_cap_change_24h.toFixed(2)}</p>
          {coin.market_cap_change_percentage_24h < 0 ? (
            <p className="coin-percent red">
              {coin.market_cap_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {coin.market_cap_change_percentage_24h.toFixed(2)}%
            </p>
          )}
          <p className="coin-marketcap">Mkt Cap: Rs.{coin.market_cap}</p>
        </div>
      </div>
    </div>
  );
}

export default CoinCard;

import { useEffect, useState } from "react";
import "./App.css";
import CoinCard from "./CoinCard";
import Header from "./Header";

export type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
};

function App() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((resp) => resp.json())
      .then((coinsFromApi) => setCoins(coinsFromApi));
  }, []);

  return (
    <div className="App">
      <Header />
      {coins.map(coin => 
        <CoinCard key={coin.id} coin= {coin}/>
        )}
    </div>
  )
  
}

export default App;
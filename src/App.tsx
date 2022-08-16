import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { PageNotFound } from "./Pages/PageNotFound";
import SignUp from "./Pages/SignUp";

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
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((resp) => resp.json())
      .then((coinsFromApi) => setCoins(coinsFromApi));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const decresingCoins = [...filteredCoins].sort(
    (a, b) => b.current_price - a.current_price
  );

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <Home setSearch={setSearch} decresingCoins={decresingCoins} />
          }
        />
        <Route path="/signUp" element={<SignUp />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

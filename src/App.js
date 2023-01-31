import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./components/Coin";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Coins from "./routs/Coins";


function App() {
  const [coins, setCoins] = useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coin coins={coins}></Coin>} />
        <Route path="/coin" element={<Coins />} >
          <Route path=":coinID" element={<Coins />}/>
        </Route>
      </Routes>


    </div>
  );
}

export default App;

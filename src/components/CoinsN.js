import React, { useState } from "react"
import CoinItem from "./CoinItem"
import Coin from "../routes/Coin"
import { Link } from "react-router-dom"
// import CoinSearch from "./CoinSearch"

import "./Coins.css"

const Coins = (props) => {
  const [search, setSearch] = useState("")

  return (
    <div className="container">
      <div>
        <input
          className="coin-search"
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for a coin"
        />
      </div>
      {props.coins
        .filter((coin) => {
          if (search === "") {
            return coin
          } else {
            return coin.name.toLowerCase().includes(search.toLowerCase())
          }
        })
        .map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          )
        })}
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Coins

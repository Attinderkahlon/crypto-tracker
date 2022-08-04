import React, { useState, useEffect } from "react"
import CoinItem from "./CoinItem"
import Coin from "../routes/Coin"
import { Link } from "react-router-dom"
import axios from "axios"
// import ReactPaginate from "react-paginate"

// import CoinSearch from "./CoinSearch"

import "./Coins.css"

const Coins = (props) => {
  const [search, setSearch] = useState()
  const [coins, setCoins] = useState([])
  // const [currentPage, setCurrentPage] = useState(1)
  // const [perPage, setPerPage] = useState(10)
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=20&page=1&sparkline=false&query=${search}`

  const searchUrl = `https://api.coingecko.com/api/v3/search?per_page=20&query=${search}`

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const getCoins = (urlString) => {
    axios
      .get(urlString)
      .then((res) => {
        setCoins(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const getSearchedCoins = (urlString) => {
    axios
      .get(urlString)
      .then((res) => {
        setCoins(res.data.coins)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getCoins(url)
    console.log("COINS", coins)
  }, [url])

  useEffect(() => {
    search && getSearchedCoins(searchUrl)
  }, [search])

  return (
    <div className="container">
      <div>
        <input
          className="coin-search"
          onChange={handleChange}
          type="text"
          placeholder="Search for a coin"
        />
      </div>
      <div className="heading">
        <p>#</p>
        <p className="coin-name">Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Mkt Cap</p>
      </div>

      {coins
        // .filter((coin) => {
        //   if (search === "") {
        //     return coin
        //   } else {
        //     return coin.name.toLowerCase().includes(search.toLowerCase())
        //   }
        // })
        .map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          )
        })}
    </div>
  )
}

export default Coins

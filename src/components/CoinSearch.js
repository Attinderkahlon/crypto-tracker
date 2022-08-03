import axios from "axios"
import React from "react"
import "./CoinSearch.css"
import { useState, useEffect } from "react"

const CoinSearch = () => {
  const [search, setSearch] = useState()
  const [coins, setCoins] = useState([])

  const url = `https://api.coingecko.com/api/v3/search?query=${search}`

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const getCoins = () => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getCoins()
  }, [])

  return (
    <div>
      <input
        className="coin-search"
        onChange={handleChange}
        type="text"
        placeholder="Search for a coin"
      />
      <button onClick={getCoins}>Search</button>
      {coins && <p>{coins.name}</p>}
    </div>
  )
}

export default CoinSearch

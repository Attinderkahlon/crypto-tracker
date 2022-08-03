import React from "react"
import { FaCoins } from "react-icons/fa"
import { Link } from "react-router-dom"
import CoinSearch from "./CoinSearch"
import "./Navbar.css"

const Navbar = () => {
  return (
    <Link to="/" className="navbar">
      <FaCoins className="icon" />
      <h1>
        Coin <span className="purple">Search</span>
      </h1>
      <CoinSearch />
    </Link>
  )
}

export default Navbar

// import axios from "axios"
// import React from "react"
// import "./CoinSearch.css"
// import { useState, useEffect } from "react"

// const CoinSearch = () => {
//   const [search, setSearch] = useState()
//   const [coins, setCoins] = useState([])

//   const url = `https://api.coingecko.com/api/v3/search?query=${search}`

//   const handleChange = (e) => {
//     setSearch(e.target.value)
//   }
//   const getCoins = () => {
//     axios
//       .get(url)
//       .then((res) => {
//         setCoins(res.data)
//         console.log(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }

//   useEffect(() => {
//     getCoins()
//   }, [])

//   return (
//     <div>
//       <input
//         className="coin-search"
//         onChange={handleChange}
//         type="text"
//         placeholder="Search for a coin"
//       />
//       <button onClick={getCoins}>Search</button>

//       {Object.values(coins)
//         .filter((coin) => {
//           if (search === "") {
//             return coin
//           } else {
//             return coin.name.toLowerCase().includes(search.toLowerCase())
//           }
//         })
//         .map((coin) => {
//           return (
//             <div className="coin-row" key={coin.id}>
//               <p>{coin.market_cap_rank}</p>
//               <div className="img-symbol">
//                 <img src={coin.image} alt="" />
//                 <p>{coin.symbol.toUpperCase()}</p>
//               </div>
//               <p>${coin.current_price.toLocaleString()}</p>
//               <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
//               <p className="hide-mobile">
//                 ${coin.total_volume.toLocaleString()}
//               </p>
//               <p className="hide-mobile">${coin.market_cap.toLocaleString()}</p>
//             </div>
//           )
//         })}
//     </div>
//   )
// }
// export default CoinSearch

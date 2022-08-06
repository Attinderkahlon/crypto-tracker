import AreaSplineChart from "../components/charts/AreaSplineChart"
import { useParams } from "react-router-dom"
// import { Coin } from "../utils/types"
import axios from "axios"
import {
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react"
import Loader from "../components/Loader"

const CoinDetail = () => {
  const params = useParams()
  const [coin, setCoin] = useState<any>()

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect(() => {
    axios
      .get(url.toLowerCase())
      .then((res) => {
        setCoin(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [url])

  return (
    <div className="h-full w-full bg-gray-900 ">
      <h1 >Coin Detail</h1>
      {!coin ? (
          <Loader />
        ) : (
          <div className="mx-auto max-w-6xl px-4">
                {coin.image && <img src={coin.image} alt="" />}
                <p>{coin.name}</p>
                {coin.symbol && <p>{coin.symbol.toUpperCase()}</p>}
                {coin.market_data?.current_price && (
                  <h1>${coin.market_data.current_price.aud.toLocaleString()}</h1>
                )}
           </div>)}
           {/* <AreaSplineChart /> */}
      </div>
 
  )
}
export default CoinDetail

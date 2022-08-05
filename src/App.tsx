import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";

function App() {
  // const [coins, setCoins] = useState([])

  // const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=20&page=1&sparkline=false
  // `

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => setCoins(res.data))

  //     .catch((err) => {
  //       console.log(err.message)
  //     })
  // }, [url])

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;

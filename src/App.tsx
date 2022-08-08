import { Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import NotFound from "./pages/NotFound";
import FuturePrices from "./pages/FuturePrices";
import CoinDetail from "./pages/CoinDetail";
import Body from "./components/layouts/Body";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="mx-auto w-full max-w-6xl px-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/futureprices" element={<FuturePrices />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/:coinId" element={<CoinDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

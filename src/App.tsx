import { Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import CoinDetail from "./pages/CoinDetail";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:coin" element={<CoinDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import CoinDetail from "./pages/CoinDetail";
import Body from "./components/layouts/Body";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div className="mx-auto w-full max-w-6xl px-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/:coinId" element={<CoinDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

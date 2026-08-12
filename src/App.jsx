import { Routes, Route  } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
     <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
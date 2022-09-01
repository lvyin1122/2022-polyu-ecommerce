import ProductsContainer from "./containers/Products";
import ProductDetail from "./containers/detail/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import Cart from "./containers/cart/Cart";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<ProductsContainer />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

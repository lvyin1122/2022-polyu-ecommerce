import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./store/CartProvider";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Products from "./containers/products/Products";
import ProductDetail from "./containers/detail/ProductDetail";
import Cart from "./containers/cart/Cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<Products />} />
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

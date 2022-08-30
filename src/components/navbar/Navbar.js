import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const Navbar = () => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  return (
    <nav className="navbar">
      <div className="navContainer">
        <Link to="/" className="logo">
          iBookStore
        </Link>
        <Link className="cart" to="/cart">
          Cart ({items.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "../../components/cart/CartItem";
import "./Cart.css";

const Cart = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  useEffect(() => {
    if (items.length >= 1) {
      setIsCartEmpty(false);
    } else {
      setIsCartEmpty(true);
    }
  }, [items]);

  const cartList = items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      author={item.author}
      price={item.price}
      imgSrc={item.img}
    />
  ));

  return (
    <div className="cartContainer">
      <ul className="cartList">
        <h1 className="cartHeading">Shopping Cart</h1>
        {isCartEmpty && <>Your cart is empty.</>}
        {!isCartEmpty && cartList}
      </ul>
    </div>
  );
};

export default Cart;

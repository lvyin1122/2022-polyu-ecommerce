import CartContext from "./cart-context";
import { useState } from "react";

// Define initial state for cart items
const initialCartState = {
  items: [],
};

// Define CartProvider component
const CartProvider = (props) => {
  // Apply useState hook to update the state of the cart
  const [cartState, setCart] = useState(initialCartState);

  // Define the behaviour of the three handler with setCart()
  const addItemToCartHandler = (item) => {
    setCart(
      (prevCart) => ({
      items: prevCart.items.concat(item),
    }));
  };

  const removeItemHandler = (id) => {
    setCart((prevCart) => ({
      items: prevCart.items.filter((item) => item.id !== id),
    }));
  };

  const clearCartHandler = () => {
    setCart(initialCartState);
  };

  // Create cart context and with the item state and functions
  const cartContext = {
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

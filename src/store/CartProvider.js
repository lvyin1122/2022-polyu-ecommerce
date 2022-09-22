import CartContext from "./cart-context";
import { useReducer } from "react";

// Define initial state for cart items
const initialCartState = {
  items: [],
}

// Define reducer for different action on shopping cart
// The reducer will execute custom logic to the state according to the action type
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.item.id).concat(action.item),
      };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "CLEAR":
      return {
        ...state,
        items: initialCartState,
      }
    default:
      return state;
  }
};

// Define CartProvider component
const CartProvider = (props) => {
  // Define current cart state and dispatch function with useReducer
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  // The handler function will pass the action to the reducer function
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  // Create cart context and pass it with the provider
  const cartContext = {
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import React from "react";
import "./CartItem.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const removeHandler = () => {
    cartCtx.removeItem(props.id);
  };

  return (
    <li className="cartItem">
      <Link to={`/product/${props.id}`} className="cartItemImgLink">
        <img className="cartItemImg" src={props.imgSrc} alt=""/>
      </Link>
      <div className="cartItemCenter">
        <Link to={`/product/${props.id}`} className="cartItemName">
          <h3>{props.name}</h3>
        </Link>
        <p>By {props.author}</p>
      </div>
      <div className="cartItemRight">
        <span>${props.price}</span>
        <span className="cartItemRemove" onClick={removeHandler}>
          Remove
        </span>
      </div>
    </li>
  );
};

export default CartItem;

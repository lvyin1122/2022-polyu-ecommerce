import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Item = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      imgSrc: props.imgSrc,
      author: props.author,
      amount: 1,
    });
  };

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img className="itemImage" src={props.imgSrc} alt="" />
      </Link>
      <div className="info">
        <Link to={`/product/${props.id}`} className="itemName">
          {props.name}
        </Link>
        <div className="infoBottom">
          <div className="infoLeft">
            <span className="author">{props.author}</span>
            <span className="price">{price}</span>
          </div>
          <button className="infoRight" onClick={addToCartHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

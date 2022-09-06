import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

const Item = (props) => {
  const [btnClicked, setBtnClicked] = useState(false);
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    if (btnClicked) {
      cartCtx.removeItem(props.id);
      setBtnClicked(false);
    } else {
      cartCtx.addItem({
        id: props.id,
        name: props.title,
        price: props.price,
        img: props.imgSrc,
        author: props.author,
        amount: 1,
      });
      setBtnClicked(true);
    }
  };

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img className="itemImage" src={props.imgSrc} alt=""/>
      </Link>
      <div className="info">
        <Link to={`/product/${props.id}`} className="itemTitle">
          {props.title}
        </Link>
        <div className="infoBottom">
          <div className="infoLeft">
            <span className="author">{props.author}</span>
            <span className="price">{price}</span>
          </div>
          <button className="infoRight" onClick={addToCartHandler}>
            {btnClicked ? "Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

import React from "react";
import "./Item.css"

const Item = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className="item">
      <img className="itemImage" src={props.imgSrc} />
      <div className="info">
        <h3 className="itemTitle">{props.title}</h3>
        <span className="author">{props.author}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default Item;

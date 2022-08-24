import React from "react";
import "./Item.css"

const Item = () => {
  return (
    <div className="item">
      <img src="https://cdn.thenewstack.io/media/2022/05/600b72f9-react-1024x680.png" />
      <div className="info">
        <h3>React 101 - From Beginner to Expert</h3>
        <span className="author">John Doe</span>
        <span className="price">$9.99</span>
      </div>
    </div>
  );
};

export default Item;

import React from "react";
import "./Products.css";
import Item from "../components/item/Item";

const Products = () => {
  return (
    <div className="products">
      <div className="productsContainer">
        <h1>Top Sellers</h1>
        <div className="boxContainer">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
      </div>
    </div>
  );
};

export default Products;

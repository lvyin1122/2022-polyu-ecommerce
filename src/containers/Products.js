import React from "react";
import "./Products.css";
import Item from "../components/item/Item";
import Hero from "../components/hero/Hero";
import data from "../dummyData";

const Products = () => {
  const productsList = data.map((data) => (
    <Item
      key={data._id}
      id={data._id}
      title={data.title}
      author={data.author}
      price={data.price}
      imgSrc={data.imgSrc}
    />
  ));

  return (
    <div className="products">
      <div className="productsContainer">
        <Hero />
        <h1 id="title-1">Top Sellers</h1>
        <div className="boxContainer">{productsList}</div>
      </div>
    </div>
  );
};

export default Products;

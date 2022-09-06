import React from "react";
import "./Products.css";
import Item from "../components/item/Item";
import Carousel from "../components/carousel/Carousel";
import allData from "../dummyData";
import PaginationBasic from "../components/pagination/Pagination";
import { useState } from "react";

const Products = () => {
  const limit = 6;
  const [page, setPage] = useState(1);
  const numPages = Math.ceil(allData.length / limit);

  const start = 0 + (page - 1) * limit;
  const data = allData.slice(start, start + limit);

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
        {/* <Hero /> */}
        <Carousel />
        <h1 id="title-1">Top Sellers</h1>
        <div className="boxContainer">{productsList}</div>
        <PaginationBasic
          active={page}
          numPages={numPages}
          setActive={setPage}
        />
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import "./Products.css";
import Item from "../components/item/Item";
import Hero from "../components/hero/Hero";

const data = [
  {
    _id: 0,
    title: "React: From Beginner to Expert",
    author: "John Doe",
    price: 9.99,
    imgSrc:
      "https://cdn.thenewstack.io/media/2022/05/600b72f9-react-1024x680.png",
  },
  {
    _id: 1,
    title: "Neural Networks from Scratch",
    author: "John Smith",
    price: 9.99,
    imgSrc:
      "https://7wdata.be/wp-content/uploads/2020/11/What-is-an-Artificial-Neural-Networks.png",
  },
  {
    _id: 2,
    title: "JavaScript: The Complete Guide",
    author: "Stephen Lee",
    price: 9.99,
    imgSrc:
      "https://repository-images.githubusercontent.com/229449376/3cfde400-5298-11ea-9f39-aab161ef8f69",
  },
  {
    _id: 3,
    title: "NodeJS Bootcamp",
    author: "John Doe",
    price: 9.99,
    imgSrc:
      "https://www.hkcodingclub.com/wp-content/uploads/2022/02/share-nodejs-logo-1024x536.png",
  },
  {
    _id: 4,
    title: "The Complete iOS Development Bootcamp",
    author: "John Doe",
    price: 9.99,
    imgSrc:
      "https://miro.medium.com/max/730/1*ND2d6CvH-Cz0dp5I_tYalQ.png",
  },
];

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

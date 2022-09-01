import React from "react";
import data from "../../dummyData";
import { useParams} from "react-router-dom";
import "./ProductDetail.css";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";

const ProductDetail = () => {
  const params = useParams();
  const { productId } = params;
  const detail = data[productId];

const [btnClicked, setBtnClicked] = useState(false);
    const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    if (btnClicked) {
      cartCtx.removeItem(detail._id);
      setBtnClicked(false);
    } else {
      cartCtx.addItem({
        id: detail._id,
        name: detail.title,
        price: detail.price,
        img: detail.imgSrc,
        author: detail.author,
        amount: 1,
      });
      setBtnClicked(true);
    }
  };

  return (
    <div className="detail">
      <div className="detailContainer">
        <div className="productDetail">
          <div className="productDetailLeft">
            <div className="productDetailLeftTop">
              <h2>{detail.title}</h2>
              <p>{detail.author}</p>
              <p>{detail.price}</p>
            </div>
            <div className="productDetailLeftBottom">
              <button className="detailButton" onClick={addToCartHandler}>
                {btnClicked ? "Added" : "Add to cart"}
              </button>
            </div>
          </div>
          <img className="detailImg" src={detail.imgSrc} alt=""/>
        </div>
        <div>
          <h3>Introduction</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Structure</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

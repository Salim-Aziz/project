import React from "react";
import "./CardMainPage.css";
import { Link } from "react-router-dom";

const CardMainPage = (props) => {
  return (
    <>
      <div className="product-box">
        <Link style={{ textDecoration: "none" }} to="/product">
          <img src={props.image} alt="" />
          <div className="discription">
            <h2>{props.name}</h2>
            <p className="price">
              {props.dis_price}
              <span>{props.price}</span>
            </p>
            <p className="para"></p>
          </div>
        </Link>
        <Link to="/Cart">
          {" "}
          <button className="addtocart">Add to Cart</button>
        </Link>
      </div>
    </>
  );
};

export default CardMainPage;

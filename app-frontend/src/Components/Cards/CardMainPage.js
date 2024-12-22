import React from "react";
import "./CardMainPage.css";

const CardMainPage = (props) => {
  return (
    <>
      <div className="product-box">
        <img src={props.image} alt="" />
        <div className="discription">
          <h2>{props.name}</h2>
          <p className="price">
            {props.dis_price}
            <span>{props.price}</span>
          </p>
          <p className="para"></p>
          <button className="btn">BUY NOW</button>
        </div>
      </div>
    </>
  );
};

export default CardMainPage;

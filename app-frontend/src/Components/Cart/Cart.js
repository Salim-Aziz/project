import React from "react";
// import { Link } from "react-router-dom";
import pic from "../../Images/header.jpg";

import "./Cart.css";
function Cart() {
  return (
    <>
      <div className="cart-items">
        <div className="cartitems-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cartitems-format">
          <img src="" className="producticon" alt="" />
          <p></p>
          <p></p>
          <button className="cartitems-quantity"></button>
          <p></p>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Cart;

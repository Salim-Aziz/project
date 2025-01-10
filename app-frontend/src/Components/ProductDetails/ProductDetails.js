import React from "react";
import product_1 from "../../Images/p1.jpeg";
import "./ProductDetails.css";
function ProductDetails() {
  return (
    <>
      <div className="product-page">
        <div className="img-container">
          <img src={product_1} alt="" />
        </div>
        <div className="product-detail">
          <h1>NOTEBOOK</h1>
          <p>
            Premium Quality Notebook 80 lined pages Each. Size: 5.5 inches x
            8.15 <br /> inches Premium Quality Paper 80 Gsm.
          </p>
          <h2>Price</h2>
          <div className="product-prices">
            <div className="old-price">$500</div>
            <div className="new-price">$400</div>
          </div>

          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;

// import "./Card.css";
import React from "react";
import { useEffect, useState } from "react";
import CardMainPage from "./CardMainPage";
// import NoteBook from "../../Images/p1.jpeg";
// import Pouch from "../../Images/p2.jpeg";
// import Triangles from "../../Images/p3.jpeg";
// import Calculator from "../../Images/p4.jpeg";
// import Color_Pens from "../../Images/p5.jpeg";
// import Pencils from "../../Images/p6.jpeg";
// import Pens from "../../Images/p7.jpeg";
// import Highlighter from "../../Images/p8.jpeg";
// import Clips from "../../Images/p9.jpeg";
// import Mini_Stapler from "../../Images/p10.jpeg";
// import Sticky_Notes from "../../Images/p11.jpeg";
// import Tape from "../../Images/p12.jpeg";
export const Card = ({ products }) => {
  console.log("these are product coming from Card.js file:", products);
  return (
    <>
      <div className="product_heading"> PRODUCTS </div>
      <div className="product">
        {products.map((product) => (
          <CardMainPage
            key={product._id}
            _id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default Card;

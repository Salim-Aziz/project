// import "./Card.css";
import React from "react";
import { useEffect, useState } from "react";
import CardMainPage from "./CardMainPage";
import NoteBook from "../../Images/p1.jpeg";
import Pouch from "../../Images/p2.jpeg";
import Triangles from "../../Images/p3.jpeg";
import Calculator from "../../Images/p4.jpeg";
import Color_Pens from "../../Images/p5.jpeg";
import Pencils from "../../Images/p6.jpeg";
import Pens from "../../Images/p7.jpeg";
import Highlighter from "../../Images/p8.jpeg";
import Clips from "../../Images/p9.jpeg";
import Mini_Stapler from "../../Images/p10.jpeg";
import Sticky_Notes from "../../Images/p11.jpeg";
import Tape from "../../Images/p12.jpeg";
export const Card = ({ products }) => {
  console.log("these are product coming from Card.js file:", products);
  return (
    <>
      <div className="product_heading"> PRODUCTS </div>
      <div className="product">
        {products.map((product) => (
          <CardMainPage
            key={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}

        {/* <CardMainPage
          image={NoteBook}
          name="NoteBook"
          dis_price="$5.0"
          price="$6.0"
        />
        <CardMainPage
          image={Pouch}
          name="Pouch"
          dis_price="$8.0"
          price="$10.0"
        />
        <CardMainPage
          image={Triangles}
          name="Triangles"
          dis_price="$2.0"
          price="$4.0"
        />
        <CardMainPage
          image={Calculator}
          name="Calculator"
          dis_price="$11.0"
          price="$14.0"
        />
        <CardMainPage
          image={Color_Pens}
          name="Color Pens"
          dis_price="$1.0"
          price="$1.2"
        />
        <CardMainPage
          image={Pencils}
          name="Pencils"
          dis_price="$7.0"
          price="$8.0"
        />
        <CardMainPage image={Pens} name="Pens" dis_price="$4.0" price="$5.0" />
        <CardMainPage
          image={Highlighter}
          name="Highlighter"
          dis_price="$3.0"
          price="$4.0"
        />
        <CardMainPage
          image={Clips}
          name="Clips"
          dis_price="$2.0"
          price="$3.0"
        />
        <CardMainPage
          image={Mini_Stapler}
          name="Mini Stapler"
          dis_price="$8.0"
          price="$9.0"
        />
        <CardMainPage
          image={Sticky_Notes}
          name="Sticky Notes"
          dis_price="$2.0"
          price="$3.0"
        />
        <CardMainPage image={Tape} name="Tape" dis_price="$1.0" price="$1.2" /> */}

        {/* <CardMainPage image={NoteBook}/> */}
      </div>
    </>
  );
};

export default Card;

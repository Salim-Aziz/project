// import "./Card.css";
import React from "react";
import CardMainPage from "./CardMainPage";
import NoteBook from "../../Images/notebook.jpg";
import Pen from "../../Images/pen1.jpg";
import Pencil from "../../Images/pencil1.jpg";
import colors from "../../Images/card2.jpeg";
import notebook1 from "../../Images/notebook1.jpeg";
import stickynotes from "../../Images/card3.jpeg";

export const Card = () => {
  return (
    <>
      <div className="product_heading">PRODUCTS</div>
      <div className="product">
        <CardMainPage
          image={NoteBook}
          name="NoteBook"
          dis_price="$500"
          price="$600"
        />
        <CardMainPage image={Pen} name="PEN" dis_price="$500" price="$600" />
        <CardMainPage
          image={colors}
          name="COLORS"
          dis_price="$500"
          price="$600"
        />
        <CardMainPage
          image={notebook1}
          name="NOTEBOOK"
          dis_price="$500"
          price="$600"
        />
        <CardMainPage
          image={stickynotes}
          name="STICKY NOTES"
          dis_price="$150"
          price="$170"
        />
        <CardMainPage image={Pen} name="PEN" dis_price="$500" price="$600" />
        <CardMainPage image={Pen} name="PEN" dis_price="$500" price="$600" />
        <CardMainPage image={Pen} name="PEN" dis_price="$500" price="$600" />
        <CardMainPage image={Pen} name="PEN" dis_price="$500" price="$600" />
        <CardMainPage image={Pen} name="PEN" dis_price="$500" price="$600" />
        <CardMainPage image={Pen} name="PEN" dis_price="$500" price="$600" />
        <CardMainPage
          image={Pencil}
          name="PENCIL"
          dis_price="$500"
          price="$600"
        />
        {/* <CardMainPage image={NoteBook}/> */}
      </div>
    </>
  );
};

export default Card;

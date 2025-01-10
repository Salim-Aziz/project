import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useCart } from "../Cart/cartContext"; // Import the useCart hook

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addToCart } = useCart(); // Get addToCart function from context

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product-page">
        <div className="img-container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>Price</h2>
          <div className="product-prices">
            <div className="new-price">${product.price}</div>
          </div>

          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;

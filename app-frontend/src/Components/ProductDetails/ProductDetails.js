import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8181/api/v1/products/${id}`)
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

          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;

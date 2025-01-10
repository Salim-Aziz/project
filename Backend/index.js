import express from "express";
import mongoose from "mongoose";
import Product from "./Models/productModel.js";
import cors from "cors";

// var cors = require("cors");

const app = express();
app.use(express.json()); // To parse JSON request bodies

const mongoURI = "mongodb://127.0.0.1:27017/my-DB"; // Replace with your MongoDB connection string

mongoose
  .connect(mongoURI, {})
  .then(async () => {
    console.log("Connected to MongoDB");

    // Create a static product
    const staticProduct = {
      name: "Tape",
      image: "http://localhost:8080/public/images/p12.jpeg",
      price: 25.0,
      description:
        "Unleash your creativity with this set of vibrant washi tapes! Featuring a variety of colors and patterns, these tapes are perfect for adding a touch of personality to your planners, journals, and other craft projects. The tapes are easy to tear and reposition, making them perfect for any DIY project.",
    };

    try {
      // Check if the product already exists to avoid duplicates
      const existingProduct = await Product.findOne({
        name: staticProduct.name,
      });

      if (!existingProduct) {
        const newProduct = new Product(staticProduct);
        const savedProduct = await newProduct.save();
        console.log("Static product created:", savedProduct);
      } else {
        console.log("Static product already exists in the database.");
      }
    } catch (error) {
      console.error("Error adding static product:", error);
    }
  })
  .catch((error) => console.error("MongoDB connection error:", error));

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from this origin (e.g., your frontend)
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Serve static files
app.use("/public", express.static("public"));

// API to get the names
const api = "/api/v1/products";

// GET All Products
app.get(`${api}/all`, cors(corsOptions), async (req, res, next) => {
  try {
    const products = await Product.find({}); // Fetch all products
    res.status(200).json(products); // Return the products as JSON
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get(api, (req, res, next) => {
  res.json(["Watch", "shoes", "shirt"]);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is runnig at port : ${PORT}`);
  console.log("new changes addded");
});

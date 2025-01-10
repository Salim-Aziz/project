import express from "express";
import mongoose from "mongoose";
import Product from "./Models/productModel.js";
import cors from "cors";
import bodyParser from "body-parser";
import Order from "./Models/Order.js";

// var cors = require("cors");

const app = express();
app.use(express.json()); // To parse JSON request bodies
app.use(bodyParser.json()); // Parse JSON bodies

const mongoURI = "mongodb://127.0.0.1:27017/my-DB"; // Replace with your MongoDB connection string

mongoose
  .connect(mongoURI, {})
  .then(async () => {
    console.log("Connected to MongoDB");

    // Create a static product
    const staticProduct = {
      name: "Note Book",
      image: "http://localhost:8181/public/images/p1.jpeg",
      price: 50.0,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
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

// GET Product by ID
app.get(`${api}/:id`, cors(corsOptions), async (req, res, next) => {
  try {
    const productId = req.params.id;

    // Validate productId before querying
    if (!productId || productId === 'undefined') {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    // Validate if productId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID format" });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

app.get(api, (req, res, next) => {
  res.json(["Watch", "shoes", "shirt"]);
});

// Order POST API
app.post(`${api}/api/v1/orders`, async (req, res) => {
  try {
    const { name, email, phone, address, items } = req.body;

    // Validate the incoming data
    if (!name || !email || !phone || !address || !items || items.length === 0) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOrder = new Order({
      name,
      email,
      phone,
      address,
      items: items.map(item => ({
        productId: item._id, // Ensure this matches your frontend data structure
        quantity: item.quantity || 1,
        price: item.price,
      })),
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Error creating order", error: error.message });
  }
});

const PORT = 8181;

app.listen(PORT, () => {
  console.log(`server is runnig at port : ${PORT}`);
  console.log("new changes addded");
});

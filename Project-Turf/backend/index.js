require("dotenv").config();
const express = require("express");
const mongoose =require("mongoose")
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("./db"); // Database connection
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");  // Importing the admin routes

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Database connection
db();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);  // Admin routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const groundSchema = new mongoose.Schema({
  name: String,
  price: Number,
  location: String,
  contact: String,
  image: String,
});

// Ground Model
const Ground = mongoose.model("Ground", groundSchema);

// Routes
app.get("/api/grounds", async (req, res) => {
  try {
    const grounds = await Ground.find();
    res.json(grounds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/api/grounds", async (req, res) => {
  const { name, price, location, contact, image } = req.body;
  const newGround = new Ground({ name, price, location, contact, image });
  try {
    const savedGround = await newGround.save();
    res.status(201).json(savedGround);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/api/grounds/:id", async (req, res) => {
  try {
    const ground = await Ground.findById(req.params.id);
    if (!ground) return res.status(404).json({ message: "Ground not found" });

    const { name, price, location, contact, image } = req.body;
    ground.name = name;
    ground.price = price;
    ground.location = location;
    ground.contact = contact;
    ground.image = image;

    const updatedGround = await ground.save();
    res.json(updatedGround);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/api/grounds/:id", async (req, res) => {
  try {
    const ground = await Ground.findById(req.params.id);
    if (!ground) return res.status(404).json({ message: "Ground not found" });

    await ground.remove();
    res.status(204).json({ message: "Ground deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

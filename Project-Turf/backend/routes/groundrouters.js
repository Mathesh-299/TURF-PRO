const express = require("express");
const Ground = require("../models/ground");
const router = express.Router();

// Add a new ground
router.post("/add", async (req, res) => {
  try {
    const { name, price, schedule } = req.body;

    const ground = new Ground({ name, price, schedule });
    await ground.save();

    res.status(201).json({ message: "Ground added successfully", ground });
  } catch (error) {
    res.status(500).json({ error: "Failed to add ground", details: error.message });
  }
});

// Get all grounds
router.get("/", async (req, res) => {
  try {
    const grounds = await Ground.find();
    res.status(200).json(grounds);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch grounds", details: error.message });
  }
});

// Update ground details
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedGround = await Ground.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedGround) {
      return res.status(404).json({ error: "Ground not found" });
    }

    res.status(200).json({ message: "Ground updated successfully", ground: updatedGround });
  } catch (error) {
    res.status(500).json({ error: "Failed to update ground", details: error.message });
  }
});

// Delete a ground
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedGround = await Ground.findByIdAndDelete(id);
    if (!deletedGround) {
      return res.status(404).json({ error: "Ground not found" });
    }

    res.status(200).json({ message: "Ground deleted successfully", ground: deletedGround });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete ground", details: error.message });
  }
});

module.exports = router;

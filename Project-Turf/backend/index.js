require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db"); // Database connection
const userRoutes = require("./routes/users"); // User routes
const authRoutes = require("./routes/auth"); // Authentication routes
const bookingRoutes =require("./routes/bookingRoutes")
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoutes');
const groundRoutes = require('./routes/groundrouters');
const app = express();
const port = process.env.PORT || 8000; 
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
db(); // Ensure that the connection to the database is established
app.use(bodyParser.json());
app.use('/api', adminRoutes);
app.use('/api/ground', groundRoutes);
app.use("/api/users", userRoutes); // User-related routes
app.use("/api/auth", authRoutes); // Authentication routes
// app.use('/api/bookings', bookingRoutes);
app.use('/api/bookings', bookingRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log that the server is running
});

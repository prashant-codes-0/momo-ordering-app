// This file contains the backend server setup.

const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const momoRoutes = require("./routes/momoRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", momoRoutes);

// Connect to MongoDB
mongoose
  .connect(config.db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));

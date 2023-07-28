// This file contains the User model schema for the MongoDB collection.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: ["admin", "user"], default: "user" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// This file contains the Momo model schema for the MongoDB collection.

const mongoose = require("mongoose");

const momoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  variants: [{ type: String, required: true }],
  role: { type: String, required: true, enum: ["admin", "user"], default: "user" },
  deliveryAddress: { type: String },
  phoneNumber: { type: String },
});

const Momo = mongoose.model("Momo", momoSchema);

module.exports = Momo;

// This file contains the controller functions for momo CRUD operations and placing orders.

const Momo = require("../models/Momo");

const momoController = {
  createMomo: async (req, res) => {
    // ... Create a new momo controller function
    const { name, description, price, variants } = req.body;
    try {
      const newMomo = new Momo({
        name,
        description,
        price,
        variants,
      });
      await newMomo.save();
      res.status(201).json(newMomo);
    } catch (error) {
      res.status(500).json({ error: "Failed to create momo" });
    }

  },



  getAllMomo: async (req, res) => {
    // ... Fetch all momos controller function
    try {
      const momos = await Momo.find();
      res.status(200).json(momos);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch momos" });
    }
  },

  getSingleMomo: async (req, res) => {
    // ... Fetch single momo by ID controller function
    const { id } = req.params;
    try {
      const momo = await Momo.findById(id);
      if (!momo) return res.status(404).json({ error: "Momo not found" });
      res.status(200).json(momo);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch momo" });
    }
  },

 

  updateMomo: async (req, res) => {
    // ... Update a momo controller function

      const { id } = req.params;
      const { name, description, price, variants } = req.body;
  
      try {
        const updatedMomo = await Momo.findByIdAndUpdate(
          id,
          {
            name,
            description,
            price,
            variants,
          },
          { new: true } // Return the updated document after the update
        );
  
        if (!updatedMomo) {
          return res.status(404).json({ error: "Momo not found" });
        }
  
        res.status(200).json({ message: "Momo updated successfully", momo: updatedMomo });
      } catch (error) {
        res.status(500).json({ error: "Failed to update the momo" });
      }
    },

  deleteMomo: async (req, res) => {
    // ... Delete a momo controller function (Admin only)

   
      if (req.user.role !== "admin") {
        return res.status(403).json({ error: "You are not authorized to delete momos." });
      }
  
      const { id } = req.params;
      try {
        const momo = await Momo.findByIdAndDelete(id);
        if (!momo) return res.status(404).json({ error: "Momo not found" });
        res.status(200).json({ message: "Momo deleted successfully" });
      } catch (error) {
        res.status(500).json({ error: "Failed to delete momo" });
      }
    },

  placeOrder: async (req, res) => {
    // ... Place an order controller function
      
    const { id, deliveryAddress, phoneNumber } = req.body;

    try {
      const momo = await Momo.findById(id);
      if (!momo) return res.status(404).json({ error: "Momo not found" });

      // Perform any additional validations if required

      // Save the order details (delivery address and phone number) in the momo document
      momo.deliveryAddress = deliveryAddress;
      momo.phoneNumber = phoneNumber;
      await momo.save();

      res.status(200).json({ message: "Order placed successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to place the order" });
    }
  },
  
};

module.exports = momoController;

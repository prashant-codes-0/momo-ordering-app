// This file contains the controller functions for user registration and login.

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authController = {
  registerUser: async (req, res) => {
    // ... Register user controller function
  },

  loginUser: async (req, res) => {
    // ... Login user controller function
  },
};

module.exports = authController;

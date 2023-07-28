// This file contains the authentication middleware to protect routes.

const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  // ... Authenticate user middleware function
};

module.exports = authenticateUser;

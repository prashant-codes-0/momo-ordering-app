// backend/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const config=require("../config/config")


const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Authentication failed. Token not found." });
  }

  try {
    const decodedToken = jwt.verify(token, config.jwtSecret);
    console.log("Decoded Token:", decodedToken); // Log the decoded token to check its contents
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Authentication failed. Invalid token." });
   
  }
};

module.exports = authenticateUser;

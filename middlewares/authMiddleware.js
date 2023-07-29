// backend/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Authentication failed. Token not found." });
  }

  try {
    const decodedToken = jwt.verify(token, "ABCD");
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Authentication failed. Invalid token." });
  }
};

module.exports = authenticateUser;

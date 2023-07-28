// This file contains the API routes for momo CRUD operations and placing orders.

const express = require("express");
const router = express.Router();
const momoController = require("../controllers/momoController");
const authenticateUser = require("../middleware/authMiddleware");

router.get("/momo", momoController.getAllMomo);
router.get("/momo/:id", momoController.getSingleMomo);
router.post("/momo", momoController.createMomo);
router.put("/momo/:id", momoController.updateMomo);
router.delete("/momo/:id", authenticateUser, momoController.deleteMomo);
router.post("/momo/:id/order", authenticateUser, momoController.placeOrder);

module.exports = router;

// Express
const express = require("express");
const router = express.Router();
const {
  loginUser,
  getMe,
  registerUser,
} = require("../../controller/userController");

// Middleware
const { protect } = require("../../middleware/authMiddleware");

// Routes
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe);

module.exports = router;

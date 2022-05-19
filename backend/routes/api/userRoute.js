// Express
const express = require("express");
const router = express.Router();
const {
  loginUser,
  getMe,
  registerUser,
} = require("../../controller/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/user", getMe);

module.exports = router;

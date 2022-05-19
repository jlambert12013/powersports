// Express
const express = require("express");
const router = express.Router();
const {
  loginUser,
  getUser,
  registerUser,
} = require("../../controller/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/user", getUser);

module.exports = router;

// Express
const express = require("express");
const router = express.Router();
const {
  loginUser,
  getUser,
  registerUser,
} = require("../../controller/userController");

router.post("/", registerUser);
router.post("/login", getUser);
router.post("/user", loginUser);

module.exports = router;

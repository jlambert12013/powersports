// const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Include All Fields.");
  }

  // check to see if the users exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email Already Registered.");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data.");
  }

  res.json({ message: "User Registered" });
});

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

const getUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Data Display" });
});

module.exports = { registerUser, getUser, loginUser };

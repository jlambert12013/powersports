const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const generateToken = require('../utils/generateToken')

// REGISTRATION - NEW USERS CONTROLLER - @route POST /api/users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!firstName || !lastName || !email || !password) {
    res.status(400)
    throw new Error('Registration unsuccessful. Please fill out fields.')
  }

  // Check User Exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('Email Already Registered.')
  }

  // Hash Password using Bcrypt Salt
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Data.')
  }
})

//  LOGIN CONTROLLER
// @route   POST /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  //  Check if email already exists
  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Login failed. Please try again.')
  }
})

//  TESTING CONTROLLER
// @route   POST /api/users/me
const getMe = asyncHandler(async (req, res, next) => {
  const { _id, name, email } = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    name,
    email,
  })
})

module.exports = { registerUser, loginUser, getMe }

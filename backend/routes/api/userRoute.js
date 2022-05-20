// Express
const express = require('express')
const router = express.Router()
const protect = require('../../middleware/authMiddleware')
const {
  loginUser,
  getMe,
  registerUser,
} = require('../../controller/userController')

// Routes
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router

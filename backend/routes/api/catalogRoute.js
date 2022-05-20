// Express
const express = require('express')
const router = express.Router()
const protect = require('../../middleware/authMiddleware')

const {
  allListings,
  singleListing,
  createListing,
  updateListing,
  deleteListing,
} = require('../../controller/catalogController')

router.route('/').get(allListings).post(protect, createListing)
router
  .route('/:id')
  .get(singleListing)
  .patch(protect, updateListing)
  .delete(protect, deleteListing)

module.exports = router

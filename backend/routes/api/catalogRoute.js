// Express
const express = require('express')
const router = express.Router()

const {
	allListings,
	singleListing,
	createListing,
	updateListing,
	deleteListing,
} = require('../../controller/catalogController')

router.route('/').get(allListings).post(createListing)
router
	.route('/:id')
	.get(singleListing)
	.patch(updateListing)
	.delete(deleteListing)

module.exports = router

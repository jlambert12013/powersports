const asyncHandler = require("express-async-handler");
const Catalog = require("../models/Catalog");

//	GET request - get all
const allListings = asyncHandler(async (req, res) => {
  const listings = await Catalog.find();
  res.status(200).json(listings);
});

//	POST request - create new listing
const createListing = asyncHandler(async (req, res) => {
  const product = await Catalog.create({
    condition: req.body.condition,
    type: req.body.type,
    manufacturer: req.body.manufacturer,
    model: req.body.model,
    year: req.body.year,
    price: req.body.price,
    image: req.body.image,
    features: req.body.features,
    description: req.body.description,
    inStock: req.body.inStock,
    createdAt: req.body.createdAt,
    updatedOn: req.body.updatedOn,
  });
  res.status(200).json(product);
});

//	GET request - find one listing
const singleListing = asyncHandler(async (req, res) => {
  const listing = await Catalog.findById(req.params.id);

  if (!listing) {
    res.status(400);
    throw new Error("Nothing was found.");
  }

  res.json(listing);
});

//	PATCH request - update a listing
const updateListing = asyncHandler(async (req, res) => {
  const listing = await Catalog.findById(req.params.id);

  if (!listing) {
    res.status(400);
    throw new Error("Nothing was found");
  }

  const updated = await Catalog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updated);
});

//	DELETE request - Delete a listing
const deleteListing = asyncHandler(async (req, res) => {
  const listing = await Catalog.findById(req.params.id);

  if (!listing) {
    res.status(400);
    throw new Error("Nothing was found.");
  }

  await listing.remove();

  res.status(200).json({ deleted: req.params.id });
});

module.exports = {
  allListings,
  singleListing,
  createListing,
  updateListing,
  deleteListing,
};

import Listing from "../models/listing.model.js";

// create listing
export const createListing = async (req, res, next) => {
  try {
    const listing = new Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

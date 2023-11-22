import Listing from "../models/listing.model.js"
import { errorHandler } from "../utils/error.js"
import mongoose from "mongoose"

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body)
        return res.status(201).json(listing)
    } catch (error) {
        next(error)
    }
}

export const deleteListing = async (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return next(errorHandler(400, 'Invalid listing ID'));
    }
    const listing = await Listing.findById(req.params.id)

    if(!listing){
        return next(errorHandler(404, 'Listig not found!'))
    }
    if(req.user._id !== listing.userRef){
        return next(errorHandler(401, 'You can only delete your own listings!'))
    }

    try {
        await Listing.findOneAndDelete(req.params.id)
        return res.status(200).json('Listing has been deleted!')
    } catch (error) {
        next(error)
    }
}

export const updateListing = async (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return next(errorHandler(400, 'Invalid listing ID'));
    }
    const listing = await Listing.findById(req.params.id)
    if(!listing){
        return next(errorHandler(404, 'List not found!'))
    }
    if(req.user._id !== listing.userRef){
        return next(errorHandler(401, 'You can only update your own listings!'))
    }
    try {
       const updatedListing = await Listing.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
        ) 
       res.status(200).json(updatedListing)
    } catch (error) {
        next(error)
    }
}
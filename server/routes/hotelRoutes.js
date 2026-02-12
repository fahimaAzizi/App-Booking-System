import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerHotel, getAllHotels, getHotelById } from "../controllers/hotelController.js";

const hotelRouter = express.Router();

// Public routes
hotelRouter.get("/", getAllHotels);
hotelRouter.get("/:id", getHotelById);

// Protected routes
hotelRouter.post("/", protect, registerHotel);

export default hotelRouter;

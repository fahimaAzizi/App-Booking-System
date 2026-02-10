import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { registerHotel, getMyHotel } from "../controllers/hotelController.js";

const hotelRouter = express.Router();

hotelRouter.post("/", protect, registerHotel);
hotelRouter.get("/", protect, getMyHotel);

export default hotelRouter;

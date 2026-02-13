import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";

import connectCloudinary from "./configs/cloudinary.js";
import { clerkMiddleware } from "@clerk/express";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import roomRouter from "./routes/roomRoutes.js";
import bookingRouter from "./routes/bookingRouter.js";
import clerkWebhooks from "./controllers/clerkWebhooks.js";

const app = express();

// ====== MIDDLEWARE ======
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// ====== DATABASE ======
const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI.includes('?') 
      ? process.env.MONGODB_URI 
      : `${process.env.MONGODB_URI}/hotel-booking`;
    await mongoose.connect(uri);
    console.log("Database connected ✅");
  } catch (error) {
    console.error("DB connection error:", error.message);
    // Don't exit, continue without database
  }

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
};

connectDB();

// ====== CLOUDINARY ======
connectCloudinary();

// ====== ROUTES ======
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => res.send("API is working fine"));

app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/room", roomRouter);
app.use("/api/bookings", bookingRouter);

// ====== START SERVER ======
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));

import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, default: "My Hotel" },
    address: { type: String, default: "Address not provided" },
    contact: { type: String, default: "No phone" },
    owner: { type: String, required: true, ref: "User" },
    city: { type: String, default: "Unknown" },
  },
  { timestamps: true }
);

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;

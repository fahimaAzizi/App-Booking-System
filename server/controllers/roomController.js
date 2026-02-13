// roomController.js

import Cloudinary from "../configs/cloudinary.js";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
import User from "../models/User.js";

// ===============================
// CREATE A NEW ROOM
// ===============================
export const createRoom = async (req, res) => {
  try {
    const { roomType, pricePerNight, amenities } = req.body;

    const hotel = await Hotel.findOne({ owner: req.user._id });
    if (!hotel) {
      return res.json({ success: false, message: "No Hotel Found" });
    }

    // upload images to cloudinary
    const uploadImages = req.files.map(async (file) => {
      const response = await Cloudinary.uploader.upload(file.path);
      return response.secure_url;
    });

    const images = await Promise.all(uploadImages);

    await Room.create({
      hotel: hotel._id,
      owner: req.user._id,
      roomType,
      pricePerNight: Number(pricePerNight),
      amenities: JSON.parse(amenities),
      images,
    });

    res.json({ success: true, message: "Room created successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ===============================
// GET ALL ROOMS OF OWNER
// ===============================
export const getOwnerRooms = async (req, res) => {
  try {
    const hotelData = await Hotel.findOne({ owner: req.user._id });
    if (!hotelData) {
      return res.json({ success: false, message: "No Hotel Found" });
    }

    const rooms = await Room.find({ hotel: hotelData._id });

    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ===============================
// GET ALL ROOMS (Public)
// ===============================
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ isAvailable: true }).populate('hotel', 'name address city');
    res.json({ success: true, rooms });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ===============================
// GET SINGLE ROOM BY ID
// ===============================
export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id).populate('hotel', 'name address city owner');
    
    if (!room) {
      return res.json({ success: false, message: "Room not found" });
    }
    
    // If hotel has owner, fetch owner details
    if (room.hotel && room.hotel.owner) {
      const owner = await User.findById(room.hotel.owner);
      // Add owner details to hotel object
      room.hotel.owner = owner;
    }
    
    res.json({ success: true, room });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ===============================
// TOGGLE ROOM AVAILABILITY
// ===============================
export const toggleRoomAvailability = async (req, res) => {
  try {
    const { roomId } = req.body;

    const roomData = await Room.findById(roomId);
    if (!roomData) {
      return res.json({ success: false, message: "Room not found" });
    }

    roomData.isAvailable = !roomData.isAvailable;
    await roomData.save();

    res.json({
      success: true,
      message: "Room availability updated",
      isAvailable: roomData.isAvailable,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

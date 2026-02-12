import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

// GET ALL HOTELS
export const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({}).populate("owner", "firstName lastName email");
    res.json({ success: true, hotels });
  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET HOTEL BY ID
export const getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).populate("owner", "firstName lastName email");
    if (!hotel) return res.status(404).json({ success: false, message: "Hotel not found" });
    res.json({ success: true, hotel });
  } catch (error) {
    console.error("Error fetching hotel:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// REGISTER HOTEL
export const registerHotel = async (req, res) => {
  try {
    const { name, address, city, contact } = req.body;
    const owner = req.user._id;

    const existingHotel = await Hotel.findOne({ owner });
    if (existingHotel) return res.status(400).json({ success: false, message: "Hotel already registered" });

    const newHotel = await Hotel.create({
      name: name || "My Hotel",
      address: address || "Address not provided",
      city: city || "Unknown",
      contact: contact || "No phone",
      owner,
    });

    await User.findByIdAndUpdate(owner, { role: "hotelOwner" });

    res.json({ success: true, message: "Hotel Registered Successfully", hotel: newHotel });
  } catch (error) {
    console.error("Hotel registration error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

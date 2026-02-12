import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

// ===============================
// GET ALL HOTELS (Public)
// ===============================
export const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find({}).populate('owner', 'firstName lastName email');
        res.json({ success: true, hotels });
    } catch (error) {
        console.error("Error fetching hotels:", error);
        res.json({ success: false, message: error.message });
    }
};

// ===============================
// GET SINGLE HOTEL BY ID
// ===============================
export const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id).populate('owner', 'firstName lastName email');
        if (!hotel) {
            return res.json({ success: false, message: "Hotel not found" });
        }
        res.json({ success: true, hotel });
    } catch (error) {
        console.error("Error fetching hotel:", error);
        res.json({ success: false, message: error.message });
    }
};

// ===============================
// REGISTER HOTEL
// ===============================
export const registerHotel = async (req, res)=>{
    try {
        const {name, address, contact , city} = req.body;
        const owner = req.user._id
        console.log("Registering hotel for owner:", owner);

        // Check if user already has a hotel
        const existingHotel = await Hotel.findOne({owner})
        if(existingHotel){
            return res.json({success: false, message: "Hotel already Registered"})
        }
        
        // Create hotel with provided data
        const newHotel = await Hotel.create({
            name: name || "My Hotel",
            address: address || "Address not provided",
            contact: contact || "No phone",
            city: city || "Unknown",
            owner
        });
        console.log("Hotel created:", newHotel._id);
        
        // Update user role to hotelOwner
        await User.findByIdAndUpdate(owner, {role: "hotelOwner"});
        
        res.json({success: true, message: "Hotel Registered Successfully"})

    } catch (error) {
        console.error("Hotel registration error:", error);
        res.json({success: false, message: error.message})
        
    }
}

import Hotel from "../models/Hotel.js";
import User from "../models/User.js";


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

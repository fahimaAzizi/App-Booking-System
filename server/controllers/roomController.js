import Cloudinary from "../configs/cloudinary";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";


// api to create a new room for a hotel 
export  const createRoom = async (req, res)=>{
    try {
        const {roomType, pricePerNight, amenities} = req.body;
        const hotel = await Hotel.findOne({owner: req.auth.userId})

        if(!hotel) return res.json({ success: false, message: "No Hotel Found"});


        
    const uploadImages = req.files.map(async (file) => {
      const response = await Cloudinary.uploader.upload(file.path);
      return response.secure_url;
    });

    // wait for all uploads
    const images = await Promise.all(uploadImages);

    await Room.create({
      hotel: hotel._id,
      roomType,
      pricePerNight: +pricePerNight,
      amenities: JSON.parse(amenities),
      images,
    });

    res.json({ success: true, message: "Room created successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// API to get all rooms
export const getRooms =async (req , res)=>{

  try {
    const hotelData = await Hotel({owner: req.auth.userId})
    const room = await Room.find({hotel: hotelData._id.toString()})
    ("hotel");
    res.json({success: true, rooms})
  } catch (error) {
    res.json({success: false, message: error.message})
  }
}
        

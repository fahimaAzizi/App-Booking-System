import Booking from "../models/Booking.js"
import Room from "../models/Room.js";

// Function to Check Availability of Room
const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
  try {
    const bookings = await Booking.find({
      room,
      checkInDate: { $lte: checkOutDate },
      checkOutDate: { $gte: checkInDate },
    });

    const isAvailable = bookings.length === 0;
    return isAvailable;
  } catch (error) {
    console.error(error.message);
  }
};


// Check room availability API
export const checkRoomAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;

    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });

    res.json({ success: true, isAvailable });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// API to create a new booking
// POST /api/bookings/book
export const createBooking = async (req, res) => {
  try {
    const {room , checkInDate , checkOutDate, guests} = req.body;
    const user = req.user._id;


    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room
    })
    if(!isAvailable){
      return res.json({success: false, message: "Room is not available" })
    }
    const roomData = await Room.findById(room).populate("hotel");
    let totalPrice = roomData.pricePerNight;



    const checkIn = new Date(checkInDate)
    const checkOut = new Date(checkOutDate)
    // booking logic will be added here
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
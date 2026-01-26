import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {type: String, ref: " User", require: true},
    room: {type: String, ref: " Room", require: true},
    hotel: {type: String, ref: " Hotel", require: true},
    chechInData: {type: Date, require: true},
    chechOutData: {type: Date, require: true},
    
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;

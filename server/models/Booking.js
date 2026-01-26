import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {type: String, ref: " User", require: true},
    room: {type: String, ref: " Room", require: true},
    hotel: {type: String, ref: " Hotel", require: true},
    chechInData: {type: Date, require: true},
    chechOutData: {type: Date, require: true},
    totalPrice :{type: Number, require: true},
    guests: {type: Number, require: true},
    sataus: {
      type: String,
      enum: ["pending","confirmed","cancelled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      require: true,
      default:"pay at Hotel"
    },
    isPaid: {type: Boolean, require: false}

  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;

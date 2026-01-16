import mongoose from "mongoose";



const connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGOODB_URI}/hotel-booking`)
    } catch (error) {
        
    }
}
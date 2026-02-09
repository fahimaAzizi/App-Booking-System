import mongoose from "mongoose";



const connectDB = async()=>{
    try {
        mongoose.connection.on('connected',()=> console.log("Database connected"))
        await mongoose.connect(`${process.env.MONGOODB_URI}/hotel-booking`)
    } catch (error) {
        console.log(error.maessage);
        
    }
}
export default connectDB;

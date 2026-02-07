import express from'express'
import "dotenv/config";
import cors from"cors";
import connectDB from './configs/db.js';
import {clerkMiddleware} from '@clerk/express'
import clerkwebhooks from './controllers/clerkWebhooks';
import userRouter from './routes/userRoutes';
import hotelRouter from './routes/hotelRoutes';
import connectCloudinary from './configs/cloudinary';
import roomRouter from './routes/roomRoutes';
import bookingRouter from './routes/bookingRouter';


connectDB();
connectCloudinary();

const app = express()

app.use(cors())

app.use(express.json())
app.use(clerkMiddleware())

// API

app.use("/api/clerk",clerkwebhooks)

app.get('/',(req, res)=> res.send("API id working find"))
app.use('./api/user',userRouter)
app.use('./api/hotels',hotelRouter)
app.use('./api/room',roomRouter)
app.use('./api/bookings',bookingRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
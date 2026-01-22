import express from'express'
import "dotenv/config";
import cors from"cors";
import { connectDB } from 'mongoose';
import {clerkMiddleware} from '@clerk/express'
import clerkwebhooks from './controllers/clerkWebhooks';
import userRouter from './routes/userRoutes';
import hotelRouter from './routes/hotelRoutes';
import connectCloudinary from './configs/cloudinary';


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

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
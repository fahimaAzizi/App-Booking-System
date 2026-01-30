import express from 'express'
import {cheAvailabilityAPI} from '../controllers/bookingController';

const bookingRouter = express.Router();

bookingRouter.post('/check-availability', cheAvailabilityAPI)
import express from "express";
import { create } from "../controllers/roomController";


const roomRouter = express.Router();

roomRouter.post('/', upload.array("images",4), protect, createRoom)

export default roomRouter;
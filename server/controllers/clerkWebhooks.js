import User from "../models/User.js";
import { Webhook, Webhook } from "svix";

const clerkwebhooks = async (req , res)=>{
    try {
        const Whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        const hesders ={
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-tiemstamp"],
            "svix-signature": req.headers["svix-signature"],
        }

        await Whook.verify(JSON.stringify(req.body), headers)

        const {data , type}= req.body
        
    } catch (error) {
        
    }
}
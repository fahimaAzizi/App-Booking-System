import User from "../models/User.js";
import { Webhook, Webhook } from "svix";

const clerkwebhooks = async (req , res)=>{
    try {
        const Webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
    } catch (error) {
        
    }
}
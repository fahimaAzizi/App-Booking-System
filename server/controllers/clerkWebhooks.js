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

        const userData = {
  _id: data.id,
  email: data.email_addresses[0].email_address,
  username: data.first_name + " " + data.last_name,
  image: data.image_url,
};

// Switch Cases for different Events
switch (type) {
  case "user.created": {
    await User.create(userData);
    break;
  }

  case "user.updated": {
    await User.findByIdAndUpdate(data.id, userData);
    break;
  }
}


    } catch (error) {
        
    }
}
// authMiddleware.js

import User from "../models/User.js";

// Middleware to check if user is authenticated
export const protect = async (req, res, next) => {
  const { userId, sessionClaims } = req.auth;

  if (!userId) {
    return res.json({ success: false, message: "not authenticated" });
  }

  let user = await User.findById(userId);
  
  // If user doesn't exist in MongoDB, create them automatically with Clerk data
  if (!user) {
    try {
      const email = sessionClaims?.email || `${userId}@temp.com`;
      const username = sessionClaims?.firstName && sessionClaims?.lastName 
        ? `${sessionClaims.firstName} ${sessionClaims.lastName}` 
        : sessionClaims?.firstName || "User";
      const image = sessionClaims?.imageUrl || "";
      
      user = await User.create({
        _id: userId,
        email,
        username,
        image,
        recentSearchedCities: [],
      });
      console.log("Auto-created user in MongoDB:", userId);
    } catch (error) {
      console.error("Error creating user:", error.message);
      // User might have been created by another request, try to fetch again
      user = await User.findById(userId);
    }
  }
  
  req.user = user;
  next();
};

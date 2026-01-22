
// api to create a new room for a hotel 
export  const create = async (req, res)=>{
    try {
        const {roomType, pricePerNight, amenities} = req.body;
        const hotel = await Hotel.findOne({owner: req.auth.userId})

        if(!hotel) return res.json({ success: false, message: "No Hotel Found"});

        
    } catch (error) {
        
    }
}
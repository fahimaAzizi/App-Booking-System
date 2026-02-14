import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomCommonData } from "../assets/assets";
import StarRating from "../components/StarRating";
import { useAppContext } from "../conext/AppContext";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);
  const { axios } = useAppContext();
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get all images for the gallery
  const allImages = room?.images && room.images.length > 0 
    ? room.images 
    : [assets.roomImg1, assets.roomImg2, assets.roomImg3, assets.roomImg4];

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const { data } = await axios.get(`/api/room/${id}`);
        if (data.success) {
          setRoom(data.room);
          if (data.room.images && data.room.images.length > 0) {
            setMainImage(data.room.images[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching room:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, [id, axios]);

  // Lightbox navigation functions
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  if (loading) {
    return (
      <div className="py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!room) return <div className="py-28 md:py-36 px-4 text-center">Room not found</div>;

  return (
    <div className="py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32">

      {/* TITLE */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
        <h1 className="text-3xl md:text-4xl font-playfair text-gray-800">
          {room.hotel?.name || "Hotel Name"}{" "}
          <span className="text-sm font-inter text-gray-500">
            ({room.roomType})
          </span>
        </h1>

        <span className="text-xs px-3 py-1.5 bg-orange-500 text-white rounded-full">
          20% OFF
        </span>
      </div>

      {/* RATING */}
      <div className="flex items-center gap-2 mt-2">
        <StarRating />
        <p className="text-sm text-gray-500">200+ reviews</p>
      </div>

      {/* IMAGES */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">

        {/* MAIN IMAGE - Clickable to open lightbox */}
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage || assets.roomImg1}
            alt="Room"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => openLightbox(allImages.indexOf(mainImage) >= 0 ? allImages.indexOf(mainImage) : 0)}
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Click on image to view all photos</p>
        </div>

        {/* THUMBNAILS */}
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room.images && room.images.length > 0 ? (
            room.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Room thumbnail"
                onClick={() => setMainImage(img)}
                className={`w-full h-[190px] object-cover rounded-xl cursor-pointer shadow-md
                  ${
                    mainImage === img
                      ? "outline outline-3 outline-orange-500"
                      : ""
                  }`}
              />
            ))
          ) : (
            <>
              <img src={assets.roomImg1} alt="Room" className="w-full h-[190px] object-cover rounded-xl shadow-md" />
              <img src={assets.roomImg2} alt="Room" className="w-full h-[190px] object-cover rounded-xl shadow-md" />
            </>
          )}
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-playfair text-gray-800">
          Experience Luxury Like Never Before
        </h2>

        <div className="flex flex-wrap gap-4 mt-4">
          {room.amenities && room.amenities.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg"
            >
              <img
                src={facilityIcons[item] || facilityIcons["Free WiFi"]}
                alt={item}
                className="w-5 h-5"
              />
              <span className="text-xs text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="mt-6">
        <span className="text-2xl font-medium text-gray-800">
          ${room.pricePerNight} <span className="text-sm text-gray-500">/night</span>
        </span>
      </div>

      {/* BOOKING FORM */}
      <form
        className="flex flex-col md:flex-row justify-between items-start md:items-center
        bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)]
        p-6 rounded-xl mt-16 max-w-6xl mx-auto gap-6"
      >
        <div className="flex flex-col md:flex-row gap-6 text-gray-500">

          {/* CHECK IN */}
          <div className="flex flex-col">
            <label className="font-medium">Check-In</label>
            <input
              type="date"
              className="border rounded px-3 py-2 mt-1 outline-none"
              required
            />
          </div>

          {/* CHECK OUT */}
          <div className="flex flex-col">
            <label className="font-medium">Check-Out</label>
            <input
              type="date"
              className="border rounded px-3 py-2 mt-1 outline-none"
              required
            />
          </div>

          {/* GUESTS */}
          <div className="flex flex-col">
            <label className="font-medium">Guests</label>
            <select className="border rounded px-3 py-2 mt-1 outline-none">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-primary-dull text-white
          px-8 py-3 rounded-md transition-all active:scale-95
          w-full md:w-auto"
        >
          Check Availability
        </button>
      </form>
      
      <div className="max-w-3xl border-y border-gray-300 my-10 py-10 text-gray-500">
        Guests will be allocated on the ground floor according
         to availability. You get a comfortable two-bedroom a
         partment that has a true city feeling. The price quoted is for two guests; at the guest slot, please mark the number of guests to get the exact price for groups. Guests will be 
        allocated on the ground floor according to availability.

      </div>

      {/* Hosted by */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10">

        <div className="flex gap-4">
          <img
            src={room.hotel?.owner?.image || "https://via.placeholder.com/100"}
            alt="Host"
            className="h-14 w-14 md:h-18 md:w-18 rounded-full"
          />

          <div>
            <p className="text-lg md:text-xl">
              Hosted by {room.hotel?.name || "Hotel"}
            </p>

            <div className="flex items-center mt-1">
              <StarRating />
              <p className="ml-2">200+ reviews</p>
            </div>
          </div>
        </div>

        <button
          className="px-6 py-2.5 mt-4 md:mt-0 rounded text-white bg-primary 
          hover:bg-primary-dull transition-all cursor-pointer"
        >
          Contact Now
        </button>

      </div>

      {/* LIGHTBOX GALLERY */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* CLOSE BUTTON */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* PREV BUTTON */}
          <button 
            className="absolute left-4 text-white hover:text-gray-300 z-50 p-2 bg-black bg-opacity-50 rounded-full"
            onClick={prevImage}
          >
            <svg className="w-8 h-8 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* MAIN LIGHTBOX IMAGE */}
          <div 
            className="max-w-4xl max-h-[80vh] px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allImages[currentImageIndex]}
              alt={`Room ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>

          {/* NEXT BUTTON */}
          <button 
            className="absolute right-4 text-white hover:text-gray-300 z-50 p-2 bg-black bg-opacity-50 rounded-full"
            onClick={nextImage}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* IMAGE COUNTER */}
          <div className="absolute bottom-4 text-white text-sm">
            {currentImageIndex + 1} / {allImages.length}
          </div>

          {/* THUMBNAILS */}
          <div className="absolute bottom-12 flex gap-2 justify-center">
            {allImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-16 h-16 object-cover rounded cursor-pointer transition-all ${
                  currentImageIndex === index 
                    ? "outline outline-2 outline-white opacity-100" 
                    : "opacity-50 hover:opacity-80"
                }`}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default RoomDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { roomsDummyData, facilityIcons } from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const selectedRoom = roomsDummyData.find(
      (room) => room._id == id
    );

    if (selectedRoom) {
      setRoom(selectedRoom);
      setMainImage(selectedRoom.images[0]);
    }
  }, [id]);

  if (!room) return null;

  return (
    <div className="py-28 md:py-36 px-4 md:px-16 lg:px-24 xl:px-32">

      {/* TITLE */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
        <h1 className="text-3xl md:text-4xl font-playfair text-gray-800">
          {room.hotel.name}{" "}
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

        {/* MAIN IMAGE */}
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt="Room"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* THUMBNAILS */}
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room.images.map((img, index) => (
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
          ))}
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="mt-10">
        <h2 className="text-3xl md:text-4xl font-playfair text-gray-800">
          Experience Luxury Like Never Before
        </h2>

        <div className="flex flex-wrap gap-4 mt-4">
          {room?.amenities?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg"
            >
              <img
                src={facilityIcons[item]}
                alt={item}
                className="w-5 h-5"
              />
              <span className="text-xs text-gray-600">{item}</span>
            </div>
          ))}
        </div>
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
          Ckeck Availability
        </button>
      </form>
    </div>
  );
};

export default RoomDetails;

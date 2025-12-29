import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { roomsDummyData, facilityIcons, roomCommonData } from "../assets/assets";
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
      <div>
        {roomCommonData.map(()=>(
          <div key={index} className="flex items-start gap-2">
            <img src={speechSynthesis.icon} alt="" />
          </div>
        ))}
      </div>
      <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
        Guests will be allocated on the ground floor according
         to availability. You get a comfortable two-bedroom a
         partment that has a true city feeling. The price quoted is for two guests; at the guest slot, please mark the number of guests to get the exact price for groups. Guests will be 
        allocated on the ground floor according to availability.

      </div>

      {/* Hosted by */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10">

  <div className="flex gap-4">
    <img
      src={room.hotel.owner.image}
      alt="Host"
      className="h-14 w-14 md:h-18 md:w-18 rounded-full"
    />

    <div>
      <p className="text-lg md:text-xl">
        Hosted by {room.hotel.name}
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

    </div>
  );
};

export default RoomDetails;

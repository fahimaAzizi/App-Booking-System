import React from "react";
import { assets, cities } from "../assets/assets";

const HotelReg = ({ setShowHotelReg }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70">
      
      {/* FORM CONTAINER */}
      <form className="bg-white rounded-lg p-6 w-full max-w-md relative">

        {/* CLOSE ICON */}
        <img
          src={assets.closeIcon}
          alt="close"
          onClick={() => setShowHotelReg(false)}
          className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
        />
        <div className="relative flex flex-col">
          <img src={assets.closeIcon} alt="" />
        </div>

        <p className="text-2xl font-semibold mb-6 text-center">
          Register Your Hotel
        </p>
        <div className="w-full mt-4">
          <label htmlFor="name" className="fontmedium text-gray-500">hotelname</label>
           <input
          type="text"
          placeholder="Hotel Name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 outline-none"
          required
        />

        </div>
      
     {/* ADDRESS */}
<div className="w-full mt-4">
  <label
    htmlFor="address"
    className="font-medium text-gray-500"
  >
    Address
  </label>

  <input
    id="address"
    type="text"
    placeholder="Type here"
    className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
    required
  />
</div>


        {/* SELECT CITY */}
        <div className="w-full mb-4">
          <label htmlFor="city" className="font-medium text-gray-500">
            City
          </label>

          <select
            id="city"
            className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light"
            required
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md
          hover:bg-primary-dull transition-all active:scale-95"
        >
          Register Hotel
        </button>

      </form>
    </div>
  );
};

export default HotelReg;

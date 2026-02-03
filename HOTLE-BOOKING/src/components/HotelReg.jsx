import React from "react";
import { assets, cities } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const HotelReg = () => {
  const { setShowHotelReg } = useAppContext();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
      <form className="flex bg-white rounded-xl max-w-4xl max-md:mx-2">
        
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 rounded-xl hidden md:block"
        />

        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          
          <img
            src={assets.closeIcon}
            alt="close"
            onClick={() => setShowHotelReg(false)}
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />

          <p className="text-2xl font-semibold mt-6">
            Register Your Hotel
          </p>

          <div className="w-full mt-4">
            <label className="font-medium text-gray-500">Hotel Name</label>
            <input
              type="text"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500"
              required
            />
          </div>

          <div className="w-full mt-4">
            <label className="font-medium text-gray-500">Address</label>
            <input
              type="text"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500"
              required
            />
          </div>

          <div className="w-full mt-4">
            <label className="font-medium text-gray-500">City</label>
            <select
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500"
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

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 mt-6 rounded-md hover:bg-primary-dull transition-all active:scale-95"
          >
            Register Hotel
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;

import React, { useState } from "react";
import { assets, cities } from "../assets/assets";
import { useAppContext } from "../conext/AppContext";
import { toast } from "react-hot-toast";


const HotelReg = () => {
  const { setShowHotelReg, setIsOwner } = useAppContext();

  const [name ,setName] = useState("")
  const [address , setAddress] = useState("")
  const [contact, setContact]  = useState("")
  const [city ,setCity]  = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration success
    setIsOwner(true);
    toast.success("Hotel registered successfully!");
    setShowHotelReg(false);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
      <form onSubmit={handleSubmit} className="flex bg-white rounded-xl max-w-4xl max-md:mx-2">
        
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 rounded-xl hidden md:block"
        />

        <div className="relative flex flex-col items-center md:w-1/2 p-8 md:p-10">
          
          {/* CLOSE ICON */}
          <img
            src={assets.closeIcon}
            alt="close"
            onClick={() => setShowHotelReg(false)}
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />

          <p className="text-2xl font-semibold mt-6">
            Register Your Hotel
          </p>

          {/* HOTEL NAME */}
          <div className="w-full mt-4">
            <label className="font-medium text-gray-500">Hotel Name</label>
            <input id="name"
            onChange={(e)=> setName(e.target.value)} value={name}
              type="text"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="contact" className="font-medium text-gray-500">
              Phone
            </label>
            <input onChange={(e)=> setContact(e.target.value)} value={contact}
              type="text"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500"
              required/>
          </div>

          {/* ADDRESS */}
          <div className="w-full mt-4">
            <label className="font-medium text-gray-500">Address</label>
            <input onChange={(e)=>  setAddress(e.target.value)} value={address}
              type="text"
              className="border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500"
              required
            />
          </div>

          {/* CITY */}
          <div className="w-full mt-4">
            <label className="font-medium text-gray-500">City</label>
            <select
              onChange={(e) => setCity(e.target.value)}
              value={city}
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

import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free WiFi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      'Pool Access' : false
    },
  });

  return (
    <form action="">
      <Title align='left' font='outfit' Title ='Add Room' subTitle='Fill in the deteail crefully and accurate room details, pricing, and amenities, to enhance the user bookin experince.' />
      <p className="text-gray-800 mt-10"> Images</p>
      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flexwrap">
        {Object.keys(images).map((key)=>
          <label htmlFor={`roomImage${key}`} key={key}>
          
            <img className="max-h-13 cursor-pointer opacity-80" src={images[key]? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />
            <input type="file" accept="image/*" id={`roomImage${key}`} hidden 
            onChange={e=> setImages({...images, [key]: e.target.files[0]})}/>
          </label>
        )}
      </div>
      <div>
          <p className="mt-4 text-gray-800">
    Price <span className="text-xs">/night</span>
  </p>
  <input
    type="number"
    placeholder="0"
    className="border border-gray-300 mt-1 rounded p-2 w-24"
    value={inputs.pricePerNight}
    onChange={(e) =>
      setInputs({ ...inputs, pricePerNight: e.target.value })
    }
  />
      </div>
    </form>
  );
};

export default AddRoom;

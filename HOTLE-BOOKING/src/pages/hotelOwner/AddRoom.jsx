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
      "Pool Access": false,
    },
  });

  return (
    <form>
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Fill in the details carefully and accurately including room details, pricing, and amenities to enhance the booking experience."
      />

      <p className="text-gray-800 mt-10">Images</p>

      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img
              className="max-h-16 cursor-pointer opacity-80"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt=""
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      <div>
        <select
          className="border border-gray-300 mt-1 rounded p-2 w-40"
          value={inputs.roomType}
          onChange={(e) =>
            setInputs({ ...inputs, roomType: e.target.value })
          }
        >
          <option value="">Select Room Type</option>
          <option value="Luxury Room">Luxury Room</option>
          <option value="Family Suite">Family Suite</option>
        </select>
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

      <div className="mt-6">
        <p className="text-gray-800">Amenities</p>
      </div>
    </form>
  );
};

export default AddRoom;

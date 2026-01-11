import React, { useState } from "react";
import Title from "../../components/Title";

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
      <Title align='left' font='outfit' title ='Add Room' subTitle='Fill in the deteail crefully and accurate room details, pricing, and amenities, to enhance the user bookin experince.' />
    </form>
  );
};

export default AddRoom;

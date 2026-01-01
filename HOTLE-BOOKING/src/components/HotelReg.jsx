import React from 'react'

      const HotelReg = ({ setShowHotelReg }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70">

      {/* FORM CONTAINER */}
      <form className="flex bg-white rounded-xl w-full max-w-4xl mx-4 overflow-hidden">

        {/* LEFT IMAGE */}
        <img
          src={assets.regImage}
          alt="reg-image"
          className="w-1/2 hidden md:block object-cover"
        />
                {/* RIGHT FORM */}
        <div className="relative flex flex-col items-center w-full md:w-1/2 p-8 md:p-10">

          {/* CLOSE ICON */}
          <img
            src={assets.closeIcon}
            alt="close"
            onClick={() => setShowHotelReg(false)}
            className="absolute top-4 right-4 h-4 w-4 cursor-pointer"
          />

          <p className="text-2xl font-semibold mb-6">
            Register Your Hotel
          </p>

          {/* HOTEL NAME */}
          <input
            type="text"
            placeholder="Hotel Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 outline-none"
            required
          />
          {/* ADDRESS */}
          <input
            type="text"
            placeholder="Hotel Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 outline-none"
            required
          />

          {/* CONTACT */}
          <input
            type="text"
            placeholder="Contact Number"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6 outline-none"
            required
          />

    </div>
  )
}

export default HotelReg
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

    </div>
  )
}

export default HotelReg
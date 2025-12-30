import React, { useState } from 'react'
import Title from '../components/Title'
import { userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
  const [bookings , setBookings] = useState(userBookingsDummyData)
  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      
      {/* Page Title */}
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks."
        align="left"
      />

      {/* Table Wrapper */}
      <div className="max-w-6xl mt-8 w-full text-gray-800">

        {/* Table Header (Desktop only) */}
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3">
          <div>Hotels</div>
          <div>Date & Timings</div>
          <div>Payment</div>
        </div>
        {/* BOOKINGS */}
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
          >

            {/* ---- Hotel Details ---- */}
            <div className="flex gap-4">
              <img
                src={booking.room.images[0]}
                alt="hotel-img"
                className="min-md:w-44 w-32 h-24 rounded shadow object-cover"
              />

              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-2xl">
                  {booking.hotel.name}
                </p>

                <span className="font-inter text-sm">
                  {booking.room.roomType}
                </span>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <img src={assets.locationIcon} alt="location-icon" />
                  <span>{booking.hotel.address}</span>
                </div>
              </div>
            </div>

            {/* ---- Date & Timings ---- */}
            <div className="flex flex-col justify-center text-sm text-gray-600 max-md:mt-4">
              <p>Check-in: {booking.checkInDate}</p>
              <p>Check-out: {booking.checkOutDate}</p>
            </div>

            {/* ---- Payment ---- */}
            <div className="flex items-center max-md:mt-4">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                {booking.paymentStatus}
              </span>
            </div>

          </div>
        ))}

       

      </div>
    </div>
  )
}

export default MyBookings

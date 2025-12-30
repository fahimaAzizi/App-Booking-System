import React from 'react'
import Title from '../components/Title'

const MyBookings = () => {
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

        {/* Booking Item */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] gap-4 md:gap-0 w-full py-6 border-b border-gray-200">
          
          {/* Hotel Info */}
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              alt="hotel"
              className="w-28 h-20 object-cover rounded"
            />
            <div>
              <p className="font-semibold">Luxury Palace Hotel</p>
              <p className="text-sm text-gray-600">New York, USA</p>
            </div>
          </div>

          {/* Date & Time */}
          <div className="text-sm text-gray-600">
            <p>Check-in: 12 Aug 2025</p>
            <p>Check-out: 15 Aug 2025</p>
          </div>

          {/* Payment */}
          <div className="flex items-center">
            <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
              Paid
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyBookings

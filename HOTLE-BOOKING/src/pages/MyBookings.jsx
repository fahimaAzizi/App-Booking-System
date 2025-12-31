import React, { useState } from 'react'
import Title from '../components/Title'
import { userBookingsDummyData, assets } from '../assets/assets'

const MyBookings = () => {
  const [bookings] = useState(userBookingsDummyData)

  // Helper to format date
  const formatDate = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString()
  }

  return (
    <div className="py-28 md:pt-32 md:pb-36 px-4 md:px-16 lg:px-24 xl:px-32">

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
        {bookings && bookings.length > 0 ? (
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
            >

              {/* ---- Hotel Details ---- */}
              <div className="flex gap-4">
                <img
                  src={booking.room?.images?.[0]}
                  alt="hotel-img"
                  className="w-32 h-24 md:w-44 rounded shadow object-cover"
                />

                <div className="flex flex-col gap-1.5 mt-3 md:mt-0 md:ml-4">
                  <p className="font-playfair text-2xl">
                    {booking.hotel?.name}
                  </p>

                  <span className="font-inter text-sm">
                    {booking.room?.roomType}
                  </span>

                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <img src={assets.locationIcon} alt="location-icon" />
                    <span>{booking.hotel?.address}</span>
                  </div>
                </div>
              </div>

              {/* ---- Date & Timings ---- */}
              <div className="flex flex-col justify-center text-sm text-gray-600 mt-4 md:mt-0">
                <p>Check-in: {formatDate(booking.checkInDate)}</p>
                <p>Check-out: {formatDate(booking.checkOutDate)}</p>
              </div>

              {/* ---- Payment Status ---- */}
              <div className="flex flex-col items-start justify-center pt-3 mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      booking.isPaid ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></div>

                  <p
                    className={`text-sm ${
                      booking.isPaid ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {booking.isPaid ? 'Paid' : 'Unpaid'}
                  </p>
                </div>

                {!booking.isPaid && (
                  <button className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer">
                    Pay Now
                  </button>
                )}
              </div>

            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No bookings found.
          </p>
        )}

      </div>
    </div>
  )
}

export default MyBookings

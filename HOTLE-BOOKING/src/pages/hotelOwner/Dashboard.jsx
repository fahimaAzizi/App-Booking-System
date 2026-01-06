import React from 'react'

const Dashboard = () => {
  return (
   <div className="p-6">
      {/* Page Title */}
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations."
      />
      {/* Stats Cards */}
      <div className="flex gap-4 my-8 flex-wrap">
        
        {/* Total Bookings */}
        <div className="bg-primary/5 border border-primary/10 rounded flex items-center gap-4 p-4 pr-8">
          <img
            src={assets.totalBookingIcon}
            alt="Bookings"
            className="h-10 max-sm:hidden"
          />
          <div>
            <p className="text-gray-500 text-sm">Total Bookings</p>
            <p className="text-xl font-semibold">{totalBookings}</p>
          </div>
        </div>
  )
}

export default Dashboard
import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
  // Temporary static values (later these will come from backend)
 const [dashboardData, setDashboradData] = useState(dashboardDummyData)

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

        {/* Total Revenue */}
        <div className="bg-primary/5 border border-primary/10 rounded flex items-center gap-4 p-4 pr-8">
          <img
            src={assets.totalRevenueIcon}
            alt="Revenue"
            className="h-10 max-sm:hidden"
          />
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <p className="text-xl font-semibold">$ { dashboardData.totalRevenue}</p>
          </div>
        </div>

        {/* Total Rooms */}
        <div className="bg-primary/5 border border-primary/10 rounded flex items-center gap-4 p-4 pr-8">
          <img
            src={assets.totalRoomIcon}
            alt="Rooms"
            className="h-10 max-sm:hidden"
          />
          <div>
            <p className="text-gray-500 text-sm">Total Rooms</p>
            <p className="text-xl font-semibold">{totalRooms}</p>
          </div>
        </div>
        
</h2>

<div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
  <table className="w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="py-3 px-4 text-gray-800 font-medium">User Name</th>
        <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
          Room Name
        </th>
        <th className="py-3 px-4 text-gray-800 font-medium">
          Total Amount
        </th>
        <th className="py-3 px-4 text-gray-800 font-medium">
          Payment Status
        </th>
      </tr>
    </thead>
        {/* Dummy data (later from backend) */}
      <tr className="border-t">
        <td className="py-3 px-4">Ali Khan</td>
        <td className="py-3 px-4 max-sm:hidden">Deluxe Room</td>
        <td className="py-3 px-4">$250</td>
        <td className="py-3 px-4 text-green-600 font-medium">Paid</td>
      </tr>


      </div>
    </div>
  );
};

export default Dashboard;

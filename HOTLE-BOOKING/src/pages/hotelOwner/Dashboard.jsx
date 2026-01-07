import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Dashboard = () => {
  // Temporary static values (later these will come from backend)
  const totalBookings = 120;
  const totalRevenue = "$8,450";
  const totalRooms = 35;

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
            <p className="text-xl font-semibold">{totalRevenue}</p>
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

      </div>
    </div>
  );
};

export default Dashboard;

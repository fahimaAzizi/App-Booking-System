import React, { useState } from "react";
import Title from "../components/Title";
import { assets, dashboardDummyData } from "../assets/assets";

const Dashboard = () => {
  const [dashboardData ,setDashboardData] = useState(dashboardDummyData);

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
      <div className="flex gap-4 my-8 ">

        {/* Total Bookings */}
        <div className="bg-primary/3 border border-primary/10 rounded flex items-center gap-4 p-4 pr-8">
          <img
            src={assets.totalBookingIcon}
            alt="Bookings"
            className="h-10 max-sm:hidden"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-gray-500 text-sm">Total Bookings</p>
            <p className="text-xl font-semibold">
              {dashboardData.totalBookings}
            </p>
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
            <p className="text-xl font-semibold">
              $ {dashboardData.totalRevenue}
            </p>
          </div>
        </div>

      </div>

      

       
      </div>
    
  );
};

export default Dashboard;

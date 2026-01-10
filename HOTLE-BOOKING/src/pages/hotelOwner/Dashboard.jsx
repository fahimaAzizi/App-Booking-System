import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData] = useState(dashboardDummyData);

  return (
    <div className="p-6">
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations."
      />

      <div className="flex gap-4 my-8 flex-wrap">
        <div className="bg-primary/5 border border-primary/10 rounded flex items-center gap-4 p-4 pr-8">
          <img
            src={assets.totalBookingIcon}
            alt="Bookings"
            className="h-10 max-sm:hidden"
          />
          <div>
            <p className="text-gray-500 text-sm">Total Bookings</p>
            <p className="text-xl font-semibold">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded flex items-center gap-4 p-4 pr-8">
          <img
            src={assets.totalRevenueIcon}
            alt="Revenue"
            className="h-10 max-sm:hidden"
          />
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <p className="text-xl font-semibold">
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>

      <div className="w-full max-w-3xl border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 font-medium">User Name</th>
              <th className="py-3 px-4 font-medium max-sm:hidden">
                Room Name
              </th>
              <th className="py-3 px-4 font-medium">Total Amount</th>
              <th className="py-3 px-4 font-medium">Payment Status</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-3 px-4">{item.user.username}</td>
                <td className="py-3 px-4 max-sm:hidden">
                  {item.room.roomType}
                </td>
                <td className="py-3 px-4">${item.totalPrice}</td>
                <td className="py-3 px-4 font-medium">
                  <button
                    className={`py-1 px-3 text-xs rounded-full ${
                      item.isPaid
                        ? "bg-green-200 text-green-600"
                        : "bg-amber-200 text-yellow-600"
                    }`}
                  >
                    {item.isPaid ? "Completed" : "Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

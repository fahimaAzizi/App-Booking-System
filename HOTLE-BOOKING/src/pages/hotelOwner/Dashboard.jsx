import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../conext/AppContext";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    bookings: []
  });
  const [loading, setLoading] = useState(true);
  const {axios , getToken} = useAppContext();

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get('/api/bookings/hotel', {
        headers: { Authorization: `Bearer ${await getToken()}` }
      });

      if (data.success) {
        setDashboardData({
          totalBookings: data.dashboardData.totalBookings,
          totalRevenue: data.dashboardData.totalRevenue,
          bookings: data.dashboardData.bookings
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

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
            {loading ? (
              <tr>
                <td colSpan="4" className="py-8 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-500">Loading...</span>
                  </div>
                </td>
              </tr>
            ) : dashboardData.bookings.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-8 text-center text-gray-500">
                  No bookings yet
                </td>
              </tr>
            ) : (
              dashboardData.bookings.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-4">{item.user ? item.user.username : 'Guest'}</td>
                  <td className="py-3 px-4 max-sm:hidden">
                    {item.room ? item.room.roomType : 'Room'}
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

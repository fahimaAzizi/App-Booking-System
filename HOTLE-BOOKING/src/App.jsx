import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar.jsx';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import { useAppContext } from './conext/AppContext.jsx';
import { Toaster } from 'react-hot-toast';
import { useUser, useAuth } from "@clerk/clerk-react";

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const AllRooms = lazy(() => import('./pages/AllRooms'));
const RoomDetails = lazy(() => import('./pages/RoomDetails'));
const MyBookings = lazy(() => import('./pages/MyBookings'));
const Dashboard = lazy(() => import('./pages/hotelOwner/Dashboard'));
const AddRoom = lazy(() => import('./pages/hotelOwner/AddRoom'));
const ListRoom = lazy(() => import('./pages/hotelOwner/ListRoom'));

// Loading component
const Loading = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");
  const { showHotelReg } = useAppContext();
  const { user, isLoaded } = useUser();

  return (
    <div>
      <Toaster position="top-right" />

      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}

      <div className="min-h-[70vh]">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<AllRooms />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/my-bookings" element={<MyBookings />} />

            <Route path="/owner" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="add-room" element={<AddRoom />} />
              <Route path="list-room" element={<ListRoom />} />
            </Route>
          </Routes>
        </Suspense>
      </div>

      {!isOwnerPath && <Footer />}
    </div>
  );
};

export default App;

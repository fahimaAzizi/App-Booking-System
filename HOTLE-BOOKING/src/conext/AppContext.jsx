import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();

  const { user } = useUser();
  const { getToken } = useAuth();

  const [isOwner, setIsOwner] = useState(false);
  const [showHotelReg, setShowHotelReg] = useState(false);
  const [searchedCities, setSearchedCities] = useState([]);

  // ✅ Axios instance (FIXED)
  const axiosInstance = axios.create({
    baseURL:
      import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  });

  // ✅ Fetch logged-in user data
  const fetchUser = async () => {
    try {
      const token = await getToken();

      // stop if no token
      if (!token) return;

      const response = await axiosInstance.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = response.data;

      if (data.success) {
        setIsOwner(data.role === "hotelOwner");
        setSearchedCities(data.recentSearchedCities || []);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      toast.error(
        error.response?.data?.message || "Failed to load user"
      );
    }
  };

  // ✅ Run when user logs in
  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  // ✅ Context values
  const value = {
    currency,
    navigate,
    user,
    getToken,
    isOwner,
    setIsOwner,
    axios: axiosInstance,
    showHotelReg,
    setShowHotelReg,
    searchedCities,
    setSearchedCities,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// ✅ Custom Hook
export const useAppContext = () => useContext(AppContext);

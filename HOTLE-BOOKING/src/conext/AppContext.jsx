import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
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

  // ✅ Memoized Axios instance
  const axiosInstance = useMemo(() => axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  }), []);

  // ✅ Axios interceptor to attach token automatically
  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(async (config) => {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [getToken, axiosInstance]);

  // ✅ Fetch logged-in user data
  const fetchUser = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/user"); // matches backend: /api/user
      const data = response.data;

      if (data.success) {
        setIsOwner(data.role === "hotelOwner");
        setSearchedCities(data.recentSearchedCities || []);
      }
    } catch (error) {
     
      toast.error(error.response?.data?.message || "Failed to load user");
    }
  }, [axiosInstance]);

  // ✅ Run when user logs in
  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user, fetchUser]);

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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// ✅ Custom Hook
export const useAppContext = () => useContext(AppContext);

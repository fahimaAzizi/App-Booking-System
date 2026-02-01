  import { createContext, useContext, useState } from "react";
import { dashboardDummyData } from "../assets/assets";
import {useNavigate} from "react-router-dom";
import {useUser , useAuth} from "@clerk/clerk-react"

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const currency = import.meta.env.VITE_CURRNCY || "$";
  const navigate = useNavigate();
  const {user} = useUser();
  const { getToken} = useAuth();


  const value = {
    dashboardData,
    setDashboardData,
    user,
    setUser,
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useAppContext = () =>
 useContext(AppContext);


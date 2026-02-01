  import { createContext, useContext, useState } from "react";
import { dashboardDummyData } from "../assets/assets";
import {useNavigate} from "react-router-dom"

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const currency = import.meta.env.VITE_CURRNCY || "$";
  const navigate = useNavigate()


  
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

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


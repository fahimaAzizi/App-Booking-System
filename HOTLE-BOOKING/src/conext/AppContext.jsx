  import { createContext, useContext, useState } from "react";
import { dashboardDummyData } from "../assets/assets";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Global states
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
export const useAppContext = () => {
  return useContext(AppContext);
};

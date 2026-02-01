  import { createContext, useContext, useState } from "react";
import { dashboardDummyData } from "../assets/assets";
import {useNavigate} from "react-router-dom";
import {useUser , useAuth} from "@clerk/clerk-react"
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const currency = import.meta.env.VITE_CURRNCY || "$";
  const navigate = useNavigate();
  const {user} = useUser();
  const { getToken} = useAuth();

  const [isOwner, setIsOwner] = useState(false)
  const [showHotelReg, setShowHotelReg] = useState(false);

  const


  const value = {
    currency, navigate, user, getToken,isOwner, setIsOwner ,axios,
    showHotelReg, setShowHotelReg,
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


import { createContext, useState } from "react";

const MyContext = createContext();
export default MyContext;
export const MyState = ({ children }) => {
  const [tripData, setTripData] = useState({
    cityName: "",
    travelerMember: "just me" | "a couple" | "family" | "friends",
      startDate: '',
      endDate: '',
      totalDays: '',
    budget: "cheap" | "moderate" | "luxury",
  });

  return (
    <MyContext.Provider
      value={{
        tripData,
        setTripData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};



import { getCurrentDate } from "@/lib/utils";
import React, { useState } from "react";

export const CalendarContext = React.createContext({
  month: 0,
  year: 0,
  yearCheck: 0,
  setYear: (i: number) => {},
  setMonth: (i: number) => {},
  setYearCheck: (i: number) => {},
});

const CalendarProvider = ({ children }) => {
  const date = getCurrentDate();
  const [month, setMonth] = useState(date.month);
  const [year, setYear] = useState(date.year);
  const [yearCheck, setYearCheck] = useState<number>(
    date.year
  );
  const contextValue = {
    month,
    setMonth,
    year,
    setYear,
    yearCheck,
    setYearCheck,
  };
  return (
    <CalendarContext.Provider value={contextValue}>
      {children}
    </CalendarContext.Provider>
  );
};
export default CalendarProvider;

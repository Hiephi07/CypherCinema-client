import { getCurrentDate } from "@/lib/utils";
import styles from "./Calendar.module.scss";
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { months, years } from "@/_constant";
import { CalendarContext } from "@/_context/CalendarProvider";

const Calendar = () => {
  const [toggleYear, setToggleYear] = useState(false);

  const date = getCurrentDate();
  const {
    month,
    setMonth,
    year,
    setYear,
    yearCheck,
    setYearCheck,
  } = useContext(CalendarContext);

  return (
    <div className={styles["calendar-wrapper"]}>
      <div className={styles["calendar-arrow_top"]}></div>
      <div className={styles["calendar-menu"]}>
        <div className="relative w-full h-full max-w-[260px] max-h-[255px]">
          <div className="flex flex-col items-center justify-between">
            {/* header */}
            <div className="flex flex-row items-center justify-between w-full h-full">
              <button
                className="border-none m-0"
                onClick={() => setYear(year - 1)}
              >
                <span className="rounded-[50%] hover:bg-[var(--border-color)] border-0 border-solid border-[white] w-[25px] h-[25px]  flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="var(--icon-color)"
                    aria-hidden="true"
                    className=" w-[20px] h-[20px] "
                  >
                    <path d="M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"></path>
                  </svg>
                </span>
              </button>
              <div
                className="cursor-pointer text-center flex items-center justify-center hover:bg-[var(--border-color)] w-full rounded-[4px] py-[4px]"
                onClick={() => setToggleYear(!toggleYear)}
              >
                {year}
              </div>
              <button
                className="border-none m-0"
                onClick={() => setYear(year + 1)}
              >
                <span className="rounded-[50%] hover:bg-[var(--border-color)] border-0 border-solid border-[white] w-[25px] h-[25px]  flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="var(--icon-color)"
                    aria-hidden="true"
                    className="w-[20px] h-[20px] "
                  >
                    <path d="M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"></path>
                  </svg>
                </span>
              </button>
              {toggleYear && (
                <div className="absolute h-full top-0 left-0 w-full bg-[var(--bg-color)] ">
                  <div className="h-full max-h-[200px] overflow-y-scroll">
                    {years.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-row w-full items-center justify-between flex-wrap "
                      >
                        {item.map((i, idx) => (
                          <div
                            key={idx}
                            onClick={() => {
                              setYear(i);
                            }}
                            className="w-[33%] p-1"
                          >
                            <div
                              className={`text-center cursor-pointer ${
                                i > date.year
                                  ? styles["disable"]
                                  : i == year
                                  ? styles["active"]
                                  : ""
                              } rounded-[4px] hover:bg-[var(--border-color)]  py-[8px] px-[4px] `}
                            >
                              {" "}
                              {item[idx]}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      setToggleYear(!toggleYear)
                    }
                    className="flex justify-center items-center w-full hover:bg-[var(--border-color)] py-1 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-[20px] h-[20px]"
                    >
                      <path d="M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"></path>
                      <path d="M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"></path>
                      <path d="M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"></path>
                      <path d="M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"></path>
                    </svg>
                  </button>
                </div>
              )}
            </div>
            {/* row 1  */}
            {months.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-row w-full items-center justify-between flex-wrap "
              >
                {/* col 1 */}
                {item.month.map((mon, idx) => (
                  <div
                    className="w-[33%] p-1"
                    key={idx}
                    onClick={() => {
                      if (
                        mon <= date.month &&
                        yearCheck <= date.year
                      ) {
                        setMonth(mon);
                        setYearCheck(year);
                      } else {
                        console.log("ok");
                        return;
                      }
                    }}
                  >
                    <div
                      className={`text-center cursor-pointer ${
                        mon == month && year == yearCheck
                          ? styles["active"]
                          : mon > date.month &&
                            year == date.year
                          ? styles["disable"]
                          : ""
                      } ${
                        year > date.year
                          ? styles["disable"]
                          : ""
                      } rounded-[4px] hover:bg-[var(--border-color)]  py-[8px] px-[2px] `}
                    >
                      {" "}
                      {item.text[idx]}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

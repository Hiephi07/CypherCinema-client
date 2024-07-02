import React, { useState } from "react";
import styles from "./HistoryPage.module.scss";
import Calendar from "@/components/client/Calendar/Calendar";

const HistoryPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <div className="pt-[136px] text-[var(--theme-text)]  w-full max-w-[1330px] mx-auto mb-[51px] overflow-visible">
      <div className={styles["form-row"]}>
        <div className="w-full max-w-[857px]">
          <h2 className="text-[25.6px] font-[700] leading-[33.28px] ">
            {" "}
            Lịch sử giao dịch{" "}
          </h2>
        </div>

        <div className={styles["select-container"]}>
          <select
            className="border border-solid border-[var(--border-color)] rounded-[4px]  py-[8px] text-[16px] w-full  pl-[12px] appearance-none "
            name=""
            id=""
          >
            <option value=""> Đặt vé </option>
            <option value=""> Điểm RP </option>
          </select>
        </div>

        <div className="relative overflow-visible">
          <div className={styles["calendar-container"]}>
            <input
              onClick={() => setShowCalendar(!showCalendar)}
              inputMode="none"
              className="w-full h-full border border-solid border-[var(--border-color)] py-[10px] rounded-[4px] pl-[3rem] hover:border-[#fff] transition duration-300 cursor-pointer"
              defaultValue="10/2024"
              readOnly
            />
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden="true"
                className="absolute cursor-pointer w-[20px] h-[20px] transform  translate-y-[-50%] top-[50%] left-[1rem] "
              >
                <path d="M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z" />
                <path d="M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" />
                <path d="M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z" />
                <path d="M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z" />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              aria-hidden="true"
              className="absolute w-[20px] h-[20px] transform translate-y-[-50%] top-[50%] right-[1rem]"
            >
              <path d="M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z" />
              <path d="M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z" />
            </svg>
          </div>
          {showCalendar ? <Calendar /> : ""}
        </div>
      </div>

      {/* down */}
      <div className={styles["table-container"]}>
        <table
          className="rounded-[15px] border text-[14.4px] leading-[23.04px] max-w-[1300px] w-full border-[var(--border-color)] border-solid border-separate h-full "
          border={1}
        >
          <thead>
            <tr className="bg-[#282c3f]">
              <th className="text-center">STT</th>
              <th className="text-center">
                Thời gian giao dịch
              </th>
              <th className="text-center">Mã lấy vé</th>
              <th className="text-left">Thông tin rạp</th>
              <th className="text-right">Tổng tiền</th>
              <th className="text-right">Điểm RP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-right" colSpan={4}>
                <b>Tổng cộng</b>
              </td>
              <td className="text-right">
                <span style={{ display: "none" }}>
                  <b>0&nbsp;VND</b>
                </span>
              </td>
              <td className="text-right">
                <b>0</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;

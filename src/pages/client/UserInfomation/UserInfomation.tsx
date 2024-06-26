import React, { useState } from "react";
import styles from "./UserInfomation.module.scss";
import {
  selectCity,
  selectDay,
  selectMonth,
  selectYear,
  userPoint,
} from "@/_constant";
import { Button } from "@/components/ui/button";
import Day from "./Day/Day";
import { getPositionEl } from "@/lib/utils";
import SelectDropdown from "@/components/client/SelectDropdown/SelectDropdown";

const UserInfomation = () => {
  const [type, setType] = useState("");
  const [day, setDay] = useState(" Chọn ngày");
  const [month, setMonth] = useState(" Chọn tháng");
  const [year, setYear] = useState(" Chọn năm");
  const [city, setCity] = useState(" Chọn Tỉnh/Thành phố");
  const [selectPosition, setSelectPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  // count distance of el
  const handleVisibleSelect = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    type: string
  ) => {
    setType(type);

    const target = e.target as HTMLElement;

    const rect = getPositionEl(target);

    if (target.classList.contains(`${styles.selection}`)) {
      //   const rect = target.getBoundingClientRect();
      setSelectPosition({
        x: rect.x,
        y: rect.y,
        visible: !selectPosition.visible,
      });
    } else {
      return;
    }
  };
  return (
    <>
      <section
        id="userInfo"
        className="pt-[142px] mb-[80px]"
      >
        <div className="w-full max-w-[800px] mx-auto">
          <div className="pb-[30px]">
            <h1 className="font-bold  text-#fff text-center text-[25.6px]">
              Tài khoản
            </h1>
          </div>
          {/* Box info */}
          <div className="px-[15px] ">
            <div className=" px-[20px] py-[25px] mx-auto border border-solid border-#454D6A rounded-[6px] ">
              <div className={styles["avatar-content"]}>
                <div className="w-[full] flex  mx-auto items-center">
                  <div className="w-[150px] h-[150px] ">
                    <img
                      className="w-full h-full rounded-full border border-solid border-#72be43 min-w-[150px]"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="pl-[16px]">
                  <h4 className="text-#72be43 font-black mb-[15px] ">
                    User Name
                  </h4>
                  <div className="mb-[10px]">
                    <ul
                      className={
                        styles["avatar-content__detail"]
                      }
                    >
                      {userPoint.map((item, index) => {
                        const isInline =
                          index <= 1 ||
                          (index > 1 && index <= 3);
                        const isIndexFinal =
                          index === userPoint.length - 1;
                        return (
                          <li
                            className={`text-[16px] mb-[5px]  ${
                              isInline
                                ? "inline-block w-[40%]"
                                : "block"
                            }`}
                            key={index}
                          >
                            <span
                              className={` font-normal ${
                                isIndexFinal
                                  ? "text-[14px] text-#ffc"
                                  : "text-#fff"
                              }`}
                            >
                              {item.title}
                            </span>
                            <span
                              className={`text-#72be43 ${
                                isIndexFinal ? "hidden" : ""
                              }`}
                            >
                              {" "}
                              0
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="border-dashed my-[30px] border-#454D6A" />
              <div className="">
                <form action="">
                  <div className="grid grid-cols-2 mb-3">
                    <div className="pr-[10px]">
                      <label
                        htmlFor=""
                        className="text-#fff text-[14px] inline-block mb-[10px]"
                      >
                        Họ *
                      </label>
                      <input
                        type="text"
                        className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                        placeholder="Nguyễn"
                      />
                    </div>
                    <div className="pl-[10px]">
                      <label
                        htmlFor=""
                        className="text-#fff text-[14px] inline-block mb-[10px]"
                      >
                        Tên đệm và tên *
                      </label>
                      <input
                        type="text"
                        className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                        placeholder="Đức"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mb-3">
                    <div className="">
                      <label
                        htmlFor=""
                        className="text-#fff text-[14px] inline-block mb-[10px]"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                        placeholder="Nguyentrungduc2807@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 mb-3">
                    <div className="">
                      <label
                        htmlFor=""
                        className="text-#fff text-[14px] inline-block mb-[10px]"
                      >
                        Số điện thoại *
                      </label>
                      <input
                        type="number"
                        className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                        placeholder="0352359199"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 mb-3">
                    <div className="">
                      <label
                        htmlFor=""
                        className="text-#fff text-[14px] inline-block mb-[10px]"
                      >
                        Giới tính *
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                      >
                        <option
                          value="male"
                          className={` hover:bg-#72be43 p-5`}
                        >
                          Nam
                        </option>
                        <option value="female">Nữ</option>
                        <option value="other">Khác</option>
                      </select>
                    </div>
                  </div>
                  <p className={styles["form-row-wide"]}>
                    <label htmlFor="" className="block">
                      Ngày sinh *
                    </label>
                    <span
                      className={styles["select-parent"]}
                    >
                      {/* select day */}
                      <span
                        className={styles["selection"]}
                        onClick={(e) =>
                          handleVisibleSelect(e, "day")
                        }
                      >
                        <select
                          name="birthday"
                          id=""
                          className={styles["select-Input"]}
                          defaultValue={day}
                        >
                          <option value="">
                            Chọn ngày
                          </option>
                          {selectDay.data.map(
                            (item, idx) => {
                              return (
                                <option
                                  key={idx}
                                  value={item}
                                >
                                  {" "}
                                  {item}{" "}
                                </option>
                              );
                            }
                          )}
                        </select>
                        <span>
                          <span className="inline-block leading-[40.112px] ">
                            {day}
                          </span>
                          <span
                            className={
                              styles["select--arrow"]
                            }
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      {/* select month */}
                      <span
                        className={styles["selection"]}
                        onClick={(e) =>
                          handleVisibleSelect(e, "month")
                        }
                      >
                        <select
                          name=""
                          id=""
                          className={styles["select-Input"]}
                          defaultValue={month}
                        >
                          <option value="">
                            Chọn ngày
                          </option>
                          <option value="1">1</option>
                        </select>
                        <span>
                          <span className="inline-block leading-[40.112px] ">
                            {" "}
                            {month}
                          </span>
                          <span
                            className={
                              styles["select--arrow"]
                            }
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                      {/* select year */}
                      <span
                        className={styles["selection"]}
                        onClick={(e) =>
                          handleVisibleSelect(e, "year")
                        }
                      >
                        <select
                          name=""
                          id=""
                          className={styles["select-Input"]}
                          defaultValue={year}
                        >
                          <option value="">
                            Chọn ngày
                          </option>
                        </select>
                        <span>
                          <span className="inline-block leading-[40.112px] ">
                            {year}
                          </span>
                          <span
                            className={
                              styles["select--arrow"]
                            }
                          >
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                    </span>
                  </p>
                  <p
                    className={`${styles["form-row-wide"]} my-4`}
                  >
                    <label htmlFor="">
                      {" "}
                      Tỉnh/Thành phố *
                    </label>
                    <span
                      className={`${styles["span-lap"]} ${styles["selection"]}  `}
                      onClick={(e) =>
                        handleVisibleSelect(e, "city")
                      }
                    >
                      <select
                        name=""
                        id=""
                        className={styles["select-Input"]}
                        defaultValue={city}
                      >
                        <option value="">Chọn ngày</option>

                        <option value="31">31</option>
                      </select>
                      <span>
                        <span className="inline-block leading-[40.112px] ">
                          {city}
                        </span>
                        <span
                          className={
                            styles["select--arrow"]
                          }
                        >
                          <b role="presentation"></b>
                        </span>
                      </span>
                    </span>
                  </p>

                  <div className="grid grid-cols-1 mb-3">
                    <div className="">
                      <label
                        htmlFor=""
                        className="text-#fff text-[14px] inline-block mb-[10px]"
                      >
                        Địa chỉ *
                      </label>
                      <input
                        type="email"
                        className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                        placeholder="Hà Nội"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-end col-span-2">
                    <Button className="bg-#72be43 w-[33%] hover:bg-#5B9836 px-2 py-[19px] max-h-4 font-semibold tracking-wider text-[14px] text-#fff rounded uppercase">
                      Cập nhật
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {selectPosition.visible && (
        <SelectDropdown
          selectPosition={selectPosition}
          type={
            type == "day"
              ? selectDay
              : type == "month"
              ? selectMonth
              : type == "year"
              ? selectYear
              : selectCity
          }
          setValue={
            type == "day"
              ? setDay
              : type == "month"
              ? setMonth
              : type == "year"
              ? setYear
              : setCity
          }
          toggle={setSelectPosition}
        />
      )}
    </>
  );
};

export default UserInfomation;

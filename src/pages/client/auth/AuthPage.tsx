import React, { useEffect, useState } from "react";
import styles from "./AuthPage.module.scss";
import SelectDropdown from "@/components/client/SelectDropdown/SelectDropdown";
import {
  selectCity,
  selectDay,
  selectYear,
} from "@/_constant";
import { selectMonth } from "../../../_constant";
const AuthPage = () => {
  const [type, setType] = useState("");
  const [day, setDay] = useState(" Chọn ngày");
  const [month, setMonth] = useState(" Chọn tháng");
  const [year, setYear] = useState(" Chọn năm");
  const [city, setCity] = useState(" Chọn Tỉnh/Thành phố");

  console.log(
    document.getElementsByClassName(
      `${styles["selection"]}`
    )
  );
  useEffect(() => {
    console.log(day, month, year);
  }, [day, month, year]);
  const [selectPosition, setSelectPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  // count distance of el
  const getPositionEl = (el: HTMLElement) => {
    let totalOffsetX = 0;
    let totalOffsetY = 0;

    while (el) {
      totalOffsetX += el.offsetLeft;
      totalOffsetY += el.offsetTop;
      el = el.offsetParent;
    }
    return { x: totalOffsetX, y: totalOffsetY };
  };
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
      <div className={styles["content-area"]}>
        <div className="flex max-w-[1330px] mx-auto flex-wrap flex-row justify-center">
          {/* form login */}
          <div className={styles["login-form"]}>
            <div>
              <h2 className=""> Đăng nhập tài khoản</h2>
              <form className="w-full" action="">
                <p className="w-full">
                  <label htmlFor="">Email *</label>
                  <input
                    type="email"
                    placeholder="Tài khoản hoặc địa chỉ email"
                    name=""
                  />
                </p>
                <p className="w-full">
                  <label htmlFor="">Mật khẩu *</label>
                  <input
                    type="password"
                    placeholder="Mật khẩu "
                    name=""
                  />
                </p>
                <p className="text-[12.8px] text-right leading-[20.48px] mb-[15px]  ">
                  <a
                    className="underline text-[var(--color-green-300)] hover:text-[var(--primary-color)] duration-200"
                    href="/auth/forgot-password"
                  >
                    {" "}
                    Quên mật khẩu?
                  </a>
                </p>
                <button> Đăng nhập</button>
              </form>
            </div>
          </div>
          {/* register form */}
          <div className={styles["register-form"]}>
            <div>
              <h2> Đăng ký tài khoản </h2>
              <form action="">
                <p className={styles["form-row"]}>
                  <label htmlFor=""> Họ * </label>
                  <input type="text" />
                </p>
                <p className={styles["form-row"]}>
                  <label htmlFor="">
                    {" "}
                    Tên đệm và tên *{" "}
                  </label>
                  <input type="text" />
                </p>
                <p className={styles["form-row"]}>
                  <label htmlFor="" className="block">
                    {" "}
                    Giới tính *
                  </label>
                  <span className={styles["radio-list"]}>
                    <label htmlFor="">
                      <input
                        type="checkbox"
                        className={
                          styles["custom-checkbox"]
                        }
                      />{" "}
                      <span
                        className={`${styles["check-mark"]} ${styles.radio}`}
                      ></span>{" "}
                      Nam
                    </label>
                    <label htmlFor="">
                      <input
                        type="checkbox"
                        className={
                          styles["custom-checkbox"]
                        }
                      />{" "}
                      <span
                        className={`${styles["check-mark"]} ${styles.radio}`}
                      ></span>{" "}
                      Nữ
                    </label>
                    <label htmlFor="">
                      <input
                        type="checkbox"
                        className={
                          styles["custom-checkbox"]
                        }
                      />{" "}
                      <span
                        className={`${styles["check-mark"]} ${styles.radio}`}
                      ></span>{" "}
                      Khác
                    </label>
                  </span>
                </p>
                <p className={styles["form-row"]}>
                  <label htmlFor="">
                    {" "}
                    Địa chỉ email *{" "}
                  </label>
                  <input type="email" />
                </p>
                <p className={styles["form-row"]}>
                  <label htmlFor=""> Mật khẩu * </label>
                  <input type="password" />
                </p>
                <p className={styles["form-row"]}>
                  <label htmlFor="">
                    {" "}
                    Nhập lại mật khẩu *
                  </label>
                  <input type="password" />
                </p>
                <p className={styles["form-row-wide"]}>
                  <label htmlFor=""> Số điện thoại *</label>
                  <input type="text" />
                </p>
                <p className={styles["form-row-wide"]}>
                  <label htmlFor="" className="block">
                    Ngày sinh *
                  </label>
                  <span className={styles["select-parent"]}>
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
                        <option value="">Chọn ngày</option>
                        {selectDay.data.map((item, idx) => {
                          return (
                            <option key={idx} value={item}>
                              {" "}
                              {item}{" "}
                            </option>
                          );
                        })}
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
                        <option value="">Chọn ngày</option>
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
                        <option value="">Chọn ngày</option>
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
                <p className={styles["form-row-wide"]}>
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
                        className={styles["select--arrow"]}
                      >
                        <b role="presentation"></b>
                      </span>
                    </span>
                  </span>
                </p>

                <p className={styles["form-row-wide"]}>
                  <label
                    className="block relative m-0 pl-[30px] cursor-pointer"
                    htmlFor=""
                  >
                    <input
                      type="checkbox"
                      className={styles["custom-checkbox"]}
                    />{" "}
                    <span
                      className={styles["check-mark"]}
                    ></span>
                    Tôi đã đọc, hiểu và đồng ý với các
                    <a
                      href=""
                      className="text-[var(--color-green-300)] underline "
                    >
                      {" "}
                      điều khoản
                    </a>
                  </label>
                </p>
                <p className={styles["form-row-wide"]}>
                  <label
                    className="block relative m-0 pl-[30px] cursor-pointer"
                    htmlFor=""
                  >
                    <input
                      type="checkbox"
                      className={styles["custom-checkbox"]}
                    />{" "}
                    <span
                      className={styles["check-mark"]}
                    ></span>{" "}
                    Nhận thông tin chương trình khuyến mãi
                  </label>
                </p>

                <button type="submit"> Đăng ký</button>
              </form>
            </div>
          </div>
        </div>
      </div>
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

export default AuthPage;

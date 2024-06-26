import React from "react";
import styles from "./RegisterForm.module.scss";

const RegisterForm = () => {
  return (
    <>
      <div className={styles["register-form"]}>
        <div>
          <h2> Đăng ký tài khoản </h2>
          <form action="">
            <p className={styles["form-row"]}>
              <label htmlFor=""> Họ * </label>
              <input type="text" />
            </p>
            <p className={styles["form-row"]}>
              <label htmlFor=""> Tên đệm và tên * </label>
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
                    className={styles["custom-checkbox"]}
                  />{" "}
                  <span
                    className={`${styles["check-mark"]} ${styles.radio}`}
                  ></span>{" "}
                  Nam
                </label>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    className={styles["custom-checkbox"]}
                  />{" "}
                  <span
                    className={`${styles["check-mark"]} ${styles.radio}`}
                  ></span>{" "}
                  Nữ
                </label>
                <label htmlFor="">
                  <input
                    type="checkbox"
                    className={styles["custom-checkbox"]}
                  />{" "}
                  <span
                    className={`${styles["check-mark"]} ${styles.radio}`}
                  ></span>{" "}
                  Khác
                </label>
              </span>
            </p>
            <p className={styles["form-row"]}>
              <label htmlFor=""> Địa chỉ email * </label>
              <input type="email" />
            </p>
            <p className={styles["form-row"]}>
              <label htmlFor=""> Mật khẩu * </label>
              <input type="password" />
            </p>
            <p className={styles["form-row"]}>
              <label htmlFor=""> Nhập lại mật khẩu *</label>
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
                      className={styles["select--arrow"]}
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
                      className={styles["select--arrow"]}
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
                      className={styles["select--arrow"]}
                    >
                      <b role="presentation"></b>
                    </span>
                  </span>
                </span>
              </span>
            </p>
            <p className={styles["form-row-wide"]}>
              <label htmlFor=""> Tỉnh/Thành phố *</label>
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
                  <span className={styles["select--arrow"]}>
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
    </>
  );
};

export default RegisterForm;

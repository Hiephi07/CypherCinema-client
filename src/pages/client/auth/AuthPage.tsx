import React, { useEffect, useState } from "react";
import * as z from "zod";
import styles from "./AuthPage.module.scss";
import SelectDropdown from "@/components/client/SelectDropdown/SelectDropdown";
import { selectCity, selectDay, selectYear } from "@/_constant";
import { selectMonth } from "../../../_constant";
import { getPositionEl } from "@/lib/utils";
import {
  loginSchema,
  registerSchema,
} from "../../../_validations/AuthValidate";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { spawn } from "child_process";

const AuthPage = () => {
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

  type LoginSchema = z.infer<typeof loginSchema>;
  type RegisterSchema = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });
  const regisUser = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onRegister = (data: RegisterSchema) => {
    console.log(data);
  };

  const onLogin = (data: LoginSchema) => {
    console.log(data);
    console.log(errors);
    return new Promise(() => {
      setTimeout(() => {
        console.log(data);
        console.log(errors);
      }, 2000);
    });
  };
  return (
    <>
      <div className={styles["content-area"]}>
        <div className="flex max-w-[1330px] mx-auto flex-wrap flex-row justify-center">
          {/* form login */}
          <div className={styles["login-form"]}>
            <div>
              <h2 className=""> Đăng nhập tài khoản</h2>
              <form className="w-full" onSubmit={handleSubmit(onLogin)}>
                <p className="w-full">
                  <label htmlFor="">Email *</label>
                  <input
                    type="email"
                    placeholder="Tài khoản hoặc địa chỉ email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-[#b20000] text-[14.4px] mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </p>
                <p className="w-full">
                  <label htmlFor="">Mật khẩu *</label>
                  <input
                    type="password"
                    placeholder="Mật khẩu "
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className="text-[#b20000] text-[14.4px] mt-1">
                      {errors.password.message}
                    </span>
                  )}
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
                <button
                  disabled={!isValid}
                  className=" disabled:bg-slate-400 disabled:hover:bg-slate-400 relative"
                >
                  {isSubmitting && (
                    <svg
                      className="animate-spin absolute top-[22%] left-[35%]  h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx={12}
                        cy={12}
                        r={10}
                        stroke="currentColor"
                        strokeWidth={4}
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  )}{" "}
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* register form */}
          <div className={styles["register-form"]}>
            <div>
              <h2> Đăng ký tài khoản </h2>
              <form onSubmit={regisUser.handleSubmit(onRegister)}>
                <p className={styles["form-row"]}>
                  <label htmlFor=""> Họ * </label>
                  <input type="text" {...regisUser.register("firstName")} />
                  {regisUser.formState.errors.firstName && (
                    <span className="text-[#b20000] text-[14.4px]">
                      {regisUser.formState.errors.firstName.message}
                    </span>
                  )}
                </p>
                <p className={styles["form-row"]}>
                  <label htmlFor=""> Tên đệm và tên * </label>
                  <input type="text" {...regisUser.register("lastName")} />
                  {regisUser.formState.errors.lastName && (
                    <span className="text-[#b20000] text-[14.4px]">
                      {regisUser.formState.errors.lastName.message}
                    </span>
                  )}
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
                        {...regisUser.register("gender")}
                        value={0}
                      />{" "}
                      <span
                        className={`${styles["check-mark"]} ${styles.radio}`}
                      ></span>{" "}
                      Nam
                    </label>
                    <label htmlFor="">
                      <input
                        type="checkbox"
                        {...regisUser.register("gender")}
                        value={1}
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
                        {...regisUser.register("gender")}
                        value={2}
                        className={styles["custom-checkbox"]}
                      />{" "}
                      <span
                        className={`${styles["check-mark"]} ${styles.radio}`}
                      ></span>{" "}
                      Khác
                    </label>
                  </span>
                  {regisUser.formState.errors.gender && (
                    <span className="text-[#b20000] text-[14.4px]">
                      {regisUser.formState.errors.gender.message}
                    </span>
                  )}
                </p>
                <p className={styles["form-row"]}>
                  <label htmlFor=""> Địa chỉ email * </label>
                  <input type="email" {...regisUser.register("email")} />{" "}
                  {regisUser.formState.errors.email && (
                    <span className="text-[#b20000] text-[14.4px]">
                      {regisUser.formState.errors.email.message}
                    </span>
                  )}
                </p>
                <p className={styles["form-row"]}>
                  <label htmlFor=""> Mật khẩu * </label>
                  <input type="password" {...regisUser.register("password")} />
                  {regisUser.formState.errors.password && (
                    <span className="text-[#b20000] text-[14.4px]">
                      {regisUser.formState.errors.password.message}
                    </span>
                  )}
                </p>
                <p className={styles["form-row"]}>
                  <label htmlFor=""> Nhập lại mật khẩu *</label>
                  <input
                    type="password"
                    {...regisUser.register("confirmPassword")}
                  />
                  {regisUser.formState.errors.confirmPassword && (
                    <span className="text-[#b20000] text-[14.4px]">
                      {regisUser.formState.errors.confirmPassword.message}
                    </span>
                  )}
                </p>
                <p className={styles["form-row-wide"]}>
                  <label htmlFor=""> Số điện thoại *</label>
                  <input type="text" {...regisUser.register("phone")} />
                </p>
                {regisUser.formState.errors.phone && (
                  <span className="text-[#b20000] text-[14.4px]">
                    {regisUser.formState.errors.phone.message}
                  </span>
                )}
                <p className={styles["form-row-wide"]}>
                  <label htmlFor="" className="block">
                    Ngày sinh *
                  </label>
                  <span className={styles["select-parent"]}>
                    {/* select day */}
                    <span
                      className={styles["selection"]}
                      onClick={(e) => handleVisibleSelect(e, "day")}
                    >
                      <select
                        id=""
                        className={styles["select-Input"]}
                        defaultValue={day}
                        {...regisUser.register("day")}
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
                        <span className={styles["select--arrow"]}>
                          <b role="presentation"></b>
                        </span>
                      </span>
                    </span>

                    {/* select month */}
                    <span
                      className={styles["selection"]}
                      onClick={(e) => handleVisibleSelect(e, "month")}
                    >
                      <select
                        id=""
                        className={styles["select-Input"]}
                        {...regisUser.register("month")}
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
                        <span className={styles["select--arrow"]}>
                          <b role="presentation"></b>
                        </span>
                      </span>
                    </span>
                    {/* select year */}
                    <span
                      className={styles["selection"]}
                      onClick={(e) => handleVisibleSelect(e, "year")}
                    >
                      <select
                        id=""
                        {...regisUser.register("year")}
                        className={styles["select-Input"]}
                        defaultValue={year}
                      >
                        <option value="">Chọn ngày</option>
                      </select>
                      <span>
                        <span className="inline-block leading-[40.112px] ">
                          {year}
                        </span>
                        <span className={styles["select--arrow"]}>
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
                    onClick={(e) => handleVisibleSelect(e, "city")}
                  >
                    <select
                      id=""
                      {...regisUser.register("city")}
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
                      {...regisUser.register("checkbox")}
                    />{" "}
                    <span className={styles["check-mark"]}></span>
                    Tôi đã đọc, hiểu và đồng ý với các
                    <a
                      href=""
                      className="text-[var(--color-green-300)] underline "
                    >
                      {" "}
                      điều khoản
                    </a>
                    {regisUser.formState.errors.checkbox && (
                      <span className="text-[#b20000] text-[14.4px]">
                        {regisUser.formState.errors.checkbox.message}
                      </span>
                    )}
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
                    <span className={styles["check-mark"]}></span> Nhận thông
                    tin chương trình khuyến mãi
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

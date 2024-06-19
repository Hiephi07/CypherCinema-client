import { forgotPassword } from "@/_constant";
import React from "react";
import styles from "./ForgotPassword.module.scss";

const ForgotPasswordPage = () => {
  return (
    <div
      className={`${styles["content-area"]}  pt-[132px] mb-[132px] mx-auto `}
    >
      <div
        className="w-[100%] h-[338px] mx-auto "
        style={{ padding: "0 15px 30px" }}
      >
        <div className="w-[100%] h-[247px] ">
          <div className="text-center text-[var(--theme-text)]">
            <h2
              className="text-[25.6px] h-[33px] leading-[33.28px] font-[700] "
              style={{ margin: "40px 0px" }}
            >
              {" "}
              {forgotPassword.title}{" "}
            </h2>
            <p
              style={{
                margin: "0 0 20.8px",
              }}
            >
              {forgotPassword.description}
            </p>
          </div>
          <form
            action=""
            className="w-[360px] h-[127px] text-[var(--theme-text)] mx-auto "
          >
            <p
              className="leading-[25.6px] w-full "
              style={{
                margin: "0 0 15px",
              }}
            >
              <label
                htmlFor=""
                className="text-[14.4px] leading-[23.04px] w-full"
                style={{ margin: "0 0 10px" }}
              >
                {" "}
                Tên đăng nhập hoặc email
              </label>
              <input
                className="border inline-block border-[#454d6a] rounded-[4px] leading-[25.6px] w-full h-[40px] mt-[10px]"
                style={{
                  boxShadow: "#0000 0px -28.8px 16px 0px ",
                  padding: "0 12px",
                }}
                type="text"
                name=""
                id=""
              />
            </p>
            <button
              className=" bg-[var(--primary-color)] border border-[#000000] rounded-[4px] border-solid font-[700] text-[15.52px] leading-[37.248px] text-center uppercase  w-full h-[39px] "
              style={{
                boxShadow: "#0000 0 0 0 0",
                letterSpacing: "0.4656px",
                margin: "0 15.52px 15.52px 0",
              }}
            >
              {" "}
              Đặt lại mật khẩu{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

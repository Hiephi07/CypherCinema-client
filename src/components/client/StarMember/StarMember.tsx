import React from "react";
import startMember from "@@/assets/images/BHDstarMember/image.png";
import Member1 from "@@/assets/images/BHDstarMember/image-16.png";
import Member2 from "@@/assets/images/BHDstarMember/image-17.png";
import Member3 from "@@/assets/images/BHDstarMember/image-18.png";
import { Link } from "react-router-dom";
import styles from "./StarMember.module.scss";

const StarMember = () => {
  // Xử lý cuộc trang
  const CrollOnTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="bg-[#0d0e14] px-[40px] py-[2rem]">
        <div className="flex justify-center pb-[30px]">
          <img
            className="max-w-[320px]"
            src={startMember}
            alt=""
          />
        </div>
        <div className={styles["member-content"]}>
          <Link onClick={CrollOnTop} to={`#`}>
            <img
              className="max-w-[320px] w-full"
              src={Member1}
              alt=""
            />
          </Link>
          <Link onClick={CrollOnTop} to={`#`}>
            <img
              className="max-w-[320px]"
              src={Member2}
              alt=""
            />
          </Link>
          <Link onClick={CrollOnTop} to={`#`}>
            <img
              className="max-w-[320px]"
              src={Member3}
              alt=""
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link
            onClick={CrollOnTop}
            to={`#`}
            className="uppercase border-[1px] 
        border-solid border-#72be43 text-#fff font-black text-[14px] px-[10px] 
        py-[7px] rounded-[5px] hover:bg-#72be43 transition-all duration-200 text-center"
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </>
  );
};

export default StarMember;

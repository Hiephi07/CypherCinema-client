import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import {
  footerInfo1,
  footerInfo2,
  footerIcons,
  footerInfo3,
} from "@/_constant";

const Footer = () => {
  return (
    <footer>
      <section id="footerTop" className="bg-#090b13 ">
        <div
          className={`flex  text-#fff font-light ${styles["footer-content"]}`}
        >
          <div className="box-left px-6 pb-4 min-w-72">
            <h2 className="font-black">VỀ BHD STAR</h2>
            <span
              className={`${styles.coloredHr} border border-1 border-solid border-#fff block w-28 h-2.5 rounded-full my-4`}
            />
            <ul className="text-14.4px font-semibold">
              {footerInfo1.map((item, idx) => {
                return (
                  <li className=" mb-4" key={idx}>
                    <Link
                      className="all ease-in-out duration-300 hover:text-#72be43"
                      to={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <span className="inline-block mt-4">
              <Link className="" to={``}>
                <img
                  className="w-40 h-22"
                  src="/assets/images/Footer/Accreditation/image-21.png"
                  alt=""
                />
              </Link>
            </span>
          </div>

          <div className="box-center px-6 pb-4 ">
            <h2 className="font-black">
              QUY ĐỊNH ĐIỀU KHOẢN
            </h2>
            <span
              className={`${styles.coloredHr} border border-1 border-solid border-#fff block  h-2.5 rounded-full my-4`}
            />
            <ul className="text-14.4px font-semibold">
              {footerInfo2.map((item, idx) => {
                return (
                  <li className=" mb-4" key={idx}>
                    <Link
                      className="all ease-in-out min-w-[100%] duration-300 hover:text-#72be43"
                      to={item.link}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="box-right px-6 pb-4 max-w-80">
            <h2 className="font-black">
              CHĂM SÓC KHÁCH HÀNG
            </h2>
            <span
              className={`${styles.coloredHr} border border-1 border-solid border-#fff block w-28 h-2.5 rounded-full my-4`}
            />
            <ul className="text-14.4px font-semibold mb-5">
              <li className=" mb-1">
                <span className="block">
                  <strong className="font-black">
                    Hotline:
                  </strong>
                  19002099
                </span>
              </li>
              <li className=" mb-1">
                <span className="block">
                  <strong className="font-black">
                    Giờ làm việc:
                  </strong>{" "}
                  9:00 - 22:00 (Tất cả các ngày bao gồm cả
                  Lễ, Tết)
                </span>
              </li>
              <li className=" mb-1">
                <span className="block">
                  <strong className="font-black">
                    Email hỗ trợ
                  </strong>
                  : cskh@bhdstar.vn
                </span>
              </li>
            </ul>
            <div className="social">
              <h6 className="font-black text-14.4px mb-4">
                MẠNG XÃ HỘI
              </h6>
              <div className="iconSocial flex">
                {footerIcons.map((item, idx) => {
                  return (
                    <Link to={item.link} key={idx}>
                      <img
                        className="mx-2 size-9"
                        src={item.src}
                        alt={item.alt}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="footerBottom"
        className={`bg-#151720  ${styles["footer-bottom"]}`}
      >
        <div
          className={`flex  justify-start items-center  ${styles["footer-info"]}`}
        >
          <div className="w-16 h-16 mr-8 bg-white rounded-full">
            <img
              className="w-full h-full"
              src="/assets/images/Logo/logo.png"
              alt=""
            />
          </div>
          <div className="text-12.8px text-#fff font-light leading-[23.04px]">
            {footerInfo3.map((item, idx) => {
              return (
                <span className="block" key={idx}>
                  <strong> {item.title} </strong>{" "}
                  {item.detail}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

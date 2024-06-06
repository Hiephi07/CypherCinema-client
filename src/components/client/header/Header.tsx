import "./header.scss";
import logo from "../../../assets/images/Logo/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState } from "react";
import { HiMiniTicket } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [selecdOption, setOption] = useState<string>("");

  function handleOptionClick(option: string) {
    setOption(option);
  }
  return (
    <header>
      <nav className="flex justify-between items-center h-24 px-3.5 ">
        {/*Section box letf */}
        <div className="box-left flex justify-start items-center">
          <div className="w-16 h-16 mr-8 bg-white rounded-full">
            <img src={logo} alt="" />
          </div>
          <ul className="flex text-14.4px text-#ffc items-center ">
            <li className="first:mr-1.5">
              <Link className="hover:text-#fff  py-2.5 font-black" to={``}>
                Lịch chiếu
              </Link>
            </li>
            <li className="mx-1.5">
              <Link className="hover:text-#fff  py-2.5 font-black" to={``}>
                Hệ thống rạp
              </Link>
            </li>
            <li className="mx-1.5">
              <Link className="hover:text-#fff py-2.5 font-black " to={``}>
                Khuyến mãi/Sự kiện
              </Link>
            </li>
            <li className="mx-1.5">
              <Link className="hover:text-#fff py-2.5 font-black" to={``}>
                Cửa hàng
              </Link>
            </li>
            <li className="last:ml-1.5">
              <HoverCard openDelay={40}>
                <HoverCardTrigger asChild>
                  <Button
                    variant={"default"}
                    className="transition-all duration-300 ease-in-out border-0 text-#ffc hover:text-#fff py-2.5 font-black mx-1.5 bg-transparent m-0 px-0 hover:bg-transparent"
                  >
                    Khác
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent
                  sideOffset={12}
                  align="start"
                  alignOffset={-10}
                  className="rounded-xl w-56 px-0 text-14.4px bg-transparent border-#bababa py-2.5 min-w-64"
                >
                  <Link
                    to={``}
                    className="hover:bg-#2c2c2c4a hover:text-#72be43 block py-2.5 px-5"
                  >
                    Về chúng tôi
                  </Link>
                  <Link
                    to={``}
                    className="hover:bg-#2c2c2c4a hover:text-#72be43 block py-2.5 px-5"
                  >
                    Dịch vụ quảng cáo
                  </Link>
                  <Link
                    to={``}
                    className="hover:bg-#2c2c2c4a hover:text-#72be43 block py-2.5 px-5"
                  >
                    Tuyển dụng
                  </Link>
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
        </div>

        {/*Section box right */}
        <div className="box-right flex items-center">
          {/* Vị trí */}
          <HoverCard openDelay={0}>
            <HoverCardTrigger asChild>
              <Button className="transition-all duration-300 mx-2 font-extrabold text-15.64px px-5 py-2.5 text-#fff bg-#2c2c2c4a hover:bg-#72be43 border rounded border-#787878">
                <span className="flex items-center">
                  {selecdOption || "Vị trí của bạn"}
                  <FaChevronDown className="ml-2.5 size-3 mt-0.5 text-#c4c5c7" />
                </span>
                <HoverCardContent
                  sideOffset={0}
                  align="end"
                  alignOffset={-8}
                  className="rounded-xl w-56 px-0 text-14.4px bg-transparent border-#bababa py-2.5 min-w-64"
                >
                  <ul className="text-left">
                    <li
                      className={` ${
                        selecdOption === "Hà Nội"
                          ? "bg-#72be43 :text-#ffc"
                          : "hover:bg-#2c2c2c4a hover:text-#72be43"
                      } font-normal  block py-2.5 px-5 `}
                      onClick={() => handleOptionClick("Hà Nội")}
                    >
                      Hà Nội
                    </li>
                    <li
                      className={` ${
                        selecdOption === "TP.Hồ Chí Minh"
                          ? "bg-#72be43 :text-#ffc"
                          : "hover:bg-#2c2c2c4a hover:text-#72be43"
                      } font-normal  block py-2.5 px-5 `}
                      onClick={() => handleOptionClick("TP.Hồ Chí Minh")}
                    >
                      TP.Hồ Chí Minh
                    </li>
                    <li
                      className={` ${
                        selecdOption === "TP.Huế"
                          ? "bg-#72be43 :text-#ffc"
                          : "hover:bg-#2c2c2c4a hover:text-#72be43"
                      } font-normal  block py-2.5 px-5 `}
                      onClick={() => handleOptionClick("TP.Huế")}
                    >
                      TP.Huế
                    </li>
                    <li
                      className={` ${
                        selecdOption === "Đồng Nai"
                          ? "bg-#72be43 :text-#ffc"
                          : "hover:bg-#2c2c2c4a hover:text-#72be43"
                      } font-normal  block py-2.5 px-5 `}
                      onClick={() => handleOptionClick("Đồng Nai")}
                    >
                      Đồng Nai
                    </li>
                  </ul>
                </HoverCardContent>
              </Button>
            </HoverCardTrigger>
          </HoverCard>

          {/* Đăng ký - Đăng nhập */}
          <HoverCard openDelay={0}>
            <HoverCardTrigger asChild>
              <Link
                to={``}
                className="transition-all duration-300 ease-in-out mx-2 border rounded border-#90C63F border-solid text-14.4px px-5 py-2 text-#ffc bg-#2c2c2c4a hover:text-#fff hover:bg-#72be43"
              >
                Đăng nhập/Đăng ký
              </Link>
            </HoverCardTrigger>
            <HoverCardContent
              sideOffset={0}
              align="start"
              alignOffset={-13}
              className="rounded min-w-80 w-56 px-0 bg-#1A1D29 border-#9A9A9A py-2.5"
            >
              <form className="pt-2.5 px-6 mb-4">
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
                  <label className="text-#fff mb-2 text-14.4px" htmlFor="email">
                    Email *
                  </label>
                  <input
                    className="text-14.4px px-5 py-2.5 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720"
                    type="email"
                    id="email"
                    placeholder="Tài khoản hoặc địa chỉ email"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
                  <label className="text-#fff mb-2 text-14.4px" htmlFor="email">
                    Nhật khẩu *
                  </label>
                  <input
                    className="text-14.4px px-5 py-2.5 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720"
                    type="password"
                    id="password"
                    placeholder="Mật khẩu"
                  />
                </div>
                <div className="text-right mb-5">
                  <Link
                    to={``}
                    className="underline text-12.8px text-#b2ec0f hover:text-#72be43"
                  >
                    Quên mật khẩu?
                  </Link>
                </div>
                <Button className="transition-all duration-300 ease-in-out border-#90C63F font-bold w-full mb-5 bg-#72be43 hover:bg-#5B9836 hover:border-#90C63F">
                  ĐĂNG NHẬP
                </Button>
                <Button className="transition-all duration-300 ease-in-out border-#90C63F border font-bold w-full hover:bg-#5B9836">
                  ĐĂNG KÝ THÀNH VIÊN
                </Button>
              </form>
            </HoverCardContent>
          </HoverCard>

          {/* Đặt vé */}
          <Link
            className="  mx-2 ButtonGradientReversed font-black text-15.64px px-5 py-2 text-#fff "
            to={``}
          >
            <span className="flex items-center">
              <HiMiniTicket className="mr-2 size-6 " /> MUA VÉ
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

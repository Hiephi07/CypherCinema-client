import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { GiHamburgerMenu } from "react-icons/gi";

import { FaUser } from "react-icons/fa";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect, useContext } from "react";
import { HiMiniTicket } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { ThemeContext } from "@/_context/ThemeProvider";
import UserDropBox from "./UserDropBox/UserDropBox";

const Header = () => {
  const [selecdOption, setOption] = useState<string | null>(
    null
  );
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setOption(option);
  };

  const [selectArrow, setSelectArrow] = useState(false);
  const [selectArrow2, setSelectArrow2] = useState(false);

  return (
    <>
      <header
        className={`fixed z-50 left-0 top-0 mx-auto  ${
          styles.header
        } ${scrolled ? styles.scrolled : ""}`}
      >
        <nav className="flex justify-between items-center w-full h-full px-3.5 ">
          {/*Section box letf */}
          <div className={styles["box-left"]}>
            <Link
              to="/"
              className={`mr-8 bg-white rounded-full ml-2  ${
                scrolled ? "h-10 w-10" : "w-16 h-16"
              }`}
            >
              <img
                className="w-full h-full"
                src={"/assets/images/Logo/logo.png"}
                alt=""
              />
            </Link>
            <ul
              className={` ${styles["ul-box-left"]} lg:flex md:hidden sm:hidden text-12.8px text-#ffc items-center`}
            >
              <li className="mx-1.5">
                <Link
                  className={`${
                    scrolled
                      ? "hover:text-#72be43"
                      : "hover:text-#fff "
                  } py-2.5 font-black`}
                  to={`/showsTime`}
                >
                  Lịch chiếu
                </Link>
              </li>
              <li className="mx-1.5">
                <Link
                  className={`${
                    scrolled
                      ? "hover:text-#72be43"
                      : "hover:text-#fff "
                  } py-2.5 font-black`}
                  to={`/theater`}
                >
                  Hệ thống rạp
                </Link>
              </li>
              <li className="mx-1.5">
                <Link
                  className={`${
                    scrolled
                      ? "hover:text-#72be43"
                      : "hover:text-#fff "
                  } py-2.5 font-black`}
                  to={`/event`}
                >
                  Sự kiện
                </Link>
              </li>
              <li className="mx-1.5">
                <HoverCard openDelay={200}>
                  <HoverCardTrigger asChild>
                    <Button
                      variant={"default"}
                      className={`${
                        scrolled
                          ? "hover:text-#72be43"
                          : "hover:text-#fff "
                      } transition-all duration-300 ease-in-out border-0 text-#ffc py-2.5 font-black mx-1.5 bg-transparent m-0 px-0 hover:bg-transparent`}
                    >
                      Khác
                      <FaChevronDown className="ml-0.5 size-2 mt-0.5 " />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent
                    sideOffset={1}
                    align="start"
                    alignOffset={-18}
                    className="rounded-xl w-56 px-0 text-12.8px border-#bababa bg-#2c2c2c4a py-2.5 min-w-56 backdrop-blur-[3px]"
                  >
                    <Link
                      to={`/about-us`}
                      className="hover:bg-#2c2c2c4a hover:text-#72be43 block py-2 px-5"
                    >
                      Giới thiệu
                    </Link>
                    <Link
                      to={``}
                      className="hover:bg-#2c2c2c4a hover:text-#72be43 block py-2 px-5"
                    >
                      Dịch vụ quảng cáo
                    </Link>
                    <Link
                      to={``}
                      className="hover:bg-#2c2c2c4a hover:text-#72be43 block py-2 px-5"
                    >
                      Tuyển dụng
                    </Link>
                  </HoverCardContent>
                </HoverCard>
              </li>
            </ul>
          </div>

          {/*Section box right */}
          <div className={styles["box-right"]}>
            <HoverCard openDelay={200}>
              <HoverCardTrigger asChild>
                <Button className="transition-all duration-300 mx-2 h-9 px-3 py-2 text-#fff bg-#2c2c2c4a hover:bg-#72be43 border rounded border-#787878">
                  <span className="flex items-center  text-14.4px">
                    {selecdOption || "Vị trí của bạn"}
                    <FaChevronDown className="ml-2.5 size-3 mt-0.5 text-#c4c5c7" />
                  </span>
                  <HoverCardContent
                    sideOffset={0}
                    align="end"
                    alignOffset={-18}
                    className="rounded-xl w-56 px-0 text-12.8px bg-#2c2c2c4a border-#bababa py-2 min-w-64 backdrop-blur-[3px]"
                  >
                    <ul className="text-left">
                      <li
                        className={` ${
                          selecdOption === "TP.Hồ Chí Minh"
                            ? "bg-#72be43 :text-#ffc"
                            : "hover:bg-#2c2c2c4a hover:text-#72be43"
                        } font-normal  block py-2 px-4`}
                        onClick={() =>
                          handleOptionClick(
                            "TP.Hồ Chí Minh"
                          )
                        }
                      >
                        TP.Hồ Chí Minh
                      </li>
                      <li
                        className={` ${
                          selecdOption === "Hà Nội"
                            ? "bg-#72be43 :text-#ffc"
                            : "hover:bg-#2c2c2c4a hover:text-#72be43"
                        } font-normal  block py-2 px-4 `}
                        onClick={() =>
                          handleOptionClick("Hà Nội")
                        }
                      >
                        Hà Nội
                      </li>
                      <li
                        className={` ${
                          selecdOption === "TP.Huế"
                            ? "bg-#72be43 :text-#ffc"
                            : "hover:bg-#2c2c2c4a hover:text-#72be43"
                        } font-normal  block py-2 px-4 `}
                        onClick={() =>
                          handleOptionClick("TP.Huế")
                        }
                      >
                        TP.Huế
                      </li>
                      <li
                        className={` ${
                          selecdOption === "Đồng Nai"
                            ? "bg-#72be43 :text-#ffc"
                            : "hover:bg-#2c2c2c4a hover:text-#72be43"
                        } font-normal  block py-2 px-4 `}
                        onClick={() =>
                          handleOptionClick("Đồng Nai")
                        }
                      >
                        Đồng Nai
                      </li>
                    </ul>
                  </HoverCardContent>
                </Button>
              </HoverCardTrigger>
            </HoverCard>

            {/* User - Dropdown */}
            <UserDropBox />

            {/* Đăng ký - Đăng nhập */}
            {/* <HoverCard openDelay={200}>
              <HoverCardTrigger asChild>
                <Link
                  to={`/auth`}
                  className="flex items-center transition-all duration-600 ease-in-out mx-2 text-12.8px font-medium px-3 py-2 h-9  border rounded border-#90C63F border-solid text-#ffc bg-#2c2c2c4a hover:text-#fff hover:bg-#72be43"
                >
                  Đăng nhập/Đăng ký
                </Link>
              </HoverCardTrigger>
              <HoverCardContent
                sideOffset={8}
                align="start"
                alignOffset={-100}
                className="rounded min-w-72 w-56 px-2.5 bg-#1A1D29 border-#9A9A9A py-2.5"
              >
                <form className="pt-2.5 px-2 mb-4 text-#fff">
                  <div className="grid w-full max-w-72 items-center gap-1.5 mb-4">
                    <label
                      className="text-#fff mb-0.5 text-12.8px"
                      htmlFor="email"
                    >
                      Email *
                    </label>
                    <input
                      className="text-12.8px text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720"
                      type="email"
                      id="email"
                      placeholder="Tài khoản hoặc địa chỉ email"
                    />
                  </div>
                  <div className="grid w-full max-w-72 items-center gap-1.5 mb-5">
                    <label
                      className="text-#fff mb-0.5 text-12.8px"
                      htmlFor="email"
                    >
                      Nhật khẩu *
                    </label>
                    <input
                      className="text-12.8px text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720"
                      type="password"
                      id="password"
                      placeholder="Mật khẩu"
                    />
                  </div>
                  <div className="text-right mb-5">
                    <Link
                      to={`auth/forgot-password`}
                      className="underline text-10px text-#b2ec0f hover:text-#72be43"
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>
                  <Button
                    type="submit"
                    className="transition-all duration-300 ease-in-out rounded h-8  text-12.8px border-#90C63F font-bold w-full mb-5 bg-#72be43 hover:bg-#5B9836 hover:border-#90C63F"
                  >
                    ĐĂNG NHẬP
                  </Button>
                  <Link
                    to={"/auth"}
                    className="block transition-all duration-300 ease-in-out rounded text-center text-12.8px border-#90C63F border font-bold px-[63px] py-[8px] mb-4 hover:bg-#5B9836"
                  >
                    ĐĂNG KÝ THÀNH VIÊN
                  </Link>
                </form>
              </HoverCardContent>
            </HoverCard> */}

            {/* Đặt vé */}
            {/* <Link
              className={`${styles.ButtonGradientReversed} mx-2 font-black text-15.64px text-#fff`}
              to={``}
            >
              <span className="flex items-center px-3 py-2 h-9">
                <HiMiniTicket className="mr-2 size-6 " />{" "}
                MUA VÉ
              </span>
            </Link> */}

            {/*toggle theme */}
            <button>
              <label className={styles.switch}>
                <span className={styles.sun}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g fill="#ffd43b">
                      <circle r={5} cy={12} cx={12} />
                      <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" />
                    </g>
                  </svg>
                </span>
                <span className={styles.moon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                  </svg>
                </span>
                <input
                  type="checkbox"
                  className={styles.input}
                  onChange={toggleTheme}
                />
                <span className={styles.slider} />
              </label>
            </button>
          </div>

          <div className={styles["mobile"]}>
            <Sheet>
              <SheetTrigger className="flex flex-row gap-[14px] items-center">
                {" "}
                <Link to={"/auth"}>
                  <FaUser className="fill-white stroke-white  w-[18px] h-[24px] " />{" "}
                </Link>
                <GiHamburgerMenu className="fill-white w-[25px] h-[50px]" />
              </SheetTrigger>
              <SheetContent className="text-[var(--theme-text)] ">
                {/* <SheetHeader>
                <SheetTitle className="">
                  Are you absolutely sure?
                </SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will
                  permanently delete your account and remove
                  your data from our servers.
                </SheetDescription>
              </SheetHeader> */}
                <ul className={styles["mobile-nav"]}>
                  <li
                    className={styles["mobile-btn-ticket"]}
                  >
                    <Link
                      className={`${styles.ButtonGradientReversed} mx-2 font-black text-15.64px `}
                      to={``}
                    >
                      <span className="flex items-center px-3 py-2 h-9">
                        <HiMiniTicket className="mr-2 size-6 " />{" "}
                        MUA VÉ
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a href=""> Lịch chiếu </a>
                    <button
                      onClick={() =>
                        setSelectArrow(!selectArrow)
                      }
                      className={`flex items-center transform transition ${
                        selectArrow
                          ? "rotate-[-180deg]"
                          : "rotate-0"
                      }`}
                    >
                      <IoIosArrowDown className="w-[18px] h-[33px] " />
                    </button>
                    {selectArrow && (
                      <ul className="w-full">
                        <li className="!border-none">
                          {" "}
                          Lịch chiếu phim{" "}
                        </li>
                        <li className="!border-none">
                          {" "}
                          Lịch chiếu rạp{" "}
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a href=""> Hệ thống rạp </a>
                  </li>
                  <li>
                    <a href=""> Của hàng </a>
                  </li>
                  <li>
                    <a href="">Khuyến mãi </a>
                  </li>
                  <li>
                    <a href=""> Khác</a>
                    <button
                      onClick={() =>
                        setSelectArrow2(!selectArrow2)
                      }
                      className={`flex items-center transform transition ${
                        selectArrow
                          ? "rotate-[-180deg]"
                          : "rotate-0"
                      }`}
                    >
                      <IoIosArrowDown className="w-[18px] h-[33px] " />
                    </button>
                    {selectArrow2 && (
                      <ul className="w-full">
                        <li className="!border-none">
                          {" "}
                          <a href="/about-us">
                            {" "}
                            Về chúng tôi{" "}
                          </a>
                        </li>
                        <li className="!border-none">
                          {" "}
                          <a href="#">
                            {" "}
                            Dịch vụ quảng cáo{" "}
                          </a>
                        </li>
                        <li className="!border-none">
                          {" "}
                          <a href="#"> Tuyển dụng </a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

import React, { useState } from "react";
import styles from "./UserDetails.module.scss";
import {
  selectCity,
  selectDay,
  selectMonth,
  selectYear,
  userPoint,
} from "@/_constant";
import { IoSearch } from "react-icons/io5";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../ui/pagination";
import { FiInfo } from "react-icons/fi";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Button } from "@/components/ui/button";
import Day from "./Day/Day";
import { getPositionEl } from "@/lib/utils";
import SelectDropdown from "@/components/client/SelectDropdown/SelectDropdown";
import { Link } from "react-router-dom";
import { userOrderTitles } from "@/_constant/admin";

const UserDetails = () => {
  const [type, setType] = useState("");
  const [day, setDay] = useState("3");
  const [month, setMonth] = useState(" 12");
  const [year, setYear] = useState(" 2002");
  const [city, setCity] = useState(" Hà Nội");
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
  const orderData = [
    {
      orderCode: "DH001",
      movieName: "Avengers: Endgame",
      showtime: "20:00",
      cinema: "Cinema 1",
      status: "Paid",
      totalAmount: 150000,
      orderDate: "2022-10-10",
      action: "View Details",
    },
    {
      orderCode: "DH002",
      movieName: "Black Widow",
      showtime: "18:30",
      cinema: "Cinema 2",
      status: "Unpaid",
      totalAmount: 120000,
      orderDate: "2022-10-11",
      action: "View Details",
    },
    {
      orderCode: "DH003",
      movieName: "Spider-Man: No Way Home",
      showtime: "19:45",
      cinema: "Cinema 3",
      status: "Paid",
      totalAmount: 180000,
      orderDate: "2022-10-12",
      action: "View Details",
    },
    {
      orderCode: "DH004",
      movieName: "Shang-Chi and the Legend of the Ten Rings",
      showtime: "21:15",
      cinema: "Cinema 4",
      status: "Unpaid",
      totalAmount: 135000,
      orderDate: "2022-10-13",
      action: "View Details",
    },
    {
      orderCode: "DH005",
      movieName: "The Suicide Squad",
      showtime: "17:30",
      cinema: "Cinema 5",
      status: "Paid",
      totalAmount: 160000,
      orderDate: "2022-10-14",
      action: "View Details",
    },
    {
      orderCode: "DH006",
      movieName: "Dune",
      showtime: "20:30",
      cinema: "Cinema 6",
      status: "Unpaid",
      totalAmount: 140000,
      orderDate: "2022-10-15",
      action: "View Details",
    },
    {
      orderCode: "DH007",
      movieName: "Jungle Cruise",
      showtime: "19:00",
      cinema: "Cinema 7",
      status: "Paid",
      totalAmount: 155000,
      orderDate: "2022-10-16",
      action: "View Details",
    },
    {
      orderCode: "DH008",
      movieName: "Free Guy",
      showtime: "18:45",
      cinema: "Cinema 8",
      status: "Unpaid",
      totalAmount: 130000,
      orderDate: "2022-10-17",
      action: "View Details",
    },
    {
      orderCode: "DH009",
      movieName: "The Green Knight",
      showtime: "21:30",
      cinema: "Cinema 9",
      status: "Paid",
      totalAmount: 170000,
      orderDate: "2022-10-18",
      action: "View Details",
    },
    {
      orderCode: "DH010",
      movieName: "Cruella",
      showtime: "16:45",
      cinema: "Cinema 10",
      status: "Unpaid",
      totalAmount: 125000,
      orderDate: "2022-10-19",
      action: "View Details",
    },
  ];
  return (
    <>
      <section id="userInfo" className="pt-[20px] mb-[80px]">
        <div className="w-full max-w-[100%] mx-0">
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
                    <ul className={styles["avatar-content__detail"]}>
                      {userPoint.map((item, index) => {
                        const isInline =
                          index <= 1 || (index > 1 && index <= 3);
                        const isIndexFinal = index === userPoint.length - 1;
                        return (
                          <li
                            className={`text-[16px] mb-[5px]  ${
                              isInline ? "inline-block w-[40%]" : "block"
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
                    <span className={styles["select-parent"]}>
                      {/* select day */}
                      <span
                        className={styles["selection"]}
                        onClick={(e) => handleVisibleSelect(e, "day")}
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
                          <span className={styles["select--arrow"]}>
                            <b role="presentation"></b>
                          </span>
                        </span>
                      </span>
                    </span>
                  </p>
                  <p className={`${styles["form-row-wide"]} my-4`}>
                    <label htmlFor=""> Tỉnh/Thành phố *</label>
                    <span
                      className={`${styles["span-lap"]} ${styles["selection"]}  `}
                      onClick={(e) => handleVisibleSelect(e, "city")}
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
      <>
        <div className="p-[28px] bg-[#1e2021]">
          <div className="flex justify-between">
            <h1 className="text-[#cfcbc4] text-[22px] font-black mb-4">
              Danh sách Đơn hàng
            </h1>

            {/* <FormMovie isAdd={true} /> */}
          </div>
          <form action="" className="">
            <div className="w-[30%] flex justify-start items-center border-[1px] border-solid border-[#27374C] mb-4 rounded-[6px] bg-[#181a1b]">
              <IoSearch className="text-[#9ba2ae] size-5 text-[16px] ml-2" />
              <input
                type="search"
                placeholder="Filter Bills.."
                className=" text-[16px] w-full text-[#9ba2ae] px-2 py-2 outline-[0px] bg-[#181a1b] rounded-[6px]"
              />
            </div>
          </form>
          <div className="bg-[#181a1b] border-[1px] border-solid border-[#27374C]">
            <Table className=" text-#ffc px-[26px] pt-[26px] w-full">
              <TableHeader>
                <TableRow className="text-center text-[16px] text-[#CFCBC4]  bg-[#1b1d1f] hover:bg-[#1b1d1f] border-none">
                  {userOrderTitles.map((item, idx) => (
                    <TableHead className="py-6" key={idx}>
                      {item.name}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody className="">
                {orderData.map((item, idx) => (
                  <TableRow
                    key={idx}
                    className="text-[14px] text-[#e5e5e5] border-b-[1px] border-solid border-[#35393b] "
                  >
                    <TableCell>{idx + 1}</TableCell>
                    <TableCell>{item.orderCode}</TableCell>
                    <TableCell>{item.movieName}</TableCell>

                    <TableCell>{item.showtime}</TableCell>
                    <TableCell>{item.cinema}</TableCell>
                    <TableCell
                    // className={
                    //   // item.status === true ? "text-#72be43" : "text-red-600"
                    // }
                    >
                      {item.status}
                    </TableCell>
                    <TableCell>{item.totalAmount}.đ</TableCell>
                    <TableCell>{item.orderDate}</TableCell>
                    <TableCell>
                      <div className="inline-flex items-center">
                        <Link to={"/admin/orders/details"}>
                          <FiInfo size={20} />
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination className="pb-[26px] text-[#cfcbc4] text-[14px]">
              <PaginationContent>
                <PaginationItem className="p-0">
                  <PaginationPrevious
                    href="#"
                    className=" h-[20px] p-4 rounded-[4px] hover:bg-[#27272a]"
                    size={""}
                  />
                </PaginationItem>
                <PaginationItem className="">
                  <PaginationLink
                    size={""}
                    className="w-[20px] h-[20px] p-4 rounded-[4px] border-[1px] border-solid border-[#27272a] hover:bg-[#27272a] mr-[5px]"
                    href="#"
                  >
                    1
                  </PaginationLink>
                  <PaginationLink
                    size={""}
                    className="w-[20px] h-[20px] p-4 rounded-[4px] border-[1px] border-solid border-[#27272a] hover:bg-[#27272a] mr-[5px]"
                    href="#"
                  >
                    2
                  </PaginationLink>
                  <PaginationLink
                    size={""}
                    className="w-[20px] h-[20px] p-4 rounded-[4px] border-[1px] border-solid border-[#27272a] hover:bg-[#27272a] "
                    href="#"
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    size={""}
                    href="#"
                    className=" h-[20px] p-4 rounded-[4px] hover:bg-[#27272a]"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </>
    </>
  );
};

export default UserDetails;

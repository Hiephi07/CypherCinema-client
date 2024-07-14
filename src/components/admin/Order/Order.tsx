import React from "react";
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
import { orderTitles } from "@/_constant/admin";
import RemoveOrder from "./RemoveOrder";
import { Link } from "react-router-dom";
const Order = () => {
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
                {orderTitles.map((item, idx) => (
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
  );
};

export default Order;

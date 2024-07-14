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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { titleTableTicket } from "../../../_constant/voucher-list";
import FormVoucher from "./FormVoucher";
import RemoveVoucher from "./RemoveVoucher";
const Voucher = () => {
  const voucher_data = [
    {
      id: 1,
      code: "21kd2dk21",
      percent: 4,
      quantity: 3,
      used: 3,
      state: true,
      time: 3,
    },
    {
      id: 2,
      code: "abc123",
      percent: 10,
      quantity: 5,
      used: 2,
      state: true,
      time: 5,
    },
    {
      id: 3,
      code: "xyz456",
      percent: 20,
      quantity: 10,
      used: 8,
      state: true,
      time: 7,
    },
    {
      id: 4,
      code: "def789",
      percent: 15,
      quantity: 7,
      used: 4,
      state: true,
      time: 6,
    },
    {
      id: 5,
      code: "mno012",
      percent: 5,
      quantity: 2,
      used: 1,
      state: true,
      time: 2,
    },
    {
      id: 6,
      code: "pqr345",
      percent: 8,
      quantity: 4,
      used: 3,
      state: true,
      time: 4,
    },
    {
      id: 7,
      code: "stu678",
      percent: 12,
      quantity: 6,
      used: 5,
      state: true,
      time: 5,
    },
    {
      id: 8,
      code: "vwx901",
      percent: 18,
      quantity: 9,
      used: 7,
      state: true,
      time: 8,
    },
    {
      id: 9,
      code: "ghi234",
      percent: 25,
      quantity: 12,
      used: 10,
      state: true,
      time: 10,
    },
    {
      id: 10,
      code: "jkl567",
      percent: 30,
      quantity: 15,
      used: 12,
      state: true,
      time: 12,
    },
  ];
  return (
    <>
      <div className="p-[28px] bg-[#1e2021]">
        <div className="flex justify-between">
          <h1 className="text-[#cfcbc4] text-[22px] font-black mb-4">
            Danh sách Voucher
          </h1>

          <FormVoucher isAdd={true} />
        </div>
        <form action="" className="">
          <div className="w-[30%] flex justify-start items-center border-[1px] border-solid border-[#27374C] mb-4 rounded-[6px] bg-[#181a1b]">
            <IoSearch className="text-[#9ba2ae] size-5 text-[16px] ml-2" />
            <input
              type="search"
              placeholder="Filter Voucher.."
              className=" text-[16px] w-full text-[#9ba2ae] px-2 py-2 outline-[0px] bg-[#181a1b] rounded-[6px]"
            />
          </div>
        </form>
        <div className="bg-[#181a1b] border-[1px] border-solid border-[#27374C]">
          <Table className=" text-#ffc px-[26px] pt-[26px] w-full">
            <TableHeader>
              <TableRow className="text-center text-[16px] text-[#CFCBC4]  bg-[#1b1d1f] hover:bg-[#1b1d1f] border-none">
                {titleTableTicket.map((item, idx) => (
                  <TableHead className="py-6" key={idx}>
                    {item.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {voucher_data.map((item, idx) => (
                <TableRow
                  key={idx}
                  className="text-[14px] text-[#e5e5e5] border-b-[1px] border-solid border-[#35393b] "
                >
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{item.code}</TableCell>
                  <TableCell>{item.percent}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.used}</TableCell>
                  <TableCell
                    className={
                      item.state === true ? "text-#72be43" : "text-red-600"
                    }
                  >
                    {item.state ? "Hoạt động" : "Không hoạt động"}
                  </TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>
                    <div className="inline-flex items-center">
                      <FormVoucher isAdd={false} />
                      <RemoveVoucher />
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

export default Voucher;

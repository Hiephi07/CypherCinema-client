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
import { userTitle } from "@/_constant/admin";
import { Link } from "react-router-dom";
const UserList = () => {
  const userData = [
    {
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      name: "user name",
      email: "example@gmail.com",
      phone: "0123456789",
      role: "Admin",
      status: "Active",
      createdAt: "2023-03-05",
    },
    {
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/waghner/128.jpg",
      name: "Roberto_Weissnat48",
      phone: "(676) 112-2787 x214",
      email: "Alva.Greenfelder77@hotmail.com",
      status: "Active",
      role: "User",
      createdAt: "2024-01-20T21:51:46.336Z",
    },
    {
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/karsh/128.jpg",
      name: "Jacky.Labadie55",
      phone: "1-703-592-0199 x964",
      email: "Ariane77@yahoo.com",
      status: "Active",
      role: "User",
      createdAt: "2023-07-16T19:08:06.585Z",
    },
    {
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jennyyo/128.jpg",
      name: "Angelica.Ritchie",
      phone: "1-956-432-1791 x5382",
      email: "Greta43@hotmail.com",
      status: "Active",
      role: "User",
      createdAt: "2023-09-15T09:19:04.655Z",
    },
    {
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/derekebradley/128.jpg",
      name: "Sabrina44",
      phone: "961.067.2733 x9053",
      email: "Annamae67@gmail.com",
      status: "Active",
      role: "User",
      createdAt: "2023-11-06T12:54:16.956Z",
    },
    {
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/laurengray/128.jpg",
      name: "Lurline39",
      phone: "254-612-4553 x9752",
      email: "Waylon83@gmail.com",
      status: "Active",
      role: "User",
      createdAt: "2023-12-08T19:54:08.405Z",
    },
    {
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/agustincruiz/128.jpg",
      name: "Laney_Schamberger40",
      phone: "1-868-426-4124",
      email: "Barrett44@gmail.com",
      status: "Active",
      role: "User",
      createdAt: "2024-04-03T11:48:18.317Z",
    },
    {
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/osvaldas/128.jpg",
      name: "Fleta.Glover5",
      phone: "(216) 509-4349",
      email: "Dariana_Schultz@yahoo.com",
      status: "Active",
      role: "User",
      createdAt: "2024-02-23T13:57:44.458Z",
    },
    {
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/gearpixels/128.jpg",
      name: "Curtis_Kuhic3",
      phone: "586-024-3689 x599",
      email: "Earnestine_Larkin58@gmail.com",
      status: "Active",
      role: "User",
      createdAt: "2023-10-21T01:19:07.603Z",
    },
    {
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/davidmerrique/128.jpg",
      name: "Rosina_Fahey62",
      phone: "343.136.0739",
      email: "Albin.Morissette81@yahoo.com",
      status: "Active",
      role: "User",
      createdAt: "2024-01-08T03:50:47.840Z",
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
                {userTitle.map((item, idx) => (
                  <TableHead className="py-6" key={idx}>
                    {item.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {userData.map((item, idx) => (
                <TableRow
                  key={idx}
                  className="text-[14px] text-[#e5e5e5] border-b-[1px] border-solid border-[#35393b] "
                >
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>
                    <img src={item.avatar} alt="avatar here" />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.createdAt}</TableCell>
                  {/* <TableCell
                    className={
                      item.status === true ? "text-#72be43" : "text-red-600"
                    }
                  >
                    {item.status ? "Hoạt động" : "Không hoạt động"}
                  </TableCell>
                  <TableCell>{item.date_created.toDateString()}</TableCell> */}
                  <TableCell>
                    <div className="inline-flex items-center">
                      <Link to={`/admin/users/${item.name}`}>
                        <FiInfo />
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

export default UserList;

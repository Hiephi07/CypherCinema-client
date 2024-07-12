import { titleTableShowTimes } from "@/_constant/admin";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { IoSearch } from "react-icons/io5";
import FormShowTime from "./FormShowTime";
import RemoveShowTime from "./RemoveShowTime";

interface Props {}

const showTimes_data = [
    {
        id: 1,
        cinema: "Cinema 1",
        showDate: new Date("2024-07-12"),
        showTime: "14:30",
        endTime: "16:30",
        movieName: "Movie A",
        screeningRoom: "Room 1"
    },
    {
        id: 2,
        cinema: "Cinema 2",
        showDate: new Date("2024-07-13"),
        showTime: "16:00",
        endTime: "18:00",
        movieName: "Movie B",
        screeningRoom: "Room 2"
    },
    {
        id: 3,
        cinema: "Cinema 3",
        showDate: new Date("2024-07-14"),
        showTime: "18:30",
        endTime: "20:30",
        movieName: "Movie C",
        screeningRoom: "Room 3"
    },
    {
        id: 4,
        cinema: "Cinema 4",
        showDate: new Date("2024-07-15"),
        showTime: "20:00",
        endTime: "22:00",
        movieName: "Movie D",
        screeningRoom: "Room 4"
    },
    {
        id: 5,
        cinema: "Cinema 5",
        showDate: new Date("2024-07-16"),
        showTime: "12:30",
        endTime: "14:30",
        movieName: "Movie E",
        screeningRoom: "Room 5"
    },
    {
        id: 6,
        cinema: "Cinema 6",
        showDate: new Date("2024-07-17"),
        showTime: "14:00",
        endTime: "16:00",
        movieName: "Movie F",
        screeningRoom: "Room 6"
    },
    {
        id: 7,
        cinema: "Cinema 7",
        showDate: new Date("2024-07-18"),
        showTime: "15:30",
        endTime: "17:30",
        movieName: "Movie G",
        screeningRoom: "Room 7"
    },
    {
        id: 8,
        cinema: "Cinema 8",
        showDate: new Date("2024-07-19"),
        showTime: "17:00",
        endTime: "19:00",
        movieName: "Movie H",
        screeningRoom: "Room 8"
    },
    {
        id: 9,
        cinema: "Cinema 9",
        showDate: new Date("2024-07-20"),
        showTime: "19:30",
        endTime: "21:30",
        movieName: "Movie I",
        screeningRoom: "Room 9"
    },
    {
        id: 10,
        cinema: "Cinema 10",
        showDate: new Date("2024-07-21"),
        showTime: "21:00",
        endTime: "23:00",
        movieName: "Movie J",
        screeningRoom: "Room 10"
    }
];

const ShowTimes = (props: Props) => {
  return (
    <>
      <div className="p-[28px] bg-[#1e2021]">
        <div className="flex justify-between">
          <h1 className="text-[#cfcbc4] text-[22px] font-black mb-4">
            Danh sách Suất chiếu
          </h1>
          <FormShowTime isAdd={true} />
        </div>
        <form action="" className="">
            <div className="w-[30%] flex justify-start items-center border-[1px] border-solid border-[#27374C] mb-4 rounded-[6px] bg-[#181a1b]">
            <IoSearch className="text-[#9ba2ae] size-5 text-[16px] ml-2"/>
            <input
              type="search"
              placeholder="Filter movie.."
              className=" text-[16px] w-full text-[#9ba2ae] px-2 py-2 outline-[0px] bg-[#181a1b] rounded-[6px]"
            />
            </div>
          </form>
        <div className="bg-[#181a1b] border-[1px] border-solid border-[#27374C]">
          <Table className=" text-#ffc px-[26px] pt-[26px] w-full">
            <TableHeader>
              <TableRow className="text-center text-[16px] text-[#CFCBC4]  bg-[#1b1d1f] hover:bg-[#1b1d1f] border-none">
                {titleTableShowTimes.map((item, idx) => (
                  <TableHead className="py-6" key={idx}>
                    {item.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {showTimes_data.map((item, idx) => (
                <TableRow
                  key={idx}
                  className="text-[14px] text-[#e5e5e5] border-b-[1px] border-solid border-[#35393b]"
                >
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{item.cinema}</TableCell>
                  <TableCell>{item.showDate.toDateString()}</TableCell>
                  <TableCell>{item.showTime}{"h "}-{" "}{item.endTime}{"h "}</TableCell>
                  <TableCell>{item.movieName}</TableCell>
                  <TableCell>{item.screeningRoom}</TableCell>
                  <TableCell>
                    <div className="inline-flex items-center">
                      <FormShowTime isAdd={false} />
                      <RemoveShowTime />
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
                />
              </PaginationItem>
              <PaginationItem className="">
                <PaginationLink
                  className="w-[20px] h-[20px] p-4 rounded-[4px] border-[1px] border-solid border-[#27272a] hover:bg-[#27272a] mr-[5px]"
                  href="#"
                >
                  1
                </PaginationLink>
                <PaginationLink
                  className="w-[20px] h-[20px] p-4 rounded-[4px] border-[1px] border-solid border-[#27272a] hover:bg-[#27272a] mr-[5px]"
                  href="#"
                >
                  2
                </PaginationLink>
                <PaginationLink
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

export default ShowTimes;

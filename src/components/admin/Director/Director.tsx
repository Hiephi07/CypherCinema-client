import { titleTableDirector, titleTableGenre } from "@/_constant/admin";
import { IDirector } from "@/_interfaces/IDirector";
import { IMovieGenre } from "@/_interfaces/IMovieGenre";
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
import FormDirector from "./FormDirector";
import RemoveDirector from "./RemoveDirector";

interface Props {}

const Director = (props: Props) => {
  const Director_Data: IDirector[] = [
    { id: 1, name: "Satoshi" },
    { id: 2, name: "Emma" },
    { id: 3, name: "Liam" },
    { id: 4, name: "Olivia" },
    { id: 5, name: "Noah" },
    { id: 6, name: "Ava" },
    { id: 7, name: "Elijah" },
    { id: 8, name: "Isabella" },
    { id: 9, name: "Sophia" },
    { id: 10, name: "Mason" },
  ];
  return (
    <>
      <div className="p-[28px] bg-[#1e2021]">
        <div className="flex justify-between">
          <h1 className="text-[#cfcbc4] text-[22px] font-black mb-4">
            Danh sách Đạo Diễn
          </h1>
          <FormDirector isAdd={true} />
        </div>
        <div className="bg-[#181a1b] border-[1px] border-solid border-[#27374C]">
          <Table className="text-#ffc px-[26px] pt-[26px] w-full">
            <TableHeader>
              <TableRow className="text-center text-[16px] text-[#CFCBC4]  bg-[#1b1d1f] hover:bg-[#1b1d1f] border-none">
                {titleTableDirector.map((item, idx) => (
                  <TableHead className="py-6" key={idx}>
                    {item.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {Director_Data.map((item, idx) => (
                <TableRow
                  key={idx}
                  className="text-[14px] text-[#e5e5e5] border-b-[1px] border-solid border-[#35393b]"
                >
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <div className="inline-flex items-center">
                      <FormDirector isAdd={false} />
                      <RemoveDirector />
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

export default Director;

import { titleTableActor } from "@/_constant/admin";
import { IActor } from "@/_interfaces/IActor";
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
import FormActor from "./FormActor";
import RemoveActor from "./RemoveActor";

interface Props {}

const Actor = (props: Props) => {

  const Actor_Data: IActor[] = [
    { id: 1, name: "Leonardo DiCaprio" },
    { id: 2, name: "Scarlett Johansson" },
    { id: 3, name: "Tom Hanks" },
    { id: 4, name: "Meryl Streep" },
    { id: 5, name: "Robert Downey Jr." },
    { id: 6, name: "Natalie Portman" },
    { id: 7, name: "Brad Pitt" },
    { id: 8, name: "Emma Stone" },
    { id: 9, name: "Johnny Depp" },
    { id: 10, name: "Jennifer Lawrence" },
  ];
  return (
    <>
      <div className="p-[28px] bg-[#1e2021]">
        <div className="flex justify-between">
          <h1 className="text-[#cfcbc4] text-[22px] font-black mb-4">
            Danh sách Diễn Viên
          </h1>
          <FormActor isAdd={true} />
        </div>
        <div className="bg-[#181a1b] border-[1px] border-solid border-[#27374C]">
          <Table className="text-#ffc px-[26px] pt-[26px] w-full">
            <TableHeader>
              <TableRow className="text-center text-[16px] text-[#CFCBC4]  bg-[#1b1d1f] hover:bg-[#1b1d1f] border-none">
                {titleTableActor.map((item, idx) => (
                  <TableHead className="py-6" key={idx}>
                    {item.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {Actor_Data.map((item, idx) => (
                <TableRow
                  key={idx}
                  className="text-[14px] text-[#e5e5e5] border-b-[1px] border-solid border-[#35393b]"
                >
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <div className="inline-flex items-center">
                      <FormActor isAdd={false} />
                      <RemoveActor />
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

export default Actor;

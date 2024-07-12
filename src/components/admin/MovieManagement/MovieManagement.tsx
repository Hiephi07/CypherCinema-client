import { titleTableMovie } from "@/_constant/admin";
import { IMovieAdmin } from "@/_interfaces/IMovieAdmin";
import { IoSearch } from "react-icons/io5";
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
import FormMovie from "./FormMovie";
import RemoveMovie from "./RemoveMovie";

interface Props {}
const Movies_data: IMovieAdmin[] = [
  {
    id: 1,
    poster: "https://example.com/poster1.jpg",
    trailer: "https://example.com/trailer1.mp4",
    name: "Movie One",
    introduce: "This is the introduction of Movie One.",
    classify: ["Action", "Adventure"],
    format: "2D",
    director: "Director One",
    actor: "Actor One",
    genre: "Action",
    premiere: "2024-07-10",
    time: 120,
    language: "English",
    status: true,
    date_created: new Date("2023-01-01"),
  },
  {
    id: 2,
    poster: "https://example.com/poster2.jpg",
    trailer: "https://example.com/trailer2.mp4",
    name: "Movie Two",
    introduce: "This is the introduction of Movie Two.",
    classify: ["Drama", "Romance"],
    format: "3D",
    director: "Director Two",
    actor: "Actor Two",
    genre: "Drama",
    premiere: "2024-08-15",
    time: 130,
    language: "Vietnamese",
    status: false,
    date_created: new Date("2024-01-01"),
  },
  {
    id: 3,
    poster: "https://example.com/poster3.jpg",
    trailer: "https://example.com/trailer3.mp4",
    name: "Movie Three",
    introduce: "This is the introduction of Movie Three.",
    classify: ["Comedy", "Family"],
    format: "IMAX",
    director: "Director Three",
    actor: "Actor Three",
    genre: "Comedy",
    premiere: "2024-09-20",
    time: 110,
    language: "Korean",
    status: true,
    date_created: new Date("2023-02-01"),
  },
  {
    id: 4,
    poster: "https://example.com/poster4.jpg",
    trailer: "https://example.com/trailer4.mp4",
    name: "Movie Four",
    introduce: "This is the introduction of Movie Four.",
    classify: ["Horror", "Thriller"],
    format: "4D",
    director: "Director Four",
    actor: "Actor Four",
    genre: "Horror",
    premiere: "2024-10-25",
    time: 125,
    language: "Japanese",
    status: false,
    date_created: new Date("2023-02-01"),
  },
  {
    id: 5,
    poster: "https://example.com/poster5.jpg",
    trailer: "https://example.com/trailer5.mp4",
    name: "Movie Five",
    introduce: "This is the introduction of Movie Five.",
    classify: ["Sci-Fi", "Fantasy"],
    format: "2D",
    director: "Director Five",
    actor: "Actor Five",
    genre: "Sci-Fi",
    premiere: "2024-11-30",
    time: 140,
    language: "English",
    status: true,
    date_created: new Date("2023-02-01"),
  },
  {
    id: 6,
    poster: "https://example.com/poster6.jpg",
    trailer: "https://example.com/trailer6.mp4",
    name: "Movie Six",
    introduce: "This is the introduction of Movie Six.",
    classify: ["Documentary"],
    format: "2D",
    director: "Director Six",
    actor: "Actor Six",
    genre: "Documentary",
    premiere: "2024-12-15",
    time: 90,
    language: "French",
    status: true,
    date_created: new Date("2023-04-01"),
  },
  {
    id: 7,
    poster: "https://example.com/poster7.jpg",
    trailer: "https://example.com/trailer7.mp4",
    name: "Movie Seven",
    introduce: "This is the introduction of Movie Seven.",
    classify: ["Animation", "Family"],
    format: "3D",
    director: "Director Seven",
    actor: "Actor Seven",
    genre: "Animation",
    premiere: "2025-01-20",
    time: 100,
    language: "English",
    status: false,
    date_created: new Date("2023-04-01"),
  },
  {
    id: 8,
    poster: "https://example.com/poster8.jpg",
    trailer: "https://example.com/trailer8.mp4",
    name: "Movie Eight",
    introduce: "This is the introduction of Movie Eight.",
    classify: ["Musical", "Drama"],
    format: "IMAX",
    director: "Director Eight",
    actor: "Actor Eight",
    genre: "Musical",
    premiere: "2025-02-10",
    time: 115,
    language: "Spanish",
    status: true,
    date_created: new Date("2023-06-01"),
  },
  {
    id: 9,
    poster: "https://example.com/poster9.jpg",
    trailer: "https://example.com/trailer9.mp4",
    name: "Movie Nine",
    introduce: "This is the introduction of Movie Nine.",
    classify: ["Thriller", "Mystery"],
    format: "4D",
    director: "Director Nine",
    actor: "Actor Nine",
    genre: "Thriller",
    premiere: "2025-03-15",
    time: 135,
    language: "German",
    status: false,
    date_created: new Date("2023-05-01"),
  },
  {
    id: 10,
    poster: "https://example.com/poster10.jpg",
    trailer: "https://example.com/trailer10.mp4",
    name: "Movie Ten",
    introduce: "This is the introduction of Movie Ten.",
    classify: ["Action", "Sci-Fi"],
    format: "2D",
    director: "Director Ten",
    actor: "Actor Ten",
    genre: "Action",
    premiere: "2025-04-05",
    time: 150,
    language: "Mandarin",
    status: true,
    date_created: new Date("2023-06-01"),
  },
];

const MovieManagement = (props: Props) => {
  return (
    <>
      <div className="p-[28px] bg-[#1e2021]">
        <div className="flex justify-between">
          <h1 className="text-[#cfcbc4] text-[22px] font-black mb-4">
            Danh sách Phim
          </h1>
          
          <FormMovie isAdd={true} />
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
                {titleTableMovie.map((item, idx) => (
                  <TableHead className="py-6" key={idx}>
                    {item.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {Movies_data.map((item, idx) => (
                <TableRow
                  key={idx}
                  className="text-[14px] text-[#e5e5e5] border-b-[1px] border-solid border-[#35393b] "
                >
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.genre}</TableCell>
                  <TableCell>{item.premiere}</TableCell>
                  <TableCell
                    className={
                      item.status === true ? "text-#72be43" : "text-red-600"
                    }
                  >
                    {item.status ? "Hoạt động" : "Không hoạt động"}
                  </TableCell>
                  <TableCell>{item.date_created.toDateString()}</TableCell>
                  <TableCell>
                    <div className="inline-flex items-center">
                      <FormMovie isAdd={false} />
                      <RemoveMovie />
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

export default MovieManagement;

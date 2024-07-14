import { titleTableTheater } from "@/_constant/admin";
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
import FormTheaterManagement from "./FormTheater";
import RemoveTheater from "./RemoveTheater";
import { ITheater } from "@/_interfaces/ITheater";
interface Props {

}

const Theater_data: ITheater[] = [
  {
    id: 1,
    name: "bhd cầu giấy",
    city: "Hà nội",
    address: "số 165 quan hoa, cầu giấy",
    phone_number: "0352359199",
    email: "bhd@gmail.com",
    image: "https://bhdstar.vn/wp-content/uploads/2023/12/LVV-243x330-1.jpg",
  },
  {
    id: 2,
    name: "bhd vincom",
    city: "Hà Nội",
    address: "số 54A Nguyễn Chí Thanh, Đống Đa",
    phone_number: "0352359190",
    email: "bhd_vincom@gmail.com",
    image: "https://bhdstar.vn/wp-content/uploads/2023/12/LVV-243x330-1.jpg",
  },
  {
    id: 3,
    name: "bhd royal city",
    city: "Hà Nội",
    address: "72A Nguyễn Trãi, Thanh Xuân",
    phone_number: "0352359191",
    email: "bhd_royalcity@gmail.com",
    image: "https://bhdstar.vn/wp-content/uploads/2023/12/LVV-243x330-1.jpg",
  },
  {
    id: 4,
    name: "bhd times city",
    city: "Hà Nội",
    address: "458 Minh Khai, Hai Bà Trưng",
    phone_number: "0352359192",
    email: "bhd_timescity@gmail.com",
    image: "https://bhdstar.vn/wp-content/uploads/2023/12/LVV-243x330-1.jpg",
  },
  {
    id: 5,
    name: "bhd aeon mall",
    city: "Hà Nội",
    address: "27 Cổ Linh, Long Biên",
    phone_number: "0352359193",
    email: "bhd_aeonmall@gmail.com",
    image: "https://bhdstar.vn/wp-content/uploads/2023/12/LVV-243x330-1.jpg",
  },
  {id: 6, name: "bhd landmark 81", city: "TP. Hồ Chí Minh", address: "720A Điện Biên Phủ, Bình Thạnh", phone_number: "0352359194", email: "bhd_landmark81@gmail.com", image: "https://bhdstar.vn/wp-content/uploads/2023/12/LVV-243x330-1.jpg"},
    {id: 7, name: "bhd vạn hạnh mall", city: "TP. Hồ Chí Minh", address: "11 Sư Vạn Hạnh, Quận 10", phone_number: "0352359195", email: "bhd_vanhanh@gmail.com", image: "https://bhdstar.vn/wp-content/uploads/2023/12/LVV-243x330-1.jpg"},
    {id: 8, name: "bhd crescent mall", city: "TP. Hồ Chí Minh", address: "101 Tôn Dật Tiên, Quận 7", phone_number: "0352359196", email: "bhd_crescent@gmail.com", image: "https://bhdstar.vn/wp-content/uploads/2023/12/LVV-243x330-1.jpg"},
    {id: 9, name: "bhd emart gò vấp", city: "TP. Hồ Chí Minh", address: "366 Phan Văn Trị, Gò Vấp", phone_number: "0352359197", email: "bhd_emart@gmail.com", image: "https://bhdstar.vn/wp-content/uploads/2023/12/LVV-243x330-1.jpg"},
    {id: 10, name: "bhd phú mỹ hưng", city: "TP. Hồ Chí Minh", address: "31 Nguyễn Lương Bằng, Quận 7", phone_number: "0352359198", email: "bhd_phumyhung@gmail.com", image: "https://bhdstar.vn/wp-content/uploads/2023/12/LVV-243x330-1.jpg"}
];

const TheaterManagement = (props: Props) => {
  return (
    <div className="p-[28px] bg-[#1e2021]">
      <div className="flex justify-between">
      <h1 className="text-[#cfcbc4] text-[22px] font-black mb-4">
        Danh sách Rạp Chiếu
      </h1>
      <FormTheaterManagement isAdd={true}/>
      </div>
      <div className="bg-[#181a1b] border-[1px] border-solid border-[#27374C]">
      <Table className=" text-#ffc px-[26px] pt-[26px] w-full">
        <TableHeader>
          <TableRow className="text-center text-[16px] text-[#CFCBC4]  bg-[#1b1d1f] hover:bg-[#1b1d1f] border-none">
            {titleTableTheater.map((item, idx) => (
              <TableHead className="py-6" key={idx}>
                {item.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {Theater_data.map((item, idx) => (
            <TableRow
              key={idx}
              className="text-[14px] text-[#e5e5e5] border-b-[1px] border-solid border-[#35393b]"
            >
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.phone_number}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                <img width={50} height={50} src={item.image} alt="" />
              </TableCell>
              <TableCell >
                        <div className="inline-flex items-center">
                            <FormTheaterManagement isAdd={false}/>
                            <RemoveTheater />
                        </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="pb-[26px] text-[#cfcbc4] text-[14px]"> 
          <PaginationContent>
            <PaginationItem className="p-0">
              <PaginationPrevious href="#" className=" h-[20px] p-4 rounded-[4px] hover:bg-[#27272a]"/>
            </PaginationItem>
            <PaginationItem className="">
              <PaginationLink className="w-[20px] h-[20px] p-4 rounded-[4px] border-[1px] border-solid border-[#27272a] hover:bg-[#27272a] mr-[5px]" href="#">1</PaginationLink>
              <PaginationLink className="w-[20px] h-[20px] p-4 rounded-[4px] border-[1px] border-solid border-[#27272a] hover:bg-[#27272a] mr-[5px]" href="#">2</PaginationLink>
              <PaginationLink className="w-[20px] h-[20px] p-4 rounded-[4px] border-[1px] border-solid border-[#27272a] hover:bg-[#27272a] " href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem >
              <PaginationNext href="#" className=" h-[20px] p-4 rounded-[4px] hover:bg-[#27272a]"/>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        </div>
    </div>
  );
};

export default TheaterManagement;

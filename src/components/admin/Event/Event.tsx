import { titleTableEvent } from "@/_constant/admin";
import { IEvent } from "@/_interfaces/IEvent";
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
import RemoveEvent from "./RemoveEvent";
import FormEvent from "./FormEvent";
import { Link } from "react-router-dom";


interface Props {
    
}

const Event = (props: Props) => {
    const Event_data: IEvent[] = [
        {
            id: 1,
            avartar: "event1.jpg",
            title: "Conference 2024",
            content: "Annual conference for technology enthusiasts.",
            startTime: new Date('2024-08-15T09:00:00'),
            endTime: new Date('2024-08-15T18:00:00'),
            views: 1200,
            status: true,
            date_Created: new Date('2024-07-13T10:00:00'),
        },
        {
            id: 2,
            avartar: "event2.jpg",
            title: "Product Launch",
            content: "Launch event for our latest product line.",
            startTime: new Date('2024-09-20T11:00:00'),
            endTime: new Date('2024-09-20T15:00:00'),
            views: 800,
            status: false,
            date_Created: new Date('2024-07-13T11:30:00'),
        },
        {
            id: 3,
            avartar: "event3.jpg",
            title: "Workshop Series",
            content: "Weekly workshops on digital marketing strategies.",
            startTime: new Date('2024-07-20T14:00:00'),
            endTime: new Date('2024-07-20T16:00:00'),
            views: 500,
            status: true,
            date_Created: new Date('2024-07-13T13:15:00'),
        },
        {
            id: 4,
            avartar: "event4.jpg",
            title: "Charity Gala",
            content: "Fundraising gala for local charities.",
            startTime: new Date('2024-10-10T18:30:00'),
            endTime: new Date('2024-10-10T22:00:00'),
            views: 1500,
            status: true,
            date_Created: new Date('2024-07-13T14:45:00'),
        },
        {
            id: 5,
            avartar: "event5.jpg",
            title: "Hackathon",
            content: "24-hour hackathon for developers.",
            startTime: new Date('2024-11-05T12:00:00'),
            endTime: new Date('2024-11-06T12:00:00'),
            views: 2000,
            status: false,
            date_Created: new Date('2024-07-13T16:00:00'),
        },
        {
            id: 6,
            avartar: "event6.jpg",
            title: "Webinar: AI Trends",
            content: "Webinar discussing the latest trends in AI.",
            startTime: new Date('2024-08-25T15:00:00'),
            endTime: new Date('2024-08-25T16:30:00'),
            views: 1000,
            status: true,
            date_Created: new Date('2024-07-13T17:30:00'),
        },
        {
            id: 7,
            avartar: "event7.jpg",
            title: "Music Festival",
            content: "Annual music festival showcasing local bands.",
            startTime: new Date('2024-09-05T17:00:00'),
            endTime: new Date('2024-09-07T23:59:59'),
            views: 3000,
            status: true,
            date_Created: new Date('2024-07-13T19:00:00'),
        },
        {
            id: 8,
            avartar: "event8.jpg",
            title: "Art Exhibition",
            content: "Art exhibition featuring works by renowned artists.",
            startTime: new Date('2024-07-30T10:00:00'),
            endTime: new Date('2024-08-15T18:00:00'),
            views: 700,
            status: true,
            date_Created: new Date('2024-07-13T20:30:00'),
        },
        {
            id: 9,
            avartar: "event9.jpg",
            title: "Book Signing",
            content: "Book signing event with bestselling authors.",
            startTime: new Date('2024-08-10T16:00:00'),
            endTime: new Date('2024-08-10T18:00:00'),
            views: 900,
            status: false,
            date_Created: new Date('2024-07-13T22:00:00'),
        },
        {
            id: 10,
            avartar: "event10.jpg",
            title: "Tech Talk Series",
            content: "Monthly tech talks on emerging technologies.",
            startTime: new Date('2024-07-25T19:00:00'),
            endTime: new Date('2024-07-25T21:00:00'),
            views: 600,
            status: true,
            date_Created: new Date('2024-07-13T23:30:00'),
        },
    ]

    return (
        <>
            <div className="p-[28px] bg-[#1e2021]">
                <div className="flex justify-between">
                <h1 className="text-[#cfcbc4] text-[22px] font-black mb-4">
                    Danh sách Sự kiện
                </h1>
                
                <FormEvent isAdd={true} />
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
                <Table className=" text-#ffc px-[26px] pt-[26px] w-full text-center">
                    <TableHeader>
                    <TableRow className=" text-[16px] text-[#CFCBC4]  bg-[#1b1d1f] hover:bg-[#1b1d1f] border-none">
                        {titleTableEvent.map((item, idx) => (
                        <TableHead className="py-6 text-center" key={idx}>
                            {item.name}
                        </TableHead>
                        ))}
                    </TableRow>
                    </TableHeader>
                    <TableBody className="">
                    {Event_data.map((item, idx) => (
                        <TableRow
                        key={idx}
                        className="text-[14px] text-[#e5e5e5] border-b-[1px] border-solid border-[#35393b] "
                        >
                        <TableCell>{idx + 1}</TableCell>
                        <TableCell><Link to={`/admin/event/${item.id}`} className="hover:text-#72be43">{item.title}</Link></TableCell>
                        <TableCell>{item.startTime.toLocaleString()}{" "}-{" "}{item.endTime.toLocaleString()}</TableCell>
                        <TableCell>{item.views}</TableCell>
                        <TableCell>{item.status ? 'Xuất bản' : 'Nháp'}</TableCell>
                        <TableCell>{item.date_Created?.toLocaleDateString()}</TableCell>
                        <TableCell>
                            <div className="inline-flex items-center">
                            <FormEvent isAdd={false} />
                            <RemoveEvent />
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
    )
}

export default Event

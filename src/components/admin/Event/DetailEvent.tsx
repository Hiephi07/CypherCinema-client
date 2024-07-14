import { titleDetailEvent } from '@/_constant/admin';
import { IEvent } from '@/_interfaces/IEvent';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
interface Props {
    
}

const DetailEvent = (props: Props) => {

    const Event_data: IEvent = {
            id: 1,
            avartar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BUyHjaaY583SPgS5FCDWb_wvdmEQ626B9A&s",
            title: "Conference 2024",
            content: "Annual conference for technology enthusiasts.",
            startTime: new Date('2024-08-15T09:00:00'),
            endTime: new Date('2024-08-15T18:00:00'),
            views: 1200,
            status: true,
            date_Created: new Date('2024-07-13T10:00:00'),
        }
    return (
        <>
            <div className="p-[28px] min-h-screen bg-[#1e2021] ">
                <h1 className="text-[#cfcbc4] text-[22px] font-black mb-4">
                    Chi tiết sự kiện 
                </h1>
                <div className=" bg-[#181a1b] border-[1px] border-solid border-[#27374C]">
                <Table className=" text-#ffc px-[26px] pt-[26px] text-center w-full">
                    <TableHeader>
                    <TableRow className="text-[16px] text-[#CFCBC4]  bg-[#1b1d1f] hover:bg-[#1b1d1f] border-none">
                        {titleDetailEvent.map((item, idx) => (
                        <TableHead className="py-6 px-6 text-center" key={idx}>
                            {item.name}
                        </TableHead>
                        ))}
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow
                        className="text-[14px] text-[#e5e5e5] border-b-[1px] border-solid border-[#35393b] min-h-[800px]"
                        >
                        <TableCell>{Event_data.id}</TableCell>
                        <TableCell>{Event_data.title}</TableCell>
                        <TableCell className='text-[#e5e5e5] cursor-pointer'>{Event_data.avartar ? <img width={200}  src={Event_data.avartar} alt={Event_data.title} /> : 'Đang cập nhật' }</TableCell>
                        <TableCell>{Event_data.content}</TableCell>
                        <TableCell>{Event_data.startTime.toLocaleString()}</TableCell>
                        <TableCell>{Event_data.endTime.toLocaleString()}</TableCell>
                        <TableCell>{Event_data.views}</TableCell>
                        <TableCell>{Event_data.status ? 'Xuất bản' : 'Nháp'}</TableCell>
                        <TableCell>{Event_data.date_Created?.toLocaleDateString()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>          

                </div>
            </div>
        </>
    )
}

export default DetailEvent

import { imageScreen, rowOfSeat } from '@/_constant/bookTicket';
import { Tseat } from '@/_interfaces/Seat';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { MdChair } from "react-icons/md";
import BookTicketTotalPrice from '../BookTicketTotalPrice/TotalPrice';
import InfoBookingMovie from '../InfoBookingMovie/InfoBookingMovie';
import styles from './BookTicketStepTwo.module.scss';
import { useState } from 'react';
interface Props {
    seat: Tseat | null
}

const BookTicketStepTwo = (props: Props) => {

    const [selectedSeatIds, setSelectedSeatIds] = useState<number[]>([]);

    const handleChairClick = (seatId: number) => {
        if (selectedSeatIds.includes(seatId)) {
            // Nếu ghế đã được chọn, hủy bỏ chọn ghế đó
            const updatedSeats = selectedSeatIds.filter(id => id !== seatId);
            setSelectedSeatIds(updatedSeats);
        } else {
            // Nếu ghế chưa được chọn, thêm vào danh sách các ghế đã chọn
            setSelectedSeatIds([...selectedSeatIds, seatId]);
        }
    };

    const rows = [
        [
          { id: 1, number: "A1" },
          { id: 2, number: "A2" },
          { id: 3, number: "A3" },
          { id: 4, number: "A4" },
          { id: 5, number: "A5" },
          { id: 6, number: "A5" },
          { id: 7, number: "A6" },
          { id: 8, number: "A7" },
          null,
          { id: 9, number: "A8" },
          { id: 10, number: "A9" },
          { id: 11, number: "A10" },
          { id: 12, number: "A11" },
        ],
        [
          { id: 13, number: "B1" },
          { id: 14, number: "B2" },
          { id: 15, number: "B3", isReserved: true },
          { id: 16, number: "B4" },
          { id: 17, number: "B5" },
          { id: 18, number: "B6" },
          { id: 19, number: "B7" },
          { id: 20, number: "B8" },
          null,
          { id: 21, number: "B9" },
          { id: 22, number: "B10" },
          { id: 23, number: "B11" },
          { id: 24, number: "B13" }
        ],
        [
          { id: 25, number: "C1" },
          { id: 26, number: "C2" },
          { id: 27, number: "C3" },
          { id: 28, number: "C4" },
          { id: 29, number: "C5" },
          { id: 30, number: "C6" },
          { id: 31, number: "C7" },
          { id: 32, number: "C8" },
          null,
          { id: 33, number: "C9" },
          { id: 34, number: "C10" },
          { id: 35, number: "C11", isReserved: true },
          { id: 36, number: "C12" },
        ],
        [
          { id: 37, number: "D1" },
          { id: 38, number: "D2" },
          { id: 39, number: "D3", isReserved: true },
          { id: 40, number: "D4" },
          { id: 41, number: "D5", isVip: true },
          { id: 42, number: "D6", isVip: true },
          { id: 43, number: "D7", isVip: true },
          { id: 44, number: "D8", isVip: true },
          null,
          { id: 45, number: "D9", isVip: true },
          { id: 46, number: "D10", isVip: true },
          { id: 47, number: "D11" },
          { id: 48, number: "D12" },
        ],
        [
          { id: 49, number: "E1" },
          { id: 50, number: "E2" },
          { id: 51, number: "E3" },
          { id: 52, number: "E4" },
          { id: 53, number: "E5", isVip: true },
          { id: 54, number: "E6", isVip: true },
          { id: 55, number: "E7", isVip: true },
          { id: 56, number: "E8", isVip: true },
          null,
          { id: 57, number: "E9", isVip: true },
          { id: 58, number: "E10", isVip: true },
          { id: 59, number: "E11" },
          { id: 60, number: "E12" },
        ],
        [
          { id: 61, number: "F1" },
          { id: 62, number: "F2" },
          { id: 63, number: "F3" },
          { id: 64, number: "F4" },
          { id: 65, number: "F5" },
          { id: 66, number: "F6" },
          { id: 67, number: "F7" },
          { id: 68, number: "F8" },
          null,
          { id: 69, number: "F9" },
          { id: 70, number: "F10" },
          { id: 71, number: "F11" },
          { id: 72, number: "F12" },
        ],
        [
          { id: 73, number: "G1" },
          { id: 74, number: "G2" },
          { id: 75, number: "G3" },
          { id: 76, number: "G4" },
          { id: 77, number: "G5" },
          { id: 78, number: "G6" },
          { id: 79, number: "G7", isReserved: true },
          { id: 80, number: "G8" },
          null,
          { id: 81, number: "G9" },
          { id: 82, number: "G10" },
          { id: 83, number: "G11" },
          { id: 84, number: "G12" },
        ]
      ];

    
    return (
        <>
            <section className={`lg:mx-[73px]`}>
            <div className="px-[10px]">
                <h1 className={`font-black text-17.6px text-#fff text-center pb-[26px] pt-[36px]`}>
                Bước 2: Chọn thời gian và địa điểm
                </h1>

                {/* Box Top */}
                <InfoBookingMovie />
                {/* Box Bottom */}
                <div className="grid grid-cols-1 mb-11 lg:grid-cols-12 md:grid-cols-12 lg:gap-x-5 ms:gap-x-5">

                    {/* Nơi chiếu -khung giờ */}
                    <div className="grid grid-cols-1 lg:col-span-8 md:col-span-6 rounded-[36px] px-[20px] pt-[20px] text-[#fff] mb-[20px]">
                        <img className='mb-[30px]' src={imageScreen}  />
                        <div className="grid grid-cols-2 gap-x-12 gap-y-3 mb-[16px]">
                            <div className="flex items-center justify-center">
                                <div className="w-[36px]"><MdChair style={{fontSize: 34}} /></div> <span className='pl-[8px] text-11px block'>Ghế thường</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-[36px]"><MdChair style={{fontSize: 34 , color:'#ffea7a'}} /></div> <span className='pl-[8px] text-11px block'>Ghế VIP</span>
                            </div>
                            <div className="flex items-center justify-end">
                                <div className="w-[36px]"><MdChair style={{fontSize: 34, color: '#b2ec0f'}} /></div> <span className='pl-[8px] text-11px block'>Ghế đã chọn</span>
                            </div>
                            <div className="flex items-center justify-start">
                                <div className="w-[36px]"><MdChair style={{fontSize: 34, color: '#ee0000'}} /></div> <span className='pl-[8px] text-11px block'>Ghế đã bán</span>
                            </div>
                        </div>
                        <table className='grid grid-cols-12 '>
                            <tbody className='justify-self-center lg:grid'>
                                {rowOfSeat.map((row, index) => (
                                    <tr key={index} className='h-[25.7px] lg:h-auto'>
                                        <td className='text-[10px] h-[20px] flex items-center p-0 lg:table-cell lg:h-[50px] lg:text-[18px] lg:py-[12px]'>{row}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tbody className='col-span-10'>
                                {rows.map((row,indexRow) => (
                                    <tr key={indexRow}>
                                        {row.map((seat, indexSeat) => (
                                            <td key={indexSeat} className='p-0 lg:p-[8px]'>
                                                <TooltipProvider delayDuration={0}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="">
                                                        {/* <WeekendIcon style={{fontSize: 36}} className={`text-[10px] ${seat === null ? styles.hidden_seat : '' } ${seat?.isReserved ? 'text-[#ee0000] cursor-not-allowed ': ''} ${seat?.isVip ? 'text-[#ffea7a]' : ''}`} /> */}
                                                        <MdChair onClick={() => seat && handleChairClick(seat.id)} className={`text-[20px] mr-[2px] lg:mr-[1px] lg:text-[36px] 
                                                            ${seat === null ? styles.hidden_seat : '' } 
                                                            ${seat?.isReserved ? 'text-[#ee0000] cursor-not-allowed ': ''} 
                                                            ${seat?.isVip ? 'text-[#ffea7a]' : ''}
                                                             ${seat && selectedSeatIds.includes(seat.id ) ? 'text-#b2ec0f' : ''}`}
                                                            />
                                                        </TooltipTrigger>
                                                        <TooltipContent
                                                        sideOffset={5}
                                                        className={`${seat === null ? styles.hidden_seat :'text-[10px] bg-slate-500 p-1 rounded-[4px]' }`}
                                                        >
                                                    {seat?.number} 
                                                        </TooltipContent>
                                                    </Tooltip>
                                                    </TooltipProvider>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                            <tbody className='justify-self-start lg:justify-self-center lg:grid'>
                                {rowOfSeat.map((row, index) => (
                                    <tr key={index} className='h-[25.7px] lg:h-auto'>
                                        <td className='text-[10px] h-[20px] flex items-center p-0 lg:table-cell lg:h-[50px] lg:text-[18px] lg:py-[12px]'>{row}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/*Tổng thanh toán */}
                    {/*  md:max-h-[365px] */}
                    <BookTicketTotalPrice />
                </div>
            </div>
            </section>
        </>
    )
}

export default BookTicketStepTwo

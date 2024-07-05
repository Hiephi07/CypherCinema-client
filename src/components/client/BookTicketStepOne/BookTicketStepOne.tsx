import { infoMovie, logoforTicket, showTimeMovies } from "@/_constant/bookTicket";
import { BookTicketStepone_Context, BookTicketStepone_Type } from "@/_context/BookTicketStepOne";
import { Calendar } from "@/components/ui/calendar";
import { vi } from 'date-fns/locale';
import { useContext } from "react";
import "react-day-picker/dist/style.css";

interface Props {
}

const BookTicketStepOne = (props: Props) => {

    // Use for cpn Calendar 
    const {date, setDate, formatDayofWeek, formatMonthofYear, disabledPastMonth} = useContext(BookTicketStepone_Context) as BookTicketStepone_Type

    return (
        <>
        <section className={`lg:mx-[73px]`}>
        <div className="px-[10px]">
            <h1 className={`font-black text-17.6px text-#fff text-center pb-[26px] pt-[36px]`}>
            Bước 1: Chọn thời gian và địa điểm
            </h1>

            {/* Box Top */}
            <div className={`grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 justify-center rounded-[36px] p-[10px] mb-[30px] border-[1px] border-solid border-#454D6A`}>
            <div className="col-span-2 w-full h-auto object-contain p-[10px]">
                <img
                className="w-full h-full rounded-[16px]"
                src={`${infoMovie.image}`}
                alt=""
                />
            </div>

            <div className="col-span-10 text-#fff w-full p-[10px]">
                <h3 className="font-black text-20px text-#72be43 mb-[10px]">
                {infoMovie.title}
                </h3>
                <div className="text-[16px] font-thin">
                <span className="mb-[16px] block leading-6">{infoMovie.desc}</span>
                <div className="flex">
                    <span className={`${infoMovie.colorMargin}`}>{infoMovie.director}</span>
                    <span>Kazuaki Imai</span>
                </div>
                <div className="flex">
                    <span className={`${infoMovie.colorMargin}`}>{infoMovie.performer}</span>
                    <span>Megumi Ohara, Wasabi Mizuta</span>
                </div>
                <div className="flex">
                    <span className={`${infoMovie.colorMargin}`}>{infoMovie.category}</span>
                    <span>Animation</span>
                </div>
                <div className="block">
                    <div className="inline-block">
                    <span className={`${infoMovie.colorMargin}`}>{infoMovie.premiere}</span>
                    <span>24/05/2024</span>
                    </div>
                    <span className="mx-1.5">|</span>
                    <div className="inline">
                    <span className={`${infoMovie.colorMargin}`}>{infoMovie.time}</span>
                    <span>115 phút</span>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Box Bottom */}
            <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-11 lg:gap-x-5 ms:gap-x-5">
                {/* Lịch */}
                <div className="col-span-1 lg:col-span-4 lg:max-h-[416px] md:max-h-[365px] md:col-span-5 rounded-[36px] p-[20px] border-[1px] border-solid border-#454D6A mb-[30px]"> 
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-[16px] border text-#fff border-#454D6A w-full h-auto" 
                    fromYear={2023} toYear={2050} 
                    fromMonth={new Date(2023, 5)}  // Tháng bắt đầu từ tháng 1 năm 2024
                    toMonth={new Date(2050, 9)} 
                    captionLayout="dropdown-buttons"
                    // defaultMonth={date}
                    // month={date}
                    weekStartsOn={1}
                    showOutsideDays
                    locale={vi}
                    formatters={{...formatDayofWeek, ...formatMonthofYear}}
                    disabled={disabledPastMonth}
                    pagedNavigation={false}                />
                </div> 

                {/* Nơi chiếu -khung giờ */}
                <div className="grid grid-cols-1 lg:col-span-8 md:col-span-6 rounded-[36px] px-[20px] pt-[20px] border-[1px] border-solid border-[#454D6A] text-[#fff]">
                    {showTimeMovies.map((item, index) => (
                        <div className="rounded-[16px] p-[16px] border-[1px] border-solid border-[#454D6A] mb-[20px]" key={index}>
                            <div className="flex items-center mb-[10px]">
                                <img className="w-[26px] h-[26px] mr-[8px]" src={logoforTicket.image} alt="" />
                                <h1 className="hover:text-#72be43 cursor-pointer leading-7">{item.theater}</h1>
                            </div>
                            <span className="text-11px mb-[20px] block">{item.address}</span>
                            <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-12 lg:gap-x-5 md:grid-cols-12 md:gap-x-3 mb-[10px]">
                                {/* Phần lịch chiếu */}
                                {item.timeandtype.map((childTtem,idx) => (
                                <div className="col-span-1 lg:col-span-3 md:col-span-3 text-center" key={idx}>
                                    <span className="px-[10px] py-[10px] text-[16px] font-medium bg-#454D6A block mb-[8px] rounded-[4px] hover:bg-#72be43">{childTtem.time}</span>
                                    <div className="block text-[9.4px] w-full">
                                        <span className="inline-block px-[4px] py-[2px] mr-[2px] border-[1px] uppercase border-solid border-#FFD600 rounded-[4px]">{childTtem.audio}</span>
                                        <span className="inline-block px-[4px] py-[2px] ml-[2px] bg-#50b648 uppercase rounded-[4px]">{childTtem.video}</span>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                </div>

            </div>
        </div>
        <div className={`class="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-[36px] w-[36px] p-[5px] font-normal aria-selected:opacity-100 rounded-[4px] day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"`}></div>
        </section>
        </>
    );
};

export default BookTicketStepOne;

import React from 'react'
import { infoMovie} from "@/_constant/bookTicket";

interface Props {
    
}

const InfoBookingMovie = (props: Props) => {
    return (
        <>
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
        </>
    )
}

export default InfoBookingMovie

import React, { useState } from 'react'
import BookTicketTotalPrice from '../BookTicketTotalPrice/TotalPrice'
import InfoBookingMovie from '../InfoBookingMovie/InfoBookingMovie'

interface Props {
    
}

const BookTicketStepThree = (props: Props) => {
    const [selected, setSelected] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setSelected(index)
    }

    return (
        <>
            <section className={`lg:mx-[73px]`}>
            <div className="px-[10px]">
                <h1 className={`font-black text-17.6px text-#fff text-center pb-[26px] pt-[36px]`}>
                Bước 3: Nhập thông tin/Thanh toán
                </h1>

                {/* Box Top */}
                <InfoBookingMovie />
                {/* Box Bottom */}
                <div className="grid grid-cols-1 mb-11 lg:grid-cols-12 md:grid-cols-12 lg:gap-x-5 ms:gap-x-5">

                    {/* Hình thức thanh toán */}
                    <div className=" grid-cols-1 lg:col-span-8 md:col-span-6 rounded-[36px] max-h-[297px] text-[#fff] border-[1px] border-solid border-[#454D6A] mb-[20px]">
                        <h3 className='flex items-center h-[74px] leading-[16px] font-bold text-[18px] p-[20px]'>Hình thức thanh toán</h3>
                            <div className="flex items-center h-[74px] p-[20px] border-t-[1px] border-dashed border-#454D6A ">
                                <span onClick={() => handleClick(1)} className={`${selected === 1 ? 'bg-#72be43 border-#72be43' : '' } cursor-pointer w-[20px] h-[20px] mr-[14px] rounded-full border-[1px] border-#454D6A border-solid`}></span>
                                <img className='w-[40px] h-[40px] mr-[14px]' src="https://bhdstar.vn/wp-content/assets/loodo/shopeepay.png" alt="" />
                                <span className='text-[14px]'>Thanh toán qua shoopepay</span>
                            </div>
                            <div className="flex items-center h-[74px] p-[20px] border-t-[1px] border-dashed border-#454D6A ">
                                <span onClick={() => handleClick(2)} className={`${selected === 2 ?  'bg-#72be43 border-#72be43' : '' } cursor-pointer w-[20px] h-[20px] mr-[14px] rounded-full border-[1px] border-#454D6A border-solid`}></span>
                                <img className='w-[40px] h-[40px] mr-[14px]' src="https://bhdstar.vn/wp-content/assets/loodo/vnpay.png" alt="" />
                                <span className='text-[14px]'>Thanh toán qua VNPAY (Visa, Master, Amex, JCB,...)</span>
                            </div>
                            <div className="flex items-center h-[74px] p-[20px] border-t-[1px] border-dashed border-#454D6A ">
                                <span onClick={() => handleClick(3)} className={`${selected === 3 ?  'bg-#72be43 border-#72be43' : '' } cursor-pointer w-[20px] h-[20px] mr-[14px] rounded-full border-[1px] border-#454D6A border-solid`}></span>
                                <img className='w-[40px] h-[40px] mr-[14px]' src="https://bhdstar.vn/wp-content/assets/loodo/momo.png" alt="" />
                                <span className='text-[14px]'>Thanh toán bằng Ví điện tử MoMo</span>
                            </div>
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

export default BookTicketStepThree

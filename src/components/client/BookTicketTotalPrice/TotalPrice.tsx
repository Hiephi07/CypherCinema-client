import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styles from './TotalPrice.module.scss'
import { useState } from 'react'
interface Props {
    
}

const BookTicketTotalPrice = (props: Props) => {
    return (
        <>
            <div className="col-span-1 lg:col-span-4 lg:min-h-[416px] md:col-span-5 rounded-[36px] border-[1px] border-solid border-#454D6A "> 
                        <div className="p-[20px] border-b-2 border-solid border-#454D6A">
                            <h3 className="font-black text-[16px] text-#fff mb-[10px]">BHD Star The Garden</h3>
                            <div className="flex text-#fff text-[12px] ">
                                <span className='text-#72be43 mr-[4px]'>Screen 1</span><span className='mr-[4px]'>- 6/7/2024 -</span><span>Suất chiếu: 20h30</span>
                            </div>
                        </div>
                        <div className="p-[20px] border-b-2 border-solid border-#454D6A">
                            <h3 className='text-#72be43 font-black text-[18px] mb-[16px] mr-[12px]'>HOW TO MAKE MILLIONS: GIA TÀI CỦA NGOẠI</h3>
                            <div className="block text-[9.4px] w-full text-#fff mb-[16px]">
                                <span className={`inline-block font-black px-[8px] py-[2px] mr-[2px] ${styles.spanbackground} uppercase rounded-[4px]`}>p</span>
                                <span className="inline-block px-[4px] py-[2px] mx-[4px] uppercase border-[1px] border-solid border-#FFD600 rounded-[4px]">Lồng tiếng</span>
                                <span className="inline-block font-medium px-[4px] py-[2px] ml-[2px] bg-#50b648 uppercase rounded-[4px]">2D</span>
                            </div>
                            {/* Thông tin ghế đã chọn và báo giá */}
                            <div className="flex justify-between items-center text-#fff text-[14px] border-b-[1px] border-dashed border-#454D6A"> 
                                <div className="py-[10px] ">
                                    <span className='block mb-[4px]'>2 x Adult-Stand-2D</span>
                                    <span className='block '>B15, D16</span>
                                </div>
                                <div className="text-[14px] py-[10px]">180.000 VND</div>
                            </div>   
                            <div className="flex justify-between items-center text-#fff text-[14px] border-b-[1px] border-dashed border-#454D6A"> 
                                <div className="py-[10px] ">
                                    <span className='block mb-[4px]'>2 x Adult-Stand-2D</span>
                                    <span className='block '>B15, D16</span>
                                </div>
                                <div className="text-[14px] py-[10px]">180.000 VND</div>
                            </div> 
                            <div className="flex pt-3">
                            <input type="text" placeholder='Nhập vocher giảm giá' className='bg-#1a1d29 border-[1px] border-#454D6A w-[80%] rounded-[6px] p-[6px] text-[14px] focus:outline-[0px] focus:border-#72be43 focus:bg-[#151720]'/>  
                            <button className='uppercase bg-#1a1d29 hover:bg-#72be43 text-[12px] font-semibold text-#fff border-[1px]  border-#454D6A w-[20%] rounded-[6px] p-[6px] ml-1'>Áp dụng</button>
                            </div>
                        </div>
                        <div className="p-[20px]">
                            <div className="flex justify-between text-#fff text-[20px] mb-[22px]">
                                <span className=''>Tổng tiền</span>
                                <span className='font-bold'>90.000 VND</span>
                            </div>
                            <Link to={`/book-ticket3`} className={`flex items-center justify-center mb-[16px] font-bold ${styles.buttonSubmit} uppercase`}>Thanh toán</Link>
                            <Link className="flex items-center text-#fff text-[16px] justify-center hover:text-#72be43" to={`/book-ticket1`}><IoIosArrowRoundBack className='size-6'  /><span>Trở lại</span></Link>
                        </div>
                        <div >
                        </div>
                    </div> 
        </>
    )
}

export default BookTicketTotalPrice

import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'



const Footer = () => {
    return (
        <footer>
                <section id='footerTop' className='bg-#090b13 py-14 px-14'>
                    <div className="flex justify-around items-start text-#fff font-light">
                        <div className="box-left px-6 pb-4 min-w-72">
                        <h2 className='font-black'>VỀ BHD STAR</h2>
                        <span className={`${styles.coloredHr} border border-1 border-solid border-#fff block w-28 h-2.5 rounded-full my-4`}/>
                        <ul className='text-14.4px font-semibold'>
                            <li className=' mb-4'>
                                <Link className='all ease-in-out duration-300 hover:text-#72be43' to={``}>Hệ thống rạp</Link>
                            </li>
                            <li className=' mb-4'>
                                <Link className='all ease-in-out duration-300 hover:text-#72be43' to={``}>Cụm rạp</Link>
                            </li>
                            <li className=' mb-4'>
                                <Link className='all ease-in-out duration-300 hover:text-#72be43' to={``}>Liên hệ</Link>
                            </li>
                        </ul>
                        <span className='inline-block mt-4'>
                            <Link className='' to={``}>
                                <img className='w-40 h-22' src="../../../../public/assets/images/Footer/Accreditation/image-21.png" alt="" />
                            </Link>
                        </span>
                        </div>

                        <div className="box-center px-6 pb-4 min-w-96">
                        <h2 className='font-black'>QUY ĐỊNH ĐIỀU KHOẢN</h2>
                        <span className={`${styles.coloredHr} border border-1 border-solid border-#fff block w-28 h-2.5 rounded-full my-4`}/>
                        <ul className='text-14.4px font-semibold'>
                            <li className=' mb-4'>
                                <Link className='all ease-in-out duration-300 hover:text-#72be43'  to={``}>Quy định thành viên</Link>
                            </li>
                            <li className=' mb-4'>
                                <Link className='all ease-in-out duration-300 hover:text-#72be43'  to={``}>Điều khoản</Link>
                            </li>
                            <li className=' mb-4'>
                                <Link className='all ease-in-out duration-300 hover:text-#72be43'  to={``}>Hướng dẫn đặt vé trực tuyến</Link>
                            </li>
                            <li className=' mb-4'>
                                <Link className='all ease-in-out duration-300 hover:text-#72be43'  to={``}>Quy định và chính sách chung</Link>
                            </li>
                            <li className=' mb-4'>
                                <Link className='all ease-in-out duration-300 hover:text-#72be43'  to={``}>Chính sách bảo vệ thông tin cá nhân của người tiêu dùng</Link>
                            </li>
                        </ul>
                        </div>

                        <div className="box-right px-6 pb-4 max-w-80">
                        <h2 className='font-black'>CHĂM SÓC KHÁCH HÀNG</h2>
                        <span className={`${styles.coloredHr} border border-1 border-solid border-#fff block w-28 h-2.5 rounded-full my-4`}/>
                        <ul className='text-14.4px font-semibold mb-5'>
                            <li className=' mb-1'>
                                <span className='block'><strong className='font-black'>Hotline:</strong>19002099</span>
                            </li>
                            <li className=' mb-1'>
                                <span className='block'><strong className='font-black'>Giờ làm việc:</strong> 9:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ, Tết)</span>
                            </li>
                            <li className=' mb-1'>
                                <span className='block'><strong className='font-black'>Email hỗ trợ</strong>: cskh@bhdstar.vn</span>
                            </li>
                        </ul>
                        <div className="social">
                            <h6 className='font-black text-14.4px mb-4'>MẠNG XÃ HỘI</h6>
                            <div className="iconSocial flex">
                            <Link to={``}><img className='mx-2 size-9' src="../../../../public/assets/images/Footer/IconSocials/facebookIcon.png" alt="" /></Link>
                            <Link to={``}><img className='mx-2 size-9' src="../../../../public/assets/images/Footer/IconSocials/instagramIcon.png" alt="" /></Link>
                            <Link to={``}><img className='mx-2 size-9' src="../../../../public/assets/images/Footer/IconSocials/tiktokIcon.png" alt="" /></Link>
                            <Link to={``}><img className='mx-2 size-9' src="../../../../public/assets/images/Footer/IconSocials/youtubeIcon.png" alt="" /></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                <section id='footerBottom' className='bg-#151720 px-14 py-8'>
                    <div className="flex justify-start items-center pl-12">
                        <div className="w-16 h-16 mr-8 bg-white rounded-full">
                            <img className='w-full h-full' src="../../../../public/assets/images/Logo/logo.png" alt="" />
                        </div>
                        <div className="text-12.8px text-#fff font-light">
                        <strong className='block'>Công ty TNHH MTV Ngôi Sao Cineplex BHD Việt Nam</strong>
                        <span className='block'><strong>Giấy CNĐKDN:</strong> Giấy phép kinh doanh số: 0104597158. Đăng ký lần đầu ngày 15 tháng 04 năm 2010</span>
                        <span className='block'><strong>Địa Chỉ:</strong> Tầng 11, Tòa nhà Hồng Hà Building, Lý Thường Kiệt, P.Phan Chu Trinh, Quận Hoàn Kiếm, Hà Nội</span>
                        <span className='block'><strong>Hotline:</strong> 19002099</span>
                        <span className='block'>COPYRIGHT 2010 BHD STAR. ALL RIGHTS RESERVED</span>
                        </div>
                    </div>
                </section>
        </footer>
    )
}

export default Footer

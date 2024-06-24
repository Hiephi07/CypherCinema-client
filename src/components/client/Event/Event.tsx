
import React, {  useState } from "react";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom';
import event1 from '@@/assets/images/PromotionalEvents/Events/item1.png'
import event2 from '@@/assets/images/PromotionalEvents/Events/item2.png'
import event3 from '@@/assets/images/PromotionalEvents/Events/item3.png'
import event4 from '@@/assets/images/PromotionalEvents/Events/item4.png'
import event5 from '@@/assets/images/PromotionalEvents/Events/item5.png'
import event6 from '@@/assets/images/PromotionalEvents/Events/item6.png'
import styles from './Event.module.scss'

const PrevArrow = ({ style, onClick, isVisible }: any) => {
  return (
    <motion.button
      initial={{ x: "50%" }}
      animate={{ x: isVisible ? "20%" : "50%", opacity: isVisible ? 1 : 0 }}
      type="button"
      className={`left-0 top-0 absolute z-30 h-full ${isVisible ? "block" : "none"}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <div className="h-[90%] flex items-start pt-10">
      <GrFormPrevious
        className={`text-#98CF74 hover:text-#72be43 hover:transition-colors hover:duration-300 hover:ease-in-out size-20`}
      />
      </div>
    </motion.button>
  );
};

const NextArrow = ({ style, onClick, isVisible }: any) => {
  return (
    <motion.button
      initial={{ x: "-50%" }}
      animate={{ x: isVisible ? "-20%" : "-50%", opacity: isVisible ? 1 : 0 }}
      type="button"
      className={`right-0 top-0 absolute z-30 h-full ${isVisible ? "block" : "none"}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <div className="h-[90%] flex items-start pt-10">
      <GrFormNext
        className={`text-#98CF74 hover:text-#72be43 hover:transition-colors hover:duration-300 hover:ease-in-out size-20`}
      />
      </div>
    </motion.button>
  );
};
  
const Event = () => {
  const arrBanner = [
    {id:1, img: event1, title: 'Quét mã QR – Thẳng tiến vào Rạp',  time: 'Thời gian khuyến mãi: 26/8/2023 – 26/9/2023' }, 
    {id:2, img: event2, title: 'Chạm thẻ visa – Tặng ngay bắp lớn', time: 'Thời gian khuyến mãi: 26/8/2023 – 26/9/2023' },
    {id:3, img: event3, title: 'Giá vé từ 55k – Dành cho Fan cứng U22', time: 'Thời gian khuyến mãi: 26/8/2023 – 26/9/2023' },
    {id:4, img: event4, title: 'Happy day thứ 2 giá rẻ – Chỉ từ 60k/ vén', time: 'Thời gian khuyến mãi: 26/8/2023 – 26/9/2023' },
    {id:5, img: event5, title: 'Giá vé từ 55k – Dành cho Fan cứng U22'
		, time: 'QUÀ TẶNG CHO NỬA THẾ GIỚI Phái đẹp không chỉ lên ngôi bằng ngày lễ mà BHD Star còn tặng quà thiết “thực” Chỉ cần là PHÁI NỮ đến rạp xem phim sẽ được tặng một món quà bóc thăm may mắn bất kỳ. Áp dụng từ 08.03 – 10.03.2024 Tại các cụm rạp BHD ' },
    {id:6, img: event6, title: 'Happy day thứ 2 giá rẻ – Chỉ từ 60k/ vén', time: '26/8/2023 – 26/9/2023' }


  ];

const [isHovered, setIsHovered] = useState<boolean>(false);
const [currentSlider, setCurrentSlider] = useState<number>(0);

const settings = {
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow isVisible={isHovered} />,
  nextArrow: <NextArrow isVisible={isHovered} />,
  autoplay: false,
  autoplaySpeed: 5000,
  dots: true,

  customPaging: (index: number) => (
    <li className="rounded-full ">
      <GoDotFill className={`w-6 h-6 m-auto ${index === currentSlider ? 'text-#72be43': 'text-#76777f'}`} />
    </li>
  ),
  appendDots: (dots: React.ReactNode) => (
    <div>
      <ul className="flex justify-center">{dots}</ul>
    </div>
  ),
  afterChange: (index: number) => {
    setCurrentSlider(index);
  }
};

    return (
     <>
     <section id="Promotion" className="px-4 pb-16"
     onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}>
      <h1 className="font-black text-17.6px text-#fff text-center pb-6 pt-8">Sự kiện</h1>
      <Slider {...settings} className="cursor-grab">
        {arrBanner.map((slider) => (
          <div className="px-8 pb-7 ">
            <div className="wrap-img mb-5 ">
            <Link to={``}><img className="rounded-[8px]" src={slider.img} alt={slider.title} /></Link>
            </div>
            <Link to={``}><h4 className="mb-2 font-black text-14.4px text-#b2ec0f">{slider.title}</h4></Link>
            <span className={` ${styles.truncateMultiline}  text-#fff text-[12px] text-clip `}>{slider.time}</span>
          </div>
        ))}
      </Slider>
     </section>
     </>
);
    };
export default Event

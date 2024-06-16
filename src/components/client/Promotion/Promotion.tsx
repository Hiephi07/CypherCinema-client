
import React, { useState } from "react";
import "./Promotion.scss"
import pmtion1 from '@@/assets/images/PromotionalEvents/Promotional/item1.png'
import pmtion2 from '@@/assets/images/PromotionalEvents/Promotional/item2.png'
import pmtion3 from '@@/assets/images/PromotionalEvents/Promotional/item3.png'
import pmtion4 from '@@/assets/images/PromotionalEvents/Promotional/item4.png'
import Slider from "react-slick";
import { GoDotFill } from "react-icons/go";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";


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
  
  // Không có api ảnh tạo luôn đb trong này sài tạm đến lúc có api call sau nhé ae
  const Promotion = () => {
    const arrBanner = [
      {id:1, img: pmtion1, title: 'Quét mã QR – Thẳng tiến vào Rạp',  time: '26/8/2023 – 26/9/2023' }, 
      {id:2, img: pmtion2, title: 'Chạm thẻ visa – Tặng ngay bắp lớn', time: '26/8/2023 – 26/9/2023' },
      {id:3, img: pmtion3, title: 'Giá vé từ 55k – Dành cho Fan cứng U22', time: '26/8/2023 – 26/9/2023' },
      {id:4, img: pmtion4, title: 'Happy day thứ 2 giá rẻ – Chỉ từ 60k/ vén', time: '26/8/2023 – 26/9/2023' }

    ];

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentSlider, setCurrentSlider] = useState<number>(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow isVisible={isHovered} />,
    nextArrow: <NextArrow isVisible={isHovered} />,
    autoplay: false,
    autoplaySpeed: 3000,
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
       <section id="Promotion" className="px-4 pb-12"
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}>
        <h1 className="font-black text-17.6px text-#fff text-center pb-4">Khuyến mại</h1>
        <Slider {...settings} className="cursor-grab">
          {arrBanner.map((slider) => (
            <div className="px-8 pb-7 ">
              <div className="wrap-img mb-5">
              <Link to={``}><img src={slider.img} alt={slider.title} /></Link>
              </div>
              <Link to={``}><h4 className="mb-2 font-black text-14.4px text-#b2ec0f hover:text-#72be43">{slider.title}</h4></Link>
              <span className=" text-#fff text-12.8px">Thời gian khuyến mãi: {slider.time}</span>
            </div>
          ))}
        </Slider>
       </section>
      </>
       
      );
    }
export default Promotion

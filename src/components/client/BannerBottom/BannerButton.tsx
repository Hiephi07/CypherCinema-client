import React, { useState } from "react";
import { motion } from "framer-motion";
import { GrNext, GrPrevious } from "react-icons/gr";
import bannerButtom from "@@/assets/images/Banner/BannerButtom.png";
import Slider from "react-slick";
import { GoDotFill } from "react-icons/go";

const PrevArrow = ({ style, onClick, isVisible }: any) => {
  return (
    <motion.button
      initial={{ x: "80%" }}
      animate={{ x: isVisible ? "50%" : " 80%", opacity: isVisible ? 1 : 0 }}
      exit={{ x: "50%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      type="button"
      className={`left-0 top-0 z-30 absolute h-full ${isVisible ? "" : "hidden"} `}
      style={{ ...style }}
      onClick={onClick}
    >
     <div className=" h-[96%] flex items-center">
     <GrPrevious
        className={`text-#98CF74 hover:text-#72be43 hover:transition-colors hover:duration-700 hover:ease-in-out size-14 `}
      />
     </div>
    </motion.button>
  );
};

const NextArrow = ({ style, onClick, isVisible }: any) => {
  return (
    <motion.button
      initial={{ x: "-80%" }}
      animate={{ x: isVisible ? "-50%" : "-80%", opacity: isVisible ? 1 : 0 }}
      type="button"
      className={`right-0 top-0 absolute z-30 h-full ${isVisible ? "block" : "none"}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <div className=" h-[96%] flex items-center">
      <GrNext
        className={`text-#98CF74 hover:text-#72be43 hover:transition-colors hover:duration-300 hover:ease-in-out size-14`}
      />
      </div>
    </motion.button>
  );
};

const BannerButton = () => {
  const arrBanner = [{id:1, img: bannerButtom }, {id:2, img: bannerButtom }];
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentSlider, setCurrentSlider] = useState<number>(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
  console.log(currentSlider)
  return (
    <>
      <section
        id="bannerTop"
        className={`pb-16 px-4`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Slider {...settings}>
          {arrBanner.map((slider) => (
            <div className=" border border-solid rounded-full" key={slider.id}>
              <img src={slider.img} alt="" />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default BannerButton;

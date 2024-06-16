import React, { useState } from "react";
import styles from "./Banner.module.scss";
import banner1 from "@@/assets/images/Banner/WEB-LED-COMBO-LY-DOI-MAU-KO-GIA.jpg";
import banner2 from "@@/assets/images/Banner/duoi-13-t-va-duoi-16t.jpg";
import banner3 from "@@/assets/images/Banner/referenceSchemeHeadOfficeallowPlaceHoldertrueheight1069ldapp-10.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { motion } from 'framer-motion';

const PrevArrow = ({ style, onClick, isVisible }: any) => {
  return (
    <motion.button
      initial={{x: '80%' }}
      animate={{x: isVisible ? '50%' : ' 80%', opacity: isVisible ? 1 : 0}}
      exit={{x: '50%'}}  
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      type="button"
      className={`left-0 top-[45%] z-30 absolute ${isVisible ? '' : 'hidden'}`}
      style={{ ...style,   }}
      onClick={onClick}
    >
     <GrPrevious
        className={`text-#fff hover:text-#72be43 hover:transition-colors hover:duration-700 hover:ease-in-out size-14 `}
      />
    </motion.button>
  );
};

const NextArrow = ({ style, onClick, isVisible }: any) => {
  return (
        <motion.button
          initial={{x: '-80%'}}
          animate={{x: isVisible ? '-50%' : '-80%', opacity: isVisible ? 1 : 0}}
          type="button"
          className={`right-0 top-[45%] absolute z-30 ${isVisible ? 'block' : 'none'}`}
          style={{ ...style}}
          onClick={onClick}
        >
          <GrNext
            className={`text-#fff hover:text-#72be43 hover:transition-colors hover:duration-300 hover:ease-in-out size-14 `}
          />
        </motion.button>
  );
};

const Banner: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow isVisible={isHovered} />,
    nextArrow: <NextArrow isVisible={isHovered} />,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <>
      <section id="bannerTop"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Slider {...settings} >
          <div className="">
            <img src={banner1} alt="" />
          </div>
          <div className="">
            <img src={banner2} alt="" />
          </div>
          <div className="">
            <img src={banner3} alt="" />
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Banner;

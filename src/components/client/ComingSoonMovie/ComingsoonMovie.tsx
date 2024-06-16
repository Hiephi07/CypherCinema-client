import React, { useState } from "react";
import { motion } from "framer-motion";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { IoIosInformationCircle } from "react-icons/io";
import movie1 from "/assets/images/PostersMovie/ComingSoon/movie1.png";
import movie2 from "/assets/images/PostersMovie/ComingSoon/movie2.png";
import movie3 from "/assets/images/PostersMovie/ComingSoon/movie3.jpg";
import movie4 from "/assets/images/PostersMovie/ComingSoon/movie4.jpg";
import movie5 from "/assets/images/PostersMovie/ComingSoon/movie5.jpg";
import movie6 from "/assets/images/PostersMovie/ComingSoon/movie6.jpg";
import movie7 from "/assets/images/PostersMovie/ComingSoon/movie7.jpg";
import movie8 from "/assets/images/PostersMovie/ComingSoon/movie8.jpg";
import movie9 from "/assets/images/PostersMovie/ComingSoon/movie9.png";
import movie10 from "/assets/images/PostersMovie/ComingSoon/movie10.jpg";
import movie11 from "/assets/images/PostersMovie/ComingSoon/movie11.jpg";
import styles from './ComingsoonMovie.module.scss'

const PrevArrow = ({ style, onClick, isVisible }: any) => {
  return (
    <motion.button
      initial={{ x: "-10%" }}
      animate={{ x: isVisible ? "0%" : "-10%", opacity: isVisible ? 1 : 0 }}
      type="button"
      className={`left-[-5px] top-0 absolute z-10 h-full ${
        isVisible ? "block" : "none"
      }`}
      style={{ ...style }}
      onClick={onClick}
    >
      <div className={`${styles.shadowBoxMovieLeft} h-[100%]  flex items-center pb-20`}>
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
    initial={{ x: "10%" }}
    animate={{ x: isVisible ? "0%" : "10%", opacity: isVisible ? 1 : 0 }}
    type="button"
    className={`right-[-6px] top-0 absolute z-10 h-full ${
      isVisible ? "block" : "none"
    }`}
    style={{ ...style }}
    onClick={onClick}
  >
    <div className={`${styles.shadowBoxMovieRight} h-[100%] flex items-center pb-20`}>
        <GrFormNext
          className={`text-#98CF74 hover:text-#72be43 hover:transition-colors hover:duration-300 hover:ease-in-out size-20`}
        />
      </div>
    </motion.button>
  );
};

const ComingsoonMovie = () => {
  const arrBanner = [
    { id: 1, img: movie1, title: "SPEAK NO EVIL:PHim dài tập của bạn", category: "animation" },
    { id: 2, img: movie2, title: "DORAEMON THE MOVIE: NOBITA S EARTH SYMPHONY SIêu dài và gòn dài hơn nữa", category: "animation" },
    { id: 3, img: movie3, title: "SPEAK NO EVIL:", category: "animation" },
    { id: 4, img: movie4, title: "SPEAK NO EVIL:", category: "animation" },
    { id: 5, img: movie5, title: "SPEAK NO EVIL:", category: "animation" },
    { id: 6, img: movie6, title: "SPEAK NO EVIL:", category: "animation" },
    { id: 7, img: movie7, title: "SPEAK NO EVIL:", category: "animation" },
    { id: 8, img: movie8, title: "SPEAK NO EVIL:", category: "animation" },
    { id: 9, img: movie9, title: "SPEAK NO EVIL:", category: "animation" },
    { id: 10, img: movie10, title: "SPEAK NO EVIL:", category: "animation" },
    { id: 11, img: movie11, title: "SPEAK NO EVIL:", category: "animation" },
  ];

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentSlider, setCurrentSlider] = useState<number>(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow isVisible={isHovered} />,
    nextArrow: <NextArrow isVisible={isHovered} />,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,

    customPaging: (index: number) => (
      <li className="rounded-full ">
        <GoDotFill
          className={`w-6 h-6 m-auto ${
            index === currentSlider ? "text-#72be43" : "text-#76777f"
          }`}
        />
      </li>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    afterChange: (index: number) => {
      setCurrentSlider(index);
    },
  };
  return (
    <>
      <section
        id="Promotion"
        className="px-4 pb-12 "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="font-black text-17.6px text-#fff text-center relative z-10">
          Phim sắp chiếu
        </h1>
        <Slider {...settings} className="cursor-grab  relative z-10">
          {arrBanner.map((slider) => (
            <div className="px-3 pb-3 ">
              <div className="wrap-img ">
                <Link className="" to={``}>
                  <img
                    className="rounded-xl"
                    src={slider.img}
                    alt={slider.title}
                  />
                </Link>
              </div>
              <Link
                to={``}
                className="font-black text-12.8px text-#fff hover:text-#72be43"
              >
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger  className="text-left mt-3 truncate w-32">{slider.title}</TooltipTrigger>
                    <TooltipContent sideOffset={5}   className=" border-0 bg-black rounded-xl ">
                      <p className="text-10px text-#fff ">{slider.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                {/* <h4 className="mt-3 truncate w-32">{slider.title}</h4> */}
              </Link>
              <span className="block text-#ccc text-11px mt-2">
                Thể loại phim:
                <Link to={``} className="text-#fff hover:text-#72be43">
                  {" "}
                  {slider.category}
                </Link>
              </span>
              <Sheet>
                <SheetTrigger className="font-bold uppercase transition-all duration-600 ease-in-out mt-4 text-11px py-0 px-2 h-8 border rounded border-#90C63F border-solid text-#fff bg-#2c2c2c4a hover:text-#fff hover:bg-#72be43">
                  <div className="flex items-center justify-start "><IoIosInformationCircle className="mr-2"/> Thông tin chi tiết</div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default ComingsoonMovie;

import styles from "./ComingsoonMovie.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { IoIosInformationCircle } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
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
import { TooltipArrow } from "@radix-ui/react-tooltip";

const PrevArrow = ({ style, onClick, isVisible }: any) => {
  return (
    <motion.button
      initial={{ x: "-10%" }}
      animate={{
        x: isVisible ? "0%" : "-10%",
        opacity: isVisible ? 1 : 0,
      }}
      type="button"
      className={`left-[-5px] top-0 absolute z-10 h-full ${
        isVisible ? "block" : "none"
      }`}
      style={{ ...style }}
      onClick={onClick}
    >
      <div
        className={`${styles.shadowBoxMovieLeft} h-[100%]  flex items-center pb-20`}
      >
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
      animate={{
        x: isVisible ? "0%" : "10%",
        opacity: isVisible ? 1 : 0,
      }}
      type="button"
      className={`right-[-6px] top-0 absolute z-10 h-full ${
        isVisible ? "block" : "none"
      }`}
      style={{ ...style }}
      onClick={onClick}
    >
      <div
        className={`${styles.shadowBoxMovieRight} h-[100%] flex items-center pb-20`}
      >
        <GrFormNext
          className={`text-#98CF74 hover:text-#72be43 hover:transition-colors hover:duration-300 hover:ease-in-out size-20`}
        />
      </div>
    </motion.button>
  );
};

const ComingsoonMovie = () => {
  const arrBanner = [
    {
      id: 1,
      img: movie1,
      title: "SPEAK NO EVIL:PHim dài tập của bạn",
      category: "animation",
    },
    {
      id: 2,
      img: movie2,
      title:
        "DORAEMON THE MOVIE: NOBITA S EARTH SYMPHONY SIêu dài và gòn dài hơn nữa",
      category: "animation",
    },
    {
      id: 3,
      img: movie3,
      title: "SPEAK NO EVIL:",
      category: "Animation",
    },
    {
      id: 4,
      img: movie4,
      title: "SPEAK NO EVIL:",
      category: "Animation",
    },
    {
      id: 5,
      img: movie5,
      title: "SPEAK NO EVIL:",
      category: "Animation",
    },
    {
      id: 6,
      img: movie6,
      title: "SPEAK NO EVIL:",
      category: "Animation",
    },
    {
      id: 7,
      img: movie7,
      title: "SPEAK NO EVIL:",
      category: "Animation",
    },
    {
      id: 8,
      img: movie8,
      title: "SPEAK NO EVIL:",
      category: "Animation",
    },
    {
      id: 9,
      img: movie9,
      title: "SPEAK NO EVIL:",
      category: "Animation",
    },
    {
      id: 10,
      img: movie10,
      title: "SPEAK NO EVIL:",
      category: "Animation",
    },
    {
      id: 11,
      img: movie11,
      title: "SPEAK NO EVIL:",
      category: "Animation",
    },
  ];

  const [isHovered, setIsHovered] =
    useState<boolean>(false);
  const [currentSlider, setCurrentSlider] =
    useState<number>(0);

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
            index === currentSlider
              ? "text-#72be43"
              : "text-#76777f"
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
        <h1
          className={`font-black text-17.6px text-#fff text-center relative z-10 pb-[30px]`}
        >
          Phim sắp chiếu
        </h1>
        <Slider
          {...settings}
          className="cursor-grab  relative z-10"
        >
          {arrBanner.map((slider, index) => (
            <div className="px-3 pb-3 " key={index}>
              <Sheet>
              <SheetTrigger className="">

              <div className="wrap-img ">
                  <img
                    className="rounded-xl"
                    src={slider.img}
                    alt={slider.title}
                  />
              </div>
              <div
                className={`font-black text-12.8px text-#fff hover:text-#72be43 inline-block`}
              >
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger className="text-left mt-3 truncate w-[220px]">
                      {slider.title}
                    </TooltipTrigger>
                    <TooltipContent
                      sideOffset={5}
                      className=" border-0 bg-black rounded-[6px]"
                    >
                      <p className="text-10px text-#fff uppercase">
                        {slider.title}
                      </p>
                      <TooltipArrow
                        asChild={false}
                        className="fill-black"
                        width={16}
                        height={8}
                      />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex mt-2 text-11px">
                <p className="block text-#ccc  mr-1">
                  Thể loại phim:
                </p>
                <Link
                  to={``}
                  className="text-#fff hover:text-#72be43"
                >
                  {slider.category}
                </Link>
              </div>
              
                  <div className="w-[80%] flex items-center justify-start font-bold uppercase transition-all duration-600 ease-in-out mt-4 text-10px py-0 px-3 h-8 border rounded border-#90C63F border-solid text-#fff bg-#2c2c2c4a hover:text-#fff hover:bg-#72be43">
                    <IoIosInformationCircle className="mr-1 size-3" />{" "}
                    Thông tin chi tiết
                  </div>
                </SheetTrigger>
                <SheetContent
                  className="mt-12 ml-40 w-[996px] h-[550px] bg-#1a1a1a border-0 rounded-xl"
                  side={"top"}
                >
                  <div className="flex box-border justify-center ">
                    <div className="pr-4">
                      <div className="w-[320px] h-[476px] rounded-xl ">
                        <img
                          src={slider.img}
                          alt=""
                          className="rounded-xl h-full w-full"
                        />
                      </div>
                      <div className="flex justify-center"></div>
                    </div>
                    <div className="pl-4 text-#fff">
                      <h1 className="text-#72be43 font-bold text-20px mb-5">
                        TILL WE MEET: NẾU GẶP LẠI EM TRÊN
                        NGỌN ĐỒI
                      </h1>
                      <p className="text-12.8px mb-5">
                        Thiếu niên rắc rối Yuri quay ngược
                        thời gian về năm 1945 và yêu một phi
                        công cảm tử, Akira.
                      </p>
                      <div className="flex text-12.8px mb-5">
                        <span className="mr-1 text-#ccc">
                          Đạo diễn:
                        </span>
                        <Link to={``}>Yoichi Narita</Link>
                      </div>
                      <div className="flex text-12.8px mb-5">
                        <span className="mr-1 text-#ccc">
                          Diễn viên:
                        </span>
                        <Link to={``}>
                          Haruka Fukuhara, Hayato Onozuka
                        </Link>
                      </div>
                      <div className="flex text-12.8px mb-5">
                        <span className="mr-1 text-#ccc">
                          Thể loại:
                        </span>
                        <Link to={``}> Romance</Link>
                      </div>
                      <div className="flex text-12.8px mb-5">
                        <span className="mr-1 text-#ccc">
                          Khởi chiếu:
                        </span>
                        <Link to={``}>21/06/2024</Link>
                      </div>
                      <div className="flex text-12.8px mb-5">
                        <span className="mr-1 text-#ccc">
                          Thời lượng:
                        </span>
                        <Link to={``}>120 ph</Link>
                      </div>
                    </div>
                  </div>
                  <SheetClose
                    className="fill-#fff z-40 hover:transition-colors hover:duration-200 hover:ease-in-out absolute top-2.5 right-2.5 hover:text-#72be43"
                    asChild
                  >
                    <button type="submit">
                      <IoIosClose className="size-7" />
                    </button>
                  </SheetClose>
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

import { aboutUs } from "@/_constant";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import styles from "./AboutUsPage.module.scss";
import Event from "@/components/client/Event/Event";
const AboutUsPage = () => {
  const PrevArrow = ({
    style,
    onClick,
    isVisible,
  }: any) => {
    return (
      <motion.button
        initial={{ x: "50%" }}
        animate={{
          x: isVisible ? "20%" : "50%",
          opacity: isVisible ? 1 : 0,
        }}
        type="button"
        className={`left-0 top-0 absolute z-30 h-full ${
          isVisible ? "block" : "none"
        }`}
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

  const NextArrow = ({
    style,
    onClick,
    isVisible,
  }: any) => {
    return (
      <motion.button
        initial={{ x: "-50%" }}
        animate={{
          x: isVisible ? "-20%" : "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        type="button"
        className={`right-0 top-0 absolute z-30 h-full ${
          isVisible ? "block" : "none"
        }`}
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
  const [isHovered, setIsHovered] =
    useState<boolean>(false);
  const [currentSlider, setCurrentSlider] =
    useState<number>(0);

  const settings = {
    className: "",
    infinite: true,
    centerPadding: "350px",
    centerMode: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow isVisible={isHovered} />,
    nextArrow: <NextArrow isVisible={isHovered} />,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          // adaptiveHeight: true,
          centerPadding: "0px",
          centerMode: false,
        },
      },
    ],

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
        id="Event"
        className="px-4 pb-16 pt-[136px] border-4 border-t-0 border-b-4 border-l-0 border-r-0 border-[rgba(255,255,255,0.1)] "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="font-black text-[26px] text-#fff text-center pb-[26px] pt-[36px]">
          Về chúng tôi
        </h1>
        <Slider
          {...settings}
          className="cursor-grab  pt-[30px] "
        >
          {aboutUs.map((slider, index) => {
            console.log(index, currentSlider);
            return (
              <div className=" pb-10 " key={index}>
                <div className="wrap-img mb-5  ">
                  <img
                    className="rounded-[8px] mx-auto"
                    src={slider.img}
                  />
                </div>
                <h4 className="text-left mb-2 font-black text-14.4px text-#b2ec0f hover:text-#72be43"></h4>

                <p
                  className={`   text-[#fff] text-[16px] text-center transform duration-200 ${
                    index == currentSlider
                      ? "scale-(1) "
                      : "scale-0 "
                  } `}
                >
                  {slider.text}
                  <br />
                  <br />
                  {slider.text2 ? slider.text2 : ""}
                </p>
              </div>
            );
          })}
        </Slider>
      </section>
      <Event />
    </>
  );
};

export default AboutUsPage;

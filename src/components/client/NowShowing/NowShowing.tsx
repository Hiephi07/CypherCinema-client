import { useContext, useEffect, useState } from "react";
import styles from "./NowShowing.module.scss";
import { useMovieQuery } from "@/_hooks/useMovieQuery";
import {
  motion,
  useAnimation,
  useDragControls,
} from "framer-motion";
import MovieCard from "../MovieCard/MovieCard";
import ModalMovie from "../ModalMovie/ModalMovie";
import { ModalContext } from "@/_context/ModalMovie";
import ModalConfirm from "@/components/client/ModalConfirm/ModalConfirm";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Link } from "react-router-dom";
import {
  IoIosClose,
  IoIosInformationCircle,
} from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const NowShowingMovies = () => {
  const { data: movies } = useMovieQuery();

  const [direction, setDirection] = useState(0);
  const maxCardSlide = 3;

  const { isModalOpen, toggleModal } =
    useContext(ModalContext);

  const [isConfirmModal, setConfirmModal] = useState(false);
  const toggleConfirmModal = () => {
    setConfirmModal(!isConfirmModal);
  };
  const control = useAnimation();

  const btnAnimate = {
    hover: {
      scale: 1.2,
      x: 0,
      opacity: 0.7,
    },
    initial: { scale: 1, x: -10, opacity: 0 },
  };

  // const [isHovered, setIsHovered] = useState(false);

  const [activeSlide, setActiveSlide] = useState(0);

  const slide = (newDirection: number) => {
    const newSlide = activeSlide + newDirection;
    if (!movies || movies.length === 0) return;
    if (
      Math.abs(newSlide) >=
      movies?.length - maxCardSlide
    ) {
      setActiveSlide(0);
      setDirection(0);
      control.start({
        x: `${0}%`,
      });
    } else if (newSlide >= 0) {
      return;
    } else {
      setActiveSlide(newSlide);

      setDirection(
        (prevDirection) => prevDirection + newDirection
      );
      control.start({
        x: `${(direction + newDirection) * 20}%`,
      });
    }
  };
  const btnDot = (newSlide: number) => {
    setActiveSlide(newSlide);
    setDirection(newSlide);
    control.start({
      x: `${newSlide * 20}%`,
    });
  };

  const controlDrag = useDragControls();
  const slideDistance = 100;
  // slide run automatic

  //control drag slide
  // useEffect(() => {});
  const PrevArrow = ({
    style,
    onClick,
    isVisible,
  }: any) => {
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

  const NextArrow = ({
    style,
    onClick,
    isVisible,
  }: any) => {
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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
  if (movies)
    return (
      <>
        {/* Up coming movies  */}

        <section
          id="Promotion"
          className="px-0 pb-12 h-auto  "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1
            className={`font-black text-17.6px text-#fff text-center relative z-10 pb-[26px] pt-[36px]`}
          >
            Phim đang chiếu
          </h1>
          <Slider
            {...settings}
            className="cursor-grab  relative z-10"
          >
            {movies.map((item, idx) => (
              <div
                className="block w-full l-0 h-auto mb-[40px] "
                // className={`px-3 pb-3 ${styles["banner-content"]} `}
                key={idx}
              >
                <MovieCard
                  key={idx}
                  movie={item}
                  number={idx}
                  toggleConfirm={toggleConfirmModal}
                />
              </div>
            ))}
          </Slider>
        </section>
        {isModalOpen && (
          <ModalMovie toggleModal={toggleModal} />
        )}
        <ModalConfirm
          isOpen={isConfirmModal}
          toggleModal={toggleConfirmModal}
        ></ModalConfirm>
      </>
    );
};

export default NowShowingMovies;

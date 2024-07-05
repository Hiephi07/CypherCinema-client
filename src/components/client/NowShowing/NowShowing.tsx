import { useContext, useEffect, useState } from "react";
// import styles from "./NowShowingMovies.scss";
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

  const [isHovered, setIsHovered] = useState(false);

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
  useEffect(() => {
    const timer = setInterval(() => {
      if (
        movies &&
        Math.abs(activeSlide) >=
          movies?.length - maxCardSlide
      ) {
        setActiveSlide(0);
        setDirection(0);
        control.start({
          x: `${0}%`,
        });
      } else slide(-1);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSlide, movies, control]);

  //control drag slide
  // useEffect(() => {});

  return (
    <>
      {/* Up coming movies  */}
      <section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col overflow-hidden  justify-center items-center max-w-[1330px] mx-[auto] relative"
      >
        <h2 className="text-[var(--theme-text)] font-700 text-[1.6em] my-[20px]">
          Phim sắp chiếu
        </h2>
        <motion.div
          animate={control}
          drag="x"
          transition={{ duration: 0.5 }}
          className="block w-full l-0 h-[537px] "
        >
          {movies &&
            movies.map((item, idx) => {
              return (
                <MovieCard
                  key={idx}
                  movie={item}
                  number={idx}
                  toggleConfirm={toggleConfirmModal}
                />
              );
            })}
        </motion.div>
        {/* dots start */}
        <div className="">
          {movies && (
            <ol className="flex flex-row gap-3 mx-auto mt-[35px] mb-[30px] ">
              {movies.map((item, idx) => {
                return (
                  <li
                    onClick={() => btnDot(-idx)}
                    key={idx}
                    className={` w-[12px] h-[12px] rounded-[50%] cursor-pointer  duration-300 ${
                      -idx === activeSlide
                        ? "active"
                        : "bg-[var(--theme-dot)] "
                    }`}
                  ></li>
                );
              })}
            </ol>
          )}
        </div>
        {/* dots end */}

        {/* btn control start  */}
        <motion.button
          variants={{
            hover: {
              background:
                "linear-gradient(90deg,rgba(26,29,41,1) 0%,rgba(0,0,0,0) 100%)",
            },
          }}
          animate={isHovered ? "hover" : ""}
          className="absolute z-5 duration-200 left-0 h-[532px]  "
          type="button"
          aria-label="Previous"
          onClick={() => slide(1)}
        >
          <motion.img
            variants={btnAnimate}
            animate={isHovered ? "hover" : "initial"}
            src="/assets/images/Icons/left-arrow.svg"
            alt=""
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </motion.button>
        <motion.button
          variants={{
            hover: {
              background:
                "linear-gradient(270deg, rgba(26, 29, 41, 1) 0%, rgba(0, 0, 0, 0) 100%)",
            },
          }}
          animate={isHovered ? "hover" : ""}
          className="absolute z-5 right-[0px] h-[532px] "
          type="button"
          aria-label="Next"
          onClick={() => slide(-1)}
        >
          <motion.img
            variants={{
              hover: {
                scale: 1.2,
                x: 0,
                opacity: 0.7,
              },
              initial: { scale: 1, x: 10, opacity: 0 },
            }}
            animate={isHovered ? "hover" : "initial"}
            src="/assets/images/Icons/right-arrow.svg"
            alt=""
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </motion.button>
        {/* btn control end */}
      </section>{" "}
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

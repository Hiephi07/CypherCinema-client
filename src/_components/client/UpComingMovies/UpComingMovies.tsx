import {
  act,
  useContext,
  useEffect,
  useState,
} from "react";
// import styles from "./UpComingMovies.scss";
import { useMovieQuery } from "@/_hooks/useMovieQuery";
import { motion, useAnimation } from "framer-motion";
import MovieCard from "../MovieCard/MovieCard";
import ModalMovie from "../ModalMovie/ModalMovie";
import { ModalContext } from "@/_context/ModalMovie";
import ModalConfirm from "../ModalConfirm/ModalConfirm";
import { setDefaultAutoSelectFamily } from "net";

const UpComingMovies = () => {
  const { data: movies } = useMovieQuery();

  const [direction, setDirection] = useState(0);
  const maxCardSlide = 3;

  const { isModalOpen, toggleModal } =
    useContext(ModalContext);

  const [isConfirmModal, setConfirmModal] = useState(false);
  const toggleConfirmModal = () => {
    console.log("ok");
    setConfirmModal(!isConfirmModal);
  };
  const control = useAnimation();

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
  }, [activeSlide, movies]);

  return (
    <>
      {/* Up coming movies  */}
      <section className="flex flex-col overflow-hidden  justify-center items-center max-w-[1330px] mx-[auto] relative">
        <h2 className="text-[var(--theme-text)] font-700 text-[1.6em] my-[20px]">
          Phim đang chiếu
        </h2>
        <motion.div
          animate={control}
          transition={{ duration: 0.5 }}
          className="block w-full l-0 h-[600px] "
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
        <div className="mt-[-20px]">
          {movies && (
            <ol className="flex flex-row gap-3 mx-auto ">
              {movies.map((item, idx) => {
                return (
                  <li
                    onClick={() => btnDot(-idx)}
                    key={idx}
                    className={` w-[12px] h-[12px] rounded-[50%] cursor-pointer   opacity-[0.4] duration-300 ${
                      -idx === activeSlide
                        ? "active"
                        : "bg-[var(--theme-dot)]"
                    }`}
                  ></li>
                );
              })}
            </ol>
          )}
        </div>
        <button
          className="absolute z-5 left-[8px] top-[300px] "
          type="button"
          aria-label="Previous"
          onClick={() => slide(1)}
        >
          <img
            src="/assets/images/Icons/left-arrow.svg"
            alt=""
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </button>
        <button
          className="absolute z-5 right-[0px] top-[300px] "
          type="button"
          aria-label="Next"
          onClick={() => slide(-1)}
        >
          <img
            src="/assets/images/Icons/right-arrow.svg"
            alt=""
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </button>
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

export default UpComingMovies;

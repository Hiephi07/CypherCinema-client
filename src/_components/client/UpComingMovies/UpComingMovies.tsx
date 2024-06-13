import { Button } from "@/_components/ui/button";
import React, { useContext, useState } from "react";
import styles from "./UpComingMovies.scss";
import { useMovieQuery } from "@/_hooks/useMovieQuery";
import { motion, useAnimation } from "framer-motion";
import MovieCard from "../MovieCard/MovieCard";
import ModalMovie from "../ModalMovie/ModalMovie";
import { ModalContext } from "@/_context/ModalMovie";

const UpComingMovies = () => {
  const { data: movies } = useMovieQuery();
  const [direction, setDirection] = useState(0);
  const { isModalOpen, toggleModal } =
    useContext(ModalContext);

  const [activeSlide, setActiveSlide] = useState(0);

  const slide = (newDirection: number) => {
    const newSlide = activeSlide + newDirection;
    setActiveSlide(newSlide);
    console.log(activeSlide);
    setDirection(
      (prevDirection) => prevDirection + newDirection
    );
    constrols.start({
      x: `${(direction + newDirection) * 20}%`,
    });
  };
  const constrols = useAnimation();

  return (
    <>
      <section className="flex flex-col   justify-center items-center max-w-[1330px] mx-[15px] ">
        <h2 className="text-[var(--theme-text)] font-700 text-[1.6em] my-[20px]">
          Phim đang chiếu
        </h2>
        <motion.div
          animate={constrols}
          transition={{ duration: 0.5 }}
          className="block w-full l-0 h-[600px] overflow-hidden"
        >
          {movies &&
            movies.map((item, idx) => {
              return (
                <MovieCard
                  key={idx}
                  movie={item}
                  number={idx}
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
                    key={idx}
                    className={` w-[12px] h-[12px] rounded-[50%] cursor-pointer   opacity-[0.4]  ${
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
      </section>{" "}
      <button
        className="absolute z-5 left-[28px] top-[400px] "
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
        className="absolute z-5 right-[28px] top-[400px] "
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
      {isModalOpen && (
        <ModalMovie toggleModal={toggleModal} />
      )}
    </>
  );
};

export default UpComingMovies;

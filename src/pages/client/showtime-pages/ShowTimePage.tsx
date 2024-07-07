import ModalMovieProvider from "@/_context/ModalMovie";
import ComingsoonMovie from "@/components/client/ComingSoonMovie/ComingsoonMovie";
import Event from "@/components/client/Event/Event";
import NowShowingMovies from "@/components/client/NowShowing/NowShowing";
import React from "react";

const ShowTimePage = () => {
  return (
    <>
      <div className="container pt-[100px] ">
        <ModalMovieProvider>
          <NowShowingMovies />
        </ModalMovieProvider>
        <ComingsoonMovie />
        <Event />
      </div>
    </>
  );
};

export default ShowTimePage;

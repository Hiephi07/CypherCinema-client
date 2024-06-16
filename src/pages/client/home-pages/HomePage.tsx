import BannerButton from "@/components/client/BannerBottom/BannerButton";
import Banner from "@/components/client/BannerTop/Banner";
import ComingsoonMovie from "@/components/client/ComingSoonMovie/ComingsoonMovie";
import Event from "@/components/client/Event/Event";
import Promotion from "@/components/client/Promotion/Promotion";
import UpComingMovies from "@/components/client/UpComingMovies/UpComingMovies";
import ModalMovieProvider from "@/_context/ModalMovie";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Banner />
        {/* <ModalMovieProvider>
          <UpComingMovies />
        </ModalMovieProvider> */}
        <main className="container">
          <ComingsoonMovie />
          <BannerButton />
          <Promotion />
          <Event /> 
        </main>
    </>
  );
};

export default HomePage;

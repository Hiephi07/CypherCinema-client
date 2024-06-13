import Header from "@/_components/client/Header/Header";
import UpComingMovies from "@/_components/client/UpComingMovies/UpComingMovies";
import ModalMovieProvider from "@/_context/ModalMovie";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Header />
      <ModalMovieProvider>
        <UpComingMovies />
      </ModalMovieProvider>
      {/* <Header /> */}
      <UpComingMovies />
    </>
  );
};

export default HomePage;

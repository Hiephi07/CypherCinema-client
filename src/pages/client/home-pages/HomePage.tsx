import BannerButton from "@/components/client/BannerBottom/BannerButton";
import Banner from "@/components/client/BannerTop/Banner";
import ComingsoonMovie from "@/components/client/ComingSoonMovie/ComingsoonMovie";
import Event from "@/components/client/Event/Event";
import Promotion from "@/components/client/Promotion/Promotion";
import UpComingMovies from "@/components/client/UpComingMovies/UpComingMovies";
import ModalMovieProvider from "@/_context/ModalMovie";
import Movie_is_showing from "@/components/client/MovieIsShow/MovieIsShow";

const HomePage = () => {
  return (
    <>
      <Banner />

      <main className="container">
        <ModalMovieProvider>
          <UpComingMovies />
        </ModalMovieProvider>
        <ComingsoonMovie />
        <BannerButton />
        <Promotion />
        <Event />
      </main>
    </>
  );
};

export default HomePage;

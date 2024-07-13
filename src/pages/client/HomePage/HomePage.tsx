import BannerButton from "@/components/client/BannerBottom/BannerButton";
import Banner from "@/components/client/BannerTop/Banner";
import ComingsoonMovie from "@/components/client/ComingSoonMovie/ComingsoonMovie";
import Event from "@/components/client/Event/Event";
import Promotion from "@/components/client/Promotion/Promotion";
import ModalMovieProvider from "@/_context/ModalMovie";
import Movie_is_showing from "@/components/client/MovieIsShow/MovieIsShow";
import StarMember from "@/components/client/StarMember/StarMember";
import NowShowingMovies from "@/components/client/NowShowing/NowShowing";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="container">
        <ModalMovieProvider>
          <NowShowingMovies />
        </ModalMovieProvider>
        <ComingsoonMovie />
        <BannerButton />
      </div>
      <StarMember />
      {/* <Promotion /> */}
      <Event />
    </>
  );
};

export default HomePage;

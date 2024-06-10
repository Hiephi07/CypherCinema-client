import { Button } from "@/_components/ui/button";
import React from "react";
import Slider from "react-slick";
import styles from "./UpComingMovies.scss";
function Arrow(props: {
  className: string;
  style: React.CSSProperties;
  onClick: () => void;
  direction: "prev" | "next";
}) {
  const { className, style, onClick, direction } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none", // Initially hide the arrow
      }}
      onClick={onClick}
    ></div>
  );
}

const UpComingMovies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <Arrow
        className="slick-next"
        style={{}}
        onClick={() => {}}
        direction="next"
      />
    ),
    prevArrow: (
      <Arrow
        className="slick-prev"
        style={{}}
        onClick={() => {}}
        direction="prev"
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="tieude">Phim Sắp Chiếu </h1>
      <div className="slider-container">
        <Slider {...settings}>
          {[...Array(6)].map((_, index) => (
            <div key={index} className="carl">
              <img
                src={`src/assets/images/PostersMovie/NowShowing/logo${
                  index + 1
                }.jpg`}
                alt=""
              />
              <div className="content-nd">
                <div className="nd">
                  <b>Tên Phim</b>
                  <h2>thể loại phim:Action</h2>
                </div>
                <div className="btn-submit">
                  <Button
                    variant="destructive"
                    className="btn-thongtin"
                  >
                    Thông Tin Chi Tiết
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UpComingMovies;

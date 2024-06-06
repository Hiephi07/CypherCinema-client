import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import "./Movie_is_show.scss"

function Arrow(props: { className: string; style: React.CSSProperties; onClick: () => void; direction: "prev" | "next" }) {
  const { className, style, onClick, direction } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none", // Initially hide the arrow
      }}
      onClick={onClick}
    >
      
    </div>
  );
}

const Movie_is_showing = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow className="slick-next" style={{}} onClick={() => {}} direction="next" />,
    prevArrow: <Arrow className="slick-prev" style={{}} onClick={() => {}} direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <h1 className="tieude">Phim Đang Chiếu</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {[...Array(6)].map((_, index) => (
            <div key={index} className="carl">
             <img src={`src/assets/images/PostersMovie/NowShowing/logo${index + 1}.jpg`} alt="" />
              <div className="content-nd">
                <div className="btn-nd">
                  <Button variant="destructive" className="btn-t18" id="btn-button">T18</Button>
                  <Button variant="outline" className="btn-phude">Phụ Đề</Button>
                  <Button variant="outline" className="btn-custom-green" id="btn-button">2D</Button>
                </div>
                <div className="nd">
                  <b>Tên Phim</b>
                  <h2>thể loại phim:Action</h2>
                </div>
                <div className="btn-submit">
                  <Button variant="destructive" className="btn-muave">Mua vé ngay</Button>
                  <Button className="btn-icon">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF">
                        <path d="M444-288h72v-240h-72v240Zm35.79-312q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Zm.49 504Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                      </svg>
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Movie_is_showing;

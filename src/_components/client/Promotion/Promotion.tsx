
import { Button } from "@/_components/ui/button";
import React, { Component } from "react";
import Slider from "react-slick";
import "./Promotion.scss"

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green"}}
        onClick={onClick}
      />
    );
  }
  
const Promotion = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
        prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />
      };
      return (
       <>
        <h1 className="tieude">Khuyến Mại </h1>
          <div className="slider-container">
            <Slider {...settings}>
              {[...Array(4)].map((_, index) => (
                <div key={index} className="carl ">
              
                    <img src={`src/assets/images/PromotionalEvents/Promotional/item${index + 1}.png`} alt="" className="h-48 object-cover"  />
               
                  
                  <div className="content-nd">
                   
                    <div className="nd-promotion">
                      <b>Chạm thẻ visa – Tặng ngay bắp lớn</b>
                      <p>Thời gian khuyến mãi: 26/8/2023 – 26/9/2023</p>
                    </div>
                   
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </>
       
      );
    }
export default Promotion

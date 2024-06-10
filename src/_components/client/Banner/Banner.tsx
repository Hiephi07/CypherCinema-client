import React from "react";
import "./Banner.scss";
import { Button } from "@/_components/ui/button";
const Banner = () => {
  const images = [
    "src/assets/images/BHDstarMember/image-16.png",
    "src/assets/images/BHDstarMember/image-17.png",
    "src/assets/images/BHDstarMember/image-18.png",
  ];

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" flex justify-center mb-1.5">
          <img
            src="src/assets/images/BHDstarMember/image.png"
            alt=""
            className="mx-auto mb-1.5  h-28"
          />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
          {images.map((src, index) => (
            <div className="group relative" key={index}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-800">
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 ">
          <div className="btn-submit-banner ">
            <Button className=" bg-black hover:bg-green-500 ">
              Đăng Kí Ngay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

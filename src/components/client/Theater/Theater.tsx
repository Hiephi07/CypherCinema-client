import React from "react";
import { Theaters } from "@/_constant";
import styles from "./Theater.module.scss";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";

const Theater = () => {
  return (
    <>
      <h1 className="font-black text-17.6px text-#fff text-center pb-6 pt-8">
        Hệ thống rạp
      </h1>
      <div className="grid grid-cols-4 gap-12 mx-[90px] ">
        {Theaters.map((theater) => (
          <div className="max-w-[244px] ">
            <Sheet>
              <SheetTrigger>
                <div className="max-h-[330px]">
                <img
                  className="rounded-[6px] mb-[20px]  w-full h-full "
                  src={theater.src}
                  alt=""
                />
                </div>
                <div className="text-left">
                  <h2 className="text-#fff font-black hover:text-#72be43 text-[16px] leading-[20px] mb-[20px]">
                    {theater.title}
                  </h2>
                  <button
                    className={`${styles.ButtonGradientReversed} text-#fff text-[12px] font-black py-[8px] px-[10px] min-w-[] uppercase `}
                  >
                    {theater.span}
                  </button>
                </div>
              </SheetTrigger>
              <SheetContent
                className="mt-12 ml-40 w-[996px] h-[550px] bg-#1a1a1a border-0 rounded-xl"
                side={"top"}
              >
                <div className="flex box-border justify-center ">
                  <div className="pr-4">
                    <div className="w-[320px]  rounded-xl ">
                      <img
                        src={theater.src}
                        alt=""
                        className="rounded-xl h-full w-full"
                      />
                    </div>
                    <div className="flex justify-center"></div>
                  </div>
                  <div className="pl-4 text-#fff">
                    <h1 className="text-#72be43 font-bold text-20px mb-5">
                      {theater.title}
                    </h1>
                    <p className="text-12.8px mb-5">
                      Thiếu niên rắc rối Yuri quay ngược thời gian về năm 1945
                      và yêu một phi công cảm tử, Akira.
                    </p>
                    <div className="flex text-12.8px mb-5">
                      <span className="mr-1 text-#ccc">Đạo diễn:</span>
                      <Link to={``}>Yoichi Narita</Link>
                    </div>
                    <div className="flex text-12.8px mb-5">
                      <span className="mr-1 text-#ccc">Diễn viên:</span>
                      <Link to={``}>Haruka Fukuhara, Hayato Onozuka</Link>
                    </div>
                    <div className="flex text-12.8px mb-5">
                      <span className="mr-1 text-#ccc">Thể loại:</span>
                      <Link to={``}> Romance</Link>
                    </div>
                    <div className="flex text-12.8px mb-5">
                      <span className="mr-1 text-#ccc">Khởi chiếu:</span>
                      <Link to={``}>21/06/2024</Link>
                    </div>
                    <div className="flex text-12.8px mb-5">
                      <span className="mr-1 text-#ccc">Thời lượng:</span>
                      <Link to={``}>120 ph</Link>
                    </div>
                  </div>
                </div>
                <SheetClose
                  className="fill-#fff z-40 hover:transition-colors hover:duration-200 hover:ease-in-out absolute top-2.5 right-2.5 hover:text-#72be43"
                  asChild
                >
                  <button type="submit">
                    <IoIosClose className="size-7" />
                  </button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        ))}
      </div>
    </>
  );
};

export default Theater;

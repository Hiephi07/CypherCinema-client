import React from "react";
import styles from "./UserInfomation.module.scss";
import { userPoint} from "@/_constant";
import { Button } from "@/components/ui/button";
import Day from "./Day/Day";

const UserInfomation = () => {
  return (
    <>
      <section id="userInfo" className="pt-[142px]">
        <div className="pb-[30px]">
          <h1 className="font-bold  text-#fff text-center text-[25.6px]">
            Tài khoản
          </h1>
        </div>
        {/* Box left */}
        <div className="px-[15px] mx-[73px]">
          <div className=" px-[20px] py-[25px] border border-solid border-#454D6A rounded-[6px] w-[55%]">
            <div className="flex">
              <div className="w-[30%] flex items-center">
                <div className="w-[150px] h-[150px] ">
                  <img
                    className="w-full h-full rounded-full border border-solid border-#72be43"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pl-[16px]">
                <h4 className="text-#72be43 font-black mb-[15px] ">
                  User Name
                </h4>
                <div className="mb-[10px]">
                  <ul className="">
                    {userPoint.map((item, index) => {
                      const isInline = index <= 1 || (index > 1 && index <= 3);
                      const isIndexFinal = index === userPoint.length - 1;
                      return (
                        <li
                          className={`text-[16px] mb-[5px]  ${
                            isInline ? "inline-block w-[40%]" : "block"
                          }`}
                          key={index}
                        >
                          <span
                            className={` font-normal ${
                              isIndexFinal
                                ? "text-[14px] text-#ffc"
                                : "text-#fff"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span
                            className={`text-#72be43 ${
                              isIndexFinal ? "hidden" : ""
                            }`}
                          >
                            {" "}
                            0
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <hr className="border-dashed my-[30px] border-#454D6A" />
            <div className="">
              <form action="">
                <div className="grid grid-cols-2 mb-3">
                  <div className="pr-[10px]">
                    <label htmlFor="" className="text-#fff text-[14px] inline-block mb-[10px]">Họ *</label>
                    <input
                      type="text"
                      className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                      placeholder="Nguyễn"
                    />
                  </div>
                  <div className="pl-[10px]">
                    <label htmlFor="" className="text-#fff text-[14px] inline-block mb-[10px]">Tên đệm và tên *</label>
                    <input
                      type="text"
                      className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                      placeholder="Đức"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <div className="">
                    <label htmlFor="" className="text-#fff text-[14px] inline-block mb-[10px]">Email *</label>
                    <input
                      type="email"
                      className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                      placeholder="Nguyentrungduc2807@gmail.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-6 mb-3">
                  <div className="pr-[10px] col-span-4">
                    <label htmlFor="" className="text-#fff text-[14px] inline-block mb-[10px]">Mật khẩu *</label>
                    <input
                      type="password"
                      className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                      placeholder="Nhập mật khẩu vào đây"
                    />
                  </div>
                  <div className="pl-[10px] flex items-end col-span-2">
                    <Button className="bg-#72be43 w-full hover:bg-#5B9836 px-2 py-1.5 max-h-[39.5px] font-semibold tracking-wider text-[14px] text-#fff rounded uppercase">Đổi mật khẩu</Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <div className="">
                    <label htmlFor="" className="text-#fff text-[14px] inline-block mb-[10px]">Số điện thoại *</label>
                    <input
                      type="number"
                      className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                      placeholder="0352359199" disabled
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <div className="">
                    <label htmlFor="" className="text-#fff text-[14px] inline-block mb-[10px]">Giới tính *</label>
                    <select id="gender" name="gender" className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff">
                        <option value="male" className={` hover:bg-#72be43 p-5`}>Nam</option>
                        <option value="female">Nữ</option>
                        <option value="other">Khác</option>
                    </select>
                  </div>
                </div> 
                <div className="grid grid-cols-3 mb-3">
                <div className="mx-[10px]">
                    <label htmlFor="" className="text-#fff text-[14px] inline-block mb-[10px]">Ngày sinh *</label>
                    <Day />
                  </div>
                  <div className="mr-[10px]">
                    <label htmlFor="" className="text-#fff text-[14px] inline-block mb-[10px]">Ngày sinh *</label>
                    <input
                      type="number"
                      className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                      placeholder="0352359199"
                    />
                  </div>
                  
                  <div className="ml-[10px]">
                    <label htmlFor="" className="text-#fff text-[14px] inline-block mb-[10px]">Ngày sinh *</label>
                    <input
                      type="number"
                      className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                      placeholder="0352359199"
                    />
                  </div>
                </div> 
                <div className="grid grid-cols-1 mb-3">
                  <div className="">
                    <label htmlFor="" className="text-#fff text-[14px] inline-block mb-[10px]">Tỉnh/Thành phố *</label>
                    <input
                      type="email"
                      className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                      placeholder="Hà Nội"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 mb-3">
                  <div className="">
                    <label htmlFor="" className="text-#fff text-[14px] inline-block mb-[10px]">Địa chỉ *</label>
                    <input
                      type="email"
                      className="block text-12.8px w-full text-#fff px-2 py-2 max-h-9 border rounded border-#454D6A focus:outline-none bg-#1A1D29 focus:bg-#151720 placeholder:text-#fff"
                      placeholder="Hà Nội"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-end col-span-2">
                    <Button className="bg-#72be43 w-[33%] hover:bg-#5B9836 px-2 py-[19px] max-h-4 font-semibold tracking-wider text-[14px] text-#fff rounded uppercase">Cập nhật</Button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfomation;

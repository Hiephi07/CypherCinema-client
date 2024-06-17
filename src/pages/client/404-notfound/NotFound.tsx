import React from "react";

const NotFoundPage = () => {
  return (
    <div className=" text-[#f1f1f1] pt-[132px] w-[1665px] h-[auto] mb-[30px] ">
      <div className="w-[1330px] h-[184px] pl-[15px] pb-[30px] text-center mx-auto">
        <span className="inline text-[96px] font-[700] opacity-[0.3]">
          404
        </span>
      </div>
      <div className="w-[1330px] h-[125px] text-center pl-[15px] pb-[30px] mx-auto">
        <h1 className="text-[1.7em] font-[700] mb-[13.6px] text-center ">
          Xin lỗi, trang này không tồn tại!
        </h1>
        <p className="mb-[20.8px]  text-center ">
          Không có nội dung ở trang này. Vui lòng thử lại ở
          đường link khác{" "}
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;

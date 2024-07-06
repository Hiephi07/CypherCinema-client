import React from "react";
import styles from "./LinkResetSent.module.scss";

const LinkResetSent = () => {
  return (
    <section className="pt-[136px] text-[var(--theme-text)] ">
      <div className="w-full max-w-[1300px] mx-auto">
        <div
          className={` w-full mx-auto  mt-[50px] mb-[50px] ${styles["link-reset-content"]}`}
        >
          <div className="flex flex-row items-center gap-[20px] text-[#81d724] text-[14.4px] leading-[23.04px] mb-[20px]">
            <img
              src="/assets/images/Icons/successIcon.png"
              alt=""
            />
            Email khôi phục mật khẩu đã được gửi
          </div>
          <div className="leading-[25.6px] text-[16px] h-full max-h-[128px]">
            Một thư email khôi phục mật khẩu đã được gửi cho
            địa chỉ email tài khoản của bạn, nhưng có thể sẽ
            mất vài phút để hiển thị trong Inbox của hộp
            thư. Vui lòng đợi ít nhất 10 phút trước khi gửi
            một yêu cầu khôi phục mật khẩu khác.
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkResetSent;

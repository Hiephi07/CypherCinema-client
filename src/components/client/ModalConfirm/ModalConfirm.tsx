import React, { useState } from "react";
import styles from "./ModalConfirm.module.scss";
import { motion } from "framer-motion";

interface ModalConfirmProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  isOpen,
  toggleModal,
}) => {
  const [isShaking, setIsShaking] = useState(false);

  const handleShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };
  if (!isOpen) return null;
  return (
    <motion.div
      onClick={handleShake}
      animate={
        isShaking
          ? {
              x: [0, -20, 20, -20, 20, 0],
              transition: {
                type: "tween",
                duration: 0.5,
                repeat: 1,
                repeatType: "reverse",
              },
            }
          : {}
      }
      className={styles.confirm}
    >
      <div
        className={styles["confirm-bg"]}
        style={{
          transitionDuration: "0.4s",
          transitionTimingFunction:
            "cubic-bezier(0.36, 0.55, 0.19, 1)",
        }}
      />
      <div className={styles.scrollpane}>
        <div className=" table-row w-full">
          <div className="table-cell align-middle ">
            <div
              className="max-h-[100%] px-[50px]"
              style={{ paddingTop: 40, paddingBottom: 40 }}
            >
              <div className="max-w-[1330px] px-[15px] mx-auto w-full">
                <div className="flex max-w-[1330px] mx-[-15px] px-0 w-auto ">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="m-auto max-w-[500px] bg-black rounded-[16px]"
                    style={{
                      padding: "20px 0 0 ",
                      transform: "translate(0px, 0px)",
                      transitionDuration: "0.4s",
                      transitionTimingFunction:
                        "cubic-bezier(0.36, 0.55, 0.19, 1)",
                    }}
                  >
                    <div
                      className=""
                      role="dialog"
                      aria-labelledby="jconfirm-box18803"
                      tabIndex={-1}
                      style={{
                        transitionDuration: "0.4s",
                        transitionTimingFunction:
                          "cubic-bezier(0.36, 0.55, 0.19, 1)",
                        transitionProperty: "all, margin",
                      }}
                    >
                      <div
                        className="jconfirm-closeIcon"
                        style={{ display: "none" }}
                      >
                        ×
                      </div>
                      <div className="jconfirm-title-c">
                        <span className="jconfirm-icon-c" />
                        <span
                          className={
                            styles["confirm-title"]
                          }
                        >
                          Xác nhận mua vé
                        </span>
                      </div>
                      <div
                        className="jconfirm-content-pane no-scroll"
                        style={{
                          transitionDuration: "0.4s",
                          transitionTimingFunction:
                            "cubic-bezier(0.36, 0.55, 0.19, 1)",
                          maxHeight: "255.891px",
                        }}
                      >
                        <div
                          className={
                            styles["confirm-content"]
                          }
                          id="jconfirm-box18803"
                        >
                          <div>
                            Phim được phổ biến đến người xem
                            dưới 13 tuổi với điều kiện xem
                            cùng cha, mẹ hoặc người giám hộ
                          </div>
                        </div>
                      </div>
                      <div
                        className="float-right"
                        style={{
                          padding: "10px 20px 10px",
                        }}
                      >
                        <button
                          type="button"
                          className="rounded-[4px] text-[var(--theme-text)] px-[10px] py-[8px] border-2 mr-[20px] border-solid border-[var(--primary-color)]"
                          onClick={toggleModal}
                        >
                          Chọn phim khác
                        </button>
                        <button
                          type="button"
                          className="btn-primary text-[var(--theme-text)] rounded-[4px] px-[10px] py-[8px] min-w-[125px] mb-[1em]"
                        >
                          Tiếp tục
                        </button>
                      </div>
                      <div className="jconfirm-clear" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalConfirm;

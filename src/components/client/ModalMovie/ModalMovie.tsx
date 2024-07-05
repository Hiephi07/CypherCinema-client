import { AnimatePresence, motion } from "framer-motion";
import styles from "./ModalMovie.module.scss";
import { useState } from "react";

const ModalMovie = ({
  toggleModal,
}: {
  toggleModal: () => void;
}) => {
  const [isTrailerVideo, setTrailerVideo] = useState(false);
  const toggleTrailerVideo = () => {
    setTrailerVideo(!isTrailerVideo);
  };
  return (
    <>
      <AnimatePresence>
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "black",
              zIndex: 1,
            }}
          />
          <motion.div
            className={styles["modal-movie"]}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleModal()}
          >
            {/* <div
              className={`${styles["modal-content"]} mx-auto my-auto `}
            > */}
            <div className="max-w-[1100px] h-[650px] m-auto py-[10x] px-[40px] rounded-[20px]  z-1024 ">
              <section
                className={styles.section}
                id="section_1022680122"
              >
                <div className="bg section-bg fill bg-fill  bg-loaded"></div>
                <div className="section-content relative">
                  <div
                    id="gap-1434514295"
                    className="gap-element clearfix"
                    style={{
                      display: "block",
                      height: "auto",
                    }}
                  >
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n#gap-1434514295 {\n  padding-top: 30px;\n}\n",
                      }}
                    />
                  </div>
                  <div
                    className="row single-film-video-row"
                    id="row-771952477"
                  >
                    <div
                      id="col-300012522"
                      className="col medium-12 small-12 large-12"
                    >
                      <div className="col-inner text-center">
                        <div className="trailer">
                          {isTrailerVideo && (
                            <>
                              <iframe
                                title="(Teaser Trailer) LẬT MẶT 7: MỘT ĐIỀU ƯỚC | DỰ KIẾN KHỞI CHIẾU 26.04.2024"
                                className="w-[1000px] h-[450px] mb-[40px]"
                                src="https://www.youtube.com/embed/KNuqzZqBH58?feature=oembed"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                              />
                              <a
                                style={{ margin: 0 }}
                                className="button  trailer-viewer white is-outline is-small"
                                href="#"
                                onClick={toggleTrailerVideo}
                              >
                                <span className="uppercase mt-[5px] font-[700] hover:bg-[#fff] duration-300 transition  border-solid border-[#fff] rounded-[4px] border-2 text-[.8em] px-4 py-4">
                                  ← Xem thông tin
                                </span>
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {!isTrailerVideo && (
                    <div
                      className="flex flex-row gap-3 single-film-row justify-between"
                      id="row-1224851334"
                    >
                      <div
                        id="col-489060958"
                        className="col w-[350px] image-col medium-5 small-12 large-4"
                      >
                        <div className="col-inner text-center">
                          <div
                            className="img has-hover x md-x lg-x y md-y lg-y"
                            id="image_2125486326"
                          >
                            <div className="img-inner dark px-[15px]">
                              <img
                                className="rounded-[12px]  mb-[20px]"
                                src="https://bhdstar.vn/wp-content/uploads/2024/04/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-35.jpg"
                                alt="LẬT MẶT 7: MỘT ĐIỀU ƯỚC"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row justify-around gap-2">
                            <a
                              // onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'the-watchers-nhung-ke-theo-doi');return false;"
                              href="/"
                              target="_self"
                              className={`btn-primary px-[8px] flex flex-row justify-center items-center ${styles["ticket-button"]}`}
                            >
                              <span
                                className={styles.logo}
                              ></span>
                              <span className="uppercase">
                                Mua vé ngay
                              </span>
                            </a>
                            <a
                              className="button rounded-[4px] border border-solid border-[#fff] px-[4px] py-[4px] text-[.8em] hover:bg-[#fff] duration-300"
                              href="#"
                              onClick={toggleTrailerVideo}
                            >
                              <span className="uppercase mt-[5px] font-bold">
                                Xem trailer
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        id="col-2049549367"
                        className="col w-[700px]"
                      >
                        <div className="col-inner">
                          <h1 className="title text-uppercase text-[var(--primary-color)] text-[1.5em] mb-[25px] uppercase font-[700]">
                            LẬT MẶT 7: MỘT ĐIỀU ƯỚC
                          </h1>
                          <div className="excerpt mb-[25px]">
                            <p>
                              Bộ phim “chữa lành” lấy cảm
                              hứng từ những câu chuyện
                              thường nhật trong đời sống gia
                              đình. Câu chuyện xoay quanh
                              một người mẹ và những đứa con
                              với tựa “Một Điều Ước”.
                            </p>
                          </div>
                          <div className="flex flex-col gap-[1.1em]">
                            <p>
                              <span
                                className={
                                  styles["meta-title"]
                                }
                              >
                                Phân loại:
                              </span>{" "}
                              <span className="tag age-limit">
                                K
                              </span>{" "}
                              <span className="text-uppercae">
                                Phim được phổ biến đến người
                                xem dưới 13 tuổi với điều
                                kiện xem cùng cha, mẹ hoặc
                                người giám hộ
                              </span>
                            </p>
                            <p>
                              <span
                                className={
                                  styles["meta-title"]
                                }
                              >
                                Định dạng:
                              </span>{" "}
                              <span className="tag format">
                                2D
                              </span>
                            </p>
                            <p>
                              <span
                                className={
                                  styles["meta-title"]
                                }
                              >
                                Đạo diễn:
                              </span>{" "}
                              <a
                                href="https://bhdstar.vn/dao-dien/ly-hai/"
                                title="Lý Hải"
                              >
                                Lý Hải
                              </a>
                            </p>
                            <p>
                              <span
                                className={
                                  styles["meta-title"]
                                }
                              >
                                Diễn viên:
                              </span>{" "}
                              <a
                                href="https://bhdstar.vn/dien-vien/thai-vu/"
                                title="Thái Vũ"
                              >
                                Thái Vũ
                              </a>
                              ,{" "}
                              <a
                                href="https://bhdstar.vn/dien-vien/truong-minh-cuong/"
                                title="Trương Minh Cường"
                              >
                                Trương Minh Cường
                              </a>
                              ,{" "}
                              <a
                                href="https://bhdstar.vn/dien-vien/tin-nguyen/"
                                title="Tín Nguyễn"
                              >
                                Tín Nguyễn
                              </a>
                            </p>
                            <p>
                              <span
                                className={
                                  styles["meta-title"]
                                }
                              >
                                Thể loại:
                              </span>{" "}
                              <a
                                href="https://bhdstar.vn/the-loai-phim/healing/"
                                title="Healing"
                              >
                                Healing
                              </a>
                            </p>
                            <p>
                              <span
                                className={
                                  styles["meta-title"]
                                }
                              >
                                Khởi chiếu:
                              </span>{" "}
                              26/04/2024
                            </p>
                            <p>
                              <span
                                className={
                                  styles["meta-title"]
                                }
                              >
                                Thời lượng:
                              </span>{" "}
                              138 phút
                            </p>
                            <p>
                              <span
                                className={
                                  styles["meta-title"]
                                }
                              >
                                Ngôn ngữ:
                              </span>{" "}
                              Phụ đề
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n#section_1022680122 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n",
                  }}
                />
              </section>
            </div>
            <button
              className="absolute top-[10px] right-[10px]"
              onClick={toggleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-x hover:fill-[var(--primary-color)]"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            {/* </div> */}
          </motion.div>
        </>
      </AnimatePresence>
    </>
  );
};

export default ModalMovie;

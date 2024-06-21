import React, { useContext, useState } from "react";
import styles from "./MovieCard.module.scss";
import { IMovie } from "@/_interfaces/IMovie";
import { ModalContext } from "@/_context/ModalMovie";
import ModalMovie from "../ModalMovie/ModalMovie";

const MovieCard: React.FC<{
  movie: IMovie;
  number: number;
  toggleConfirm: () => void;
}> = ({ movie, number, toggleConfirm }) => {
  const { isModalOpen, toggleModal } =
    useContext(ModalContext);
  // console.log(number);

  return (
    <>
      <div
        className="col film-col-item h-[500px] w-[266px] "
        style={{
          position: "absolute",
          left: `${number * 20}%`,
          padding: "0 15px 30px",
        }}
        aria-hidden="true"
      >
        <div className={styles["col-inner"]}>
          <div className="row row-collapse align-center film-row-item">
            <div
              id="col-1452808497"
              className="col film-item small-12 large-12"
            >
              <div className="col-inner">
                <div className="text thumb">
                  <a
                    title="THE WATCHERS: NHỮNG KẺ THEO DÕI"
                    data-url="https://bhdstar.vn/phim/the-watchers-nhung-ke-theo-doi/"
                    href="#filmQuickView"
                    data-id={63473}
                  >
                    <img
                      className="w-full rounded-[12px]"
                      src={movie.image}
                      alt="THE WATCHERS: NHỮNG KẺ THEO DÕI"
                    />
                  </a>
                </div>
                <div className={styles.meta}>
                  <span className={styles["age-limit"]}>
                    T16
                  </span>
                  <span className={styles.type}>
                    Phụ đề
                  </span>
                  <span className={styles.format}>2D</span>
                </div>
                <h4 className={styles.title}>
                  <a
                    data-url="https://bhdstar.vn/phim/the-watchers-nhung-ke-theo-doi/"
                    title="THE WATCHERS: NHỮNG KẺ THEO DÕI"
                    className="tooltip"
                    href="#filmQuickView"
                    data-id={63473}
                  >
                    THE WATCHERS: NH...
                  </a>
                </h4>
                <div className={styles.cats}>
                  Thể loại phim:{" "}
                  <a
                    href="https://bhdstar.vn/the-loai-phim/fantasy/"
                    title="Fantasy"
                  >
                    Fantasy
                  </a>
                </div>
                <div className={styles.buttons}>
                  <button
                    onClick={toggleConfirm}
                    // onclick="ldapp_bookNow('Phim này chỉ dành cho trẻ em trên 16 tuổi. Vui lòng cân nhắc khi mua vé. BQL Rạp sẽ phải từ chối cho vào nếu sai quy định.', 'the-watchers-nhung-ke-theo-doi');return false;"
                    className={`btn-primary px-[8px] flex flex-row justify-center items-center ${styles["ticket-button"]}`}
                  >
                    <span className={styles.logo}></span>
                    <span className="uppercase text-[12.8px] w-[120px]">
                      Mua vé ngay
                    </span>
                  </button>
                  <a
                    title="THE WATCHERS: NHỮNG KẺ THEO DÕI"
                    data-url="https://bhdstar.vn/phim/the-watchers-nhung-ke-theo-doi/"
                    href="#filmQuickView"
                    data-id={63473}
                    className={styles.infoBtn}
                  >
                    {/* <picture>
                      <source
                        srcSet="/assets/images/Icons/iconticket.png"
                        media="(prefers-color-scheme: dark)"
                      />
                      <img
                        src="/assets/images/Icons/info.png"
                        alt="Browser with large and small images of a coffee cup and plants"
                      />
                    </picture> */}
                    <span
                      onClick={toggleModal}
                      className={styles.info}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default MovieCard;

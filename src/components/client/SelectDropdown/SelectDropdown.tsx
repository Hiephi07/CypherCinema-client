import React from "react";
import styles from "./SelectDropdown.module.scss";
const SelectDropdown = ({
  selectPosition,
  type,
  setValue,
  toggle,
}) => {
  const isWidthFull = type.width == "100%";
  console.log(isWidthFull);
  return (
    <>
      <span
        className={`${styles["select-container"]} ${
          isWidthFull ? styles["width-full"] : ""
        }`}
        style={{
          position: "absolute",
          top: `${selectPosition.y + 40}px`,
          left: `${selectPosition.x}px `,
          zIndex: "3",
        }}
      >
        <span>
          <input type="number" />
        </span>
        <span className={styles["select-result"]}>
          <ul>
            <li> Chọn {type.title} </li>
            {type.data.map((item, idx) => {
              return (
                <li
                  key={idx}
                  onClick={() => {
                    setValue(item);
                    toggle({ visible: false });
                  }}
                >
                  {" "}
                  {item}{" "}
                </li>
              );
            })}
          </ul>
        </span>
      </span>
    </>
  );
};

export default SelectDropdown;

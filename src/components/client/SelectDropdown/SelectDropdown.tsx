import React, { useState } from "react";
import styles from "./SelectDropdown.module.scss";
const SelectDropdown = ({
  selectPosition,
  type,
  setValue,
  toggle,
}) => {
  const isWidthFull = type.width == "100%";
  const [input, setInput] = useState("");
  const [filterData, setFilterData] = useState(type.data);

  const handleFilter = (e) => {
    let newFilterData;
    if (typeof e.target.value == "string") {
      newFilterData = type.data.filter((item) =>
        item.toString().includes(e.target.value.toString())
      );
    } else {
      newFilterData = type.data.filter((item) =>
        item.includes(e.target.value)
      );
    }
    setFilterData(newFilterData);
  };
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
          <input
            type="number"
            min={1}
            onChange={handleFilter}
          />
        </span>
        <span className={styles["select-result"]}>
          <ul>
            <li> Chọn {type.title} </li>
            {filterData.map((item, idx) => {
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

import React, { useEffect, useState } from "react";
import styles from "./PlatformDropdown.module.css";
import { useDispatch } from "react-redux";
import { setDropdownOpened } from "../Redux/gameReducer";

const UniversalDropdown = ({ data, itemAction }) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(0);
  const [defaultTitle, setDefaultTitle] = useState("");
  const dispatch = useDispatch();
  let sortedId = null;

  useEffect(() => {
    if (data[0]?.value) {
      setDefaultTitle(() => "Sort");
    } else {
      setDefaultTitle(() => "Platform");
    }
  }, []);

  useEffect(() => {
    dispatch(setDropdownOpened(isOpen));
  }, [isOpen]);

  const toggleDropdown = (val) => {
    setOpen(val);
  };

  const handleItemClick = (id) => {
    setSelectedItem(id);

    if (data[0]?.value) {
      sortedId = items.find((item) => item.id == id).value;
      setDefaultTitle(() => "Sort");
    } else {
      sortedId = id;
      setDefaultTitle(() => "Platform");
    }

    dispatch(itemAction(sortedId));
    toggleDropdown(false);
  };

  return (
    <div style={{ zIndex: "2" }}>
      <div className={styles.dropdownContainer}>
        <div
          className={styles.dropdown}
          onMouseOver={() => toggleDropdown(true)}
          onMouseLeave={() => toggleDropdown(false)}>
          <div className={styles.dropdownHeader}>
            {selectedItem
              ? `${defaultTitle} : ${
                  items.find((item) => item.id == selectedItem).label
                }`
              : `${defaultTitle} : All`}
            <i
              className={`fa fa-chevron-right ${styles.icon} ${
                isOpen && styles.iconOpen
              }`}></i>
          </div>
          <div
            className={`${styles.dropdownBody} ${
              isOpen && styles.dropdownBodyOpen
            }`}>
            {items.map((item, i) => (
              <div
                key={i}
                className={styles.dropdownItem}
                onClick={(e) => handleItemClick(e.target.id)}
                id={item.id}>
                <span
                  className={`${styles.dropdownItemDot} ${
                    item.id == selectedItem && styles.dropdownItemDotSelected
                  }`}>
                  •{" "}
                </span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversalDropdown;
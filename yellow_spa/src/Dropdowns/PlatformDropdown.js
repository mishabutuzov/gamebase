import React, {useState} from 'react';
import styles from './PlatformDropdown.module.css';
import {useDispatch} from "react-redux";
import {setPlatform} from "../Redux/gameReducer";

const data = [
    {id: 0, label: "ALL"},
    {id: 1, label: "PC"},
    {id: 2, label: "PlayStation"},
    {id: 3, label: "Xbox"},
    {id: 4, label: "iOS"},
    {id: 5, label: "Apple Macintosh"},
    {id: 6, label: "Linux"},
    {id: 7, label: "Nintendo"},
    {id: 8, label: "Android"},
    {id: 9, label: "Atari"},
    {id: 10, label: "Commodore / Amiga"},
    {id: 11, label: "SEGA"},
    {id: 12, label: "3DO"},
    {id: 13, label: "Neo Geo"},
    {id: 13, label: "Web"}];


const PlatformDropdown = () => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(0);
    const dispatch = useDispatch()

    const toggleDropdown = (val) => {
        setOpen(val);
    }

    const handleItemClick = (id) => {
        setSelectedItem(id);
        // dispatch(setPage(1))
        dispatch(setPlatform(id))
        toggleDropdown(false)
    }

    return (
        <div>
            <div className={styles.dropdownContainer}>
                <div className={styles.dropdown} onMouseOver={() => toggleDropdown(true)}
                     onMouseLeave={() => toggleDropdown(false)}>
                    <div className={styles.dropdownHeader}>
                        {selectedItem ? `Platform: ${items.find(item => item.id == selectedItem).label}` : "Platform: All"}
                        <i className={`fa fa-chevron-right ${styles.icon} ${isOpen && styles.iconOpen}`}></i>

                    </div>
                    <div className={`${styles.dropdownBody} ${isOpen && styles.dropdownBodyOpen}`}>
                        {items.map((item,i) => (
                            <div key={i} className={styles.dropdownItem} onClick={e => handleItemClick(e.target.id)}
                                 id={item.id}>
                                <span
                                    className={`${styles.dropdownItemDot} ${item.id == selectedItem && styles.dropdownItemDotSelected}`}>• </span>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}


export default PlatformDropdown;
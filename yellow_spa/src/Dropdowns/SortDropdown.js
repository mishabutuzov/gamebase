import React, {useState} from 'react';
import styles from './PlatformDropdown.module.css';
import {useDispatch} from "react-redux";
import {setPlatform, setSort} from "../Redux/gameReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";

const data = [
    {id: 0, label: "ALL", value:'ALL'},
    {id: 1, label: "↑ Name", value:'name'},
    {id: 2, label: "↓ Name", value:'-name'},
    {id: 3, label: "↑ Released", value:'released'},
    {id: 4, label: "↓ Released", value:'-released'},
    {id: 5, label: "↑ Added", value:'added'},
    {id: 6, label: "↓ Added", value:'-added'},
    {id: 7, label: "↑ Created", value:'created'},
    {id: 8, label: "↓ Created", value:'-created'},
    {id: 9, label: "↑ Updated", value:'updated'},
    {id: 10, label: "↓ Updated", value:'-updated'},
    {id: 11, label: "↑ Rating", value:'rating'},
    {id: 12, label: "↓ Rating", value:'-rating'},
    {id: 13, label: "↑ Metacritic", value:'metacritic'},
    {id: 14, label: "↓ Metacritic", value:'-metacritic'}]




const SortDropdown = () => {
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
        dispatch(setSort(items.find((item)=> item.id == id).value))
        toggleDropdown(false)
    }

    return (
        <div style={{zIndex:'2'}}>
            <div className={styles.dropdownContainer}>
                <div className={styles.dropdown} onMouseOver={() => toggleDropdown(true)}
                     onMouseLeave={() => toggleDropdown(false)}>
                    <div className={styles.dropdownHeader}>
                        {selectedItem ? `Sort: ${items.find(item => item.id == selectedItem).label}` : "Sort: All"}
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


export default SortDropdown;
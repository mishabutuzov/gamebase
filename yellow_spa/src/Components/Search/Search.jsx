import React, {useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {setPage, setSearchInput} from "../../Redux/gameReducer";

function Search(props) {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    return (
        <nav className='main__nav'>
            <div className="navbar__logo">RAWG</div>
            <div className="navbar__container">
                <FontAwesomeIcon className='navbar__icon' icon={faSearch}/>
                <input placeholder="Search for games" type="search" className="navbar__input" ref={inputRef}
                onChange={(e)=>{
                    dispatch(setPage(1))
                    dispatch(setSearchInput(e.target.value))
                }}
                />
            </div>
        </nav>
    );
}

export default Search;
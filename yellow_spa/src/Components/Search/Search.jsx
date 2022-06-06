import React, {useEffect, useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {setPage, setSearchInput} from "../../Redux/gameReducer";
import {useLocation, useNavigate} from "react-router";
import useMediaQuery from "../../hooks/useMediaQuery";
import {setMedia} from "../../Redux/mediaReducer";

function Search(props) {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();


    // You can use any @media property
    const isDesktop = useMediaQuery('(min-width: 1127px)');
    const isMobile = useMediaQuery('(max-width: 599px)');
    const isTablet = !isDesktop && !isMobile;

    useEffect(() => {
        dispatch(setMedia({
            isDesktop,
            isMobile,
            isTablet
        }))
    }, [isDesktop,isMobile])



    useEffect(() => {
        console.log(location)
    }, [])

    return (
        <nav className='main__nav'>
            <div className="navbar__logo"
                 onClick={() => {navigate('/')}}
            >RAWG</div>
            <div className="navbar__container">
                <FontAwesomeIcon className='navbar__icon' icon={faSearch}/>
                <input placeholder="Search for games" type="search" className="navbar__input" ref={inputRef}
                onChange={(e)=>{
                    if(location.pathname.includes('details')) navigate('/');
                    dispatch(setPage(1))
                    dispatch(setSearchInput(e.target.value))
                }}
                />
            </div>
        </nav>
    );
}

export default Search;
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";
import { setPage, setSearchInput } from "../../Redux/gameReducer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { MainNavSearchWrapper } from "./searchStyled";

function MainNavSearch({ jumpToHome }) {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { searchInput } = useSelector((state) => state.game);

  const location = useLocation();

  const debouncedChangeHandler = debounce(() => {
    if (inputRef.current.value !== searchInput) {
      if (location.pathname.includes("details")) jumpToHome();
      dispatch(setPage(1));
      dispatch(setSearchInput(inputRef.current.value));
    }
  }, 1000);

  return (
    <MainNavSearchWrapper>
      <FontAwesomeIcon className="navbar__icon" icon={faSearch} />
      <input
        placeholder="Search for games"
        type="search"
        ref={inputRef}
        onChange={debouncedChangeHandler}
      />
    </MainNavSearchWrapper>
  );
}

export default MainNavSearch;

import React from "react";
import { setPlatform, setSort } from "../../Redux/gameReducer";
import UniversalDropdown from "../../Dropdowns/UniversalDropdown";
import { dataPlatform, dataSort } from "../../Dropdowns/dropdownData";
import { FiltersStyled } from "./FiltersStyled";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedItemPlatform,
  setSelectedItemSort,
} from "../../Redux/dropdownReducer";

function Filters(props) {
  const { selectedItemSort, selectedItemPlatform } = useSelector(
    (state) => state.dropdown
  );
  const dispatch = useDispatch();

  const setSelectedItemSortRUN = (val) => {
    dispatch(setSelectedItemSort(val));
  };
  const setSelectedItemPlatformRUN = (val) => {
    dispatch(setSelectedItemPlatform(val));
  };

  return (
    <FiltersStyled>
      <UniversalDropdown
        data={dataSort}
        itemAction={setSort}
        selectedItem={selectedItemSort}
        setSelectedItem={setSelectedItemSortRUN}
      />
      <UniversalDropdown
        data={dataPlatform}
        itemAction={setPlatform}
        selectedItem={selectedItemPlatform}
        setSelectedItem={setSelectedItemPlatformRUN}
      />
    </FiltersStyled>
  );
}

export default Filters;

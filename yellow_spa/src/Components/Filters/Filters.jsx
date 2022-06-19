import React from 'react';
import {setPlatform, setSort} from "../../Redux/gameReducer";
import UniversalDropdown from "../../Dropdowns/UniversalDropdown";
import {dataPlatform, dataSort} from "../../Dropdowns/dropdownData";
import {FiltersStyled} from "./FiltersStyled";


function Filters(props) {
    return (
        <FiltersStyled>
            <UniversalDropdown data={dataSort} itemAction={setSort}/>
            <UniversalDropdown data={dataPlatform} itemAction={setPlatform}/>
        </FiltersStyled>
    );
}

export default Filters;
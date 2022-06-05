import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import PlatformDropdown from "../../Dropdowns/PlatformDropdown";
import SortDropdown from "../../Dropdowns/SortDropdown";

function Filters(props) {
    return (
        <section className='filter__container__section'>

            <SortDropdown/>
            <PlatformDropdown/>
            {/*<PlatformDropdown/>*/}

        </section>
    );
}

export default Filters;
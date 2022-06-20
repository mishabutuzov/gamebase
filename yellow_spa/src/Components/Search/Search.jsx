import React from "react";
import MainNavLogo from "./MainNavLogo";
import MainNavSearch from "./MainNavSearch";
import {MainNav} from "./searchStyled";
import useMediaControl from "../../hooks/useMediaControl";
import useJumpTo from "../../hooks/useJumpTo";
import ParticlesBackground from "../Helpers/particles/ParticlesBackground";


function Search(props) {
    useMediaControl();
    const jumpToHome = useJumpTo();

    return (
        <MainNav>
            <MainNavLogo jumpToHome={jumpToHome}/>
            <ParticlesBackground/>
            <MainNavSearch jumpToHome={jumpToHome}/>
        </MainNav>
    );
}

export default Search;

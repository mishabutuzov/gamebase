import React from "react";
import { MainNavLogoWrapper } from "./searchStyled";

function MainNavLogo({ jumpToHome }) {
  return (
    <MainNavLogoWrapper onClick={jumpToHome}>
      GA<span>M</span>EBASE
    </MainNavLogoWrapper>
  );
}

export default MainNavLogo;

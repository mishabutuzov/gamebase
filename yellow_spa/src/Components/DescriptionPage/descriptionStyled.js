import styled from "styled-components";
import React from "react";
import { device, size } from "../mediaStyled";

export const GameTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
`;

export const GameTitleText = styled.h1`
  color: var(--text);
  letter-spacing: 0.2rem;
  display: flex;
  transition: 0.3s;

  :hover {
    cursor: pointer;
  }

  &:hover img {
    filter: invert(49%) sepia(43%) saturate(2308%) hue-rotate(185deg)
      brightness(98%) contrast(87%);
    transition: 0.3s;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr 0.7fr;
  grid-template-rows: auto auto;
  //gap: 0px 0px;
  grid-auto-flow: row;
  word-break: break-word;
  row-gap: 30px;
  column-gap: 20px;
  
  grid-template-areas:
    ${props => props.isAboutFullWidth
        ? `"GameInfo SliderMain SliderMain"
            "AboutInfo AboutInfo AboutInfo"`
        : `"GameInfo SliderMain SliderMain"
            "AboutInfo AboutInfo LinksInfo"`};
    
 
  @media (max-width: ${size.laptop}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;

    grid-template-areas:
      "SliderMain"
      "GameInfo"
      "AboutInfo"
      "LinksInfo";
  }
`;
export const GameInfo = styled.div`
  grid-area: GameInfo;
  //border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0px 0 0px;
`;
export const SliderMain = styled.div`
  grid-area: SliderMain;
`;

export const AboutInfo = styled.div`
  grid-area: AboutInfo;
  //padding: 30px;
`;
export const LinksInfo = styled.div`
  grid-area: LinksInfo;
  //padding: 30px;
`;



import styled from "styled-components";
import { device, size } from "../mediaStyled";

export const CardWrapper = styled.div`
  @media ${device.laptopL} {
    flex-basis: calc((100% / 5) - 10px);
  }

  @media ${device.laptop} and (max-width: ${size.laptopL}) {
    flex-basis: calc((100% / 3) - 10px);
  }

  @media ${device.mobileL} and (max-width: ${size.laptop}) {
    flex-basis: calc((100% / 2) - 10px);
  }

  @media (max-width: ${size.mobileL}) {
    flex-basis: calc(100% - 10px);
  }

  overflow: hidden;
  background-color: #373737;
  border-radius: 10px;
  //border: 5px solid var(--dark);
  margin: 5px;
  flex-basis: calc((100% / 4) - 2px); /*  */
  flex-shrink: 0; /* don't shrink, and don't wrap -> leave the container*/
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.01);
    transition: all 0.1s ease-in-out;
    box-shadow: 0px 0px 3px 0px #00c3ff;
    cursor: pointer;
  }
`;

export const CardTitle = styled.h2`
  margin: 0;
  color: white;
  padding: 10px;
  padding-left: 20px;
  font-weight: 700;
  word-wrap: break-word;
`;

export const CardRatingDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 20px 5px 20px;

  & > span {
    color: #acacac;
    border-top: var(--text) solid 1px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 20vh; //MEDIA
  object-fit: cover;
  display: block;

  //=======================================Media==========================================

  @media (max-width: ${size.mobileL}) {
    height: 30vh;
  }
`;

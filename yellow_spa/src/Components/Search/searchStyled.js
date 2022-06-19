import styled from "styled-components";
import { size, device } from "../mediaStyled";

export const MainNav = styled.nav`
  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
  }

  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 15px auto;
`;

export const MainNavSearchWrapper = styled.div`
   @media ${device.mobileL} and (max-width: ${size.tablet}) {
     width: 40%;
   }

  @media (max-width: ${size.mobileL}) {
    width: 80%;
  }

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;
  gap: 12px;
  height: 32px;
  border-radius: 32px;
  background-color: #212121;
  padding: 6px;
  color: #acacac;
  cursor: text;
  overflow: hidden;
  align-items: center;
  padding-left: 20px;
  width: 25%;

  & input {
    outline: none;
    border: none;
    background: transparent;
    border-radius: 32px;
    border-color: var(--dark);
    color: white;
    padding-top: 2px;
    margin: 0 5px 0 5px;
  }
  
  & > input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  width: 10px;
  background: #acacac;
  clip-path: polygon(
    20% 0%,
    0% 20%,
    30% 50%,
    0% 80%,
    20% 100%,
    50% 70%,
    80% 100%,
    100% 80%,
    70% 50%,
    100% 20%,
    80% 0%,
    50% 30%
  );
}
`;

export const MainNavLogoWrapper = styled.div`
  color: white;
  font-size: xx-large;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  cursor: pointer;

  & span {
    color: var(--text);
  }
`;

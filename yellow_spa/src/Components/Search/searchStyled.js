import styled from "styled-components";
import { device, size } from "../mediaStyled";

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

// export const MainNavLogoWrapper = styled.div`
//   color: white;
//   font-size: xx-large;
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-weight: 800;
//   cursor: pointer;
//
//   & span {
//     color: var(--text);
//   }
// `;
export const MainNavLogoWrapper = styled.div`
  color: white;
  font-size: xx-large;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  cursor: pointer;

  //transform: translate(-50%, -50%);

  //color: white;
&:hover{
  & span {
    color: var(--text);
    transition: color 1s;
  }
}

  &::before {
    content: "GAMEBASE";
    position: absolute;
    color: var(--text);
    animation: wave 23s ease-in-out infinite;
  }

  @keyframes wave {
    0%,
    100% {
      clip-path: polygon(
        0 42%,
        13% 48%,
        26% 55%,
        41% 64%,
        56% 65%,
        69% 58%,
        84% 45%,
        100% 38%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0 63%,
        14% 57%,
        25% 50%,
        40% 42%,
        56% 40%,
        71% 44%,
        84% 50%,
        100% 60%,
        100% 100%,
        0% 100%
      );
    }
  }


`;

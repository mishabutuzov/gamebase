import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import styled from "styled-components";

const GlobalCardContainer = styled.section`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  padding-top: 5px;
  opacity: ${props => props.isDropdownOpened? 0.4 : 1};
  transition: opacity 1s ease;
`;

function GlobalCard(props) {
  const {gamesList, isDropdownOpened} = useSelector((state) => state.game);


  return (
    <GlobalCardContainer isDropdownOpened={isDropdownOpened}>
      {gamesList.map((item, i) => (
        <Card
          key={i}
          id={item.id}
          title={item.name}
          rating={item.rating}
          avatar={item.background_image}
          timeStamp={item.released}
        />
      ))}
    </GlobalCardContainer>
  );
}

export default GlobalCard;

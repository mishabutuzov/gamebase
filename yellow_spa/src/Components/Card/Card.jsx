import React from "react";
import {
  CardImage,
  CardRatingDate,
  CardTitle,
  CardWrapper,
} from "./cardStyled";
import useJumpTo from "../../hooks/useJumpTo";

function Card({ id, avatar, title, rating, timeStamp }) {
  const jumpToDetails = useJumpTo(id);

  return (
    <CardWrapper onClick={jumpToDetails}>
      <CardImage src={avatar} alt="Avatar"></CardImage>
      <CardTitle>{title}</CardTitle>
      <CardRatingDate>
        <span>{rating}</span>
        <span>{timeStamp}</span>
      </CardRatingDate>
    </CardWrapper>
  );
}

export default Card;

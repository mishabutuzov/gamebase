import React, {useState} from "react";
import {
  CardImage,
  CardRatingDate,
  CardTitle,
  CardWrapper,
} from "./cardStyled";
import useJumpTo from "../../hooks/useJumpTo";

function Card({ id, avatar, title, rating, timeStamp }) {
  const jumpToDetails = useJumpTo(id);
    const [loaded, setLoaded] = useState(false);
    function onLoad() {
        console.log('loaded');
        setLoaded(true);
    }

  return (
    <CardWrapper onClick={jumpToDetails}>
      <CardImage src={avatar} alt="Avatar" onload={onLoad}></CardImage>
      <CardTitle>{title}</CardTitle>
      <CardRatingDate>
        <span>{rating}</span>
        <span>{timeStamp}</span>
      </CardRatingDate>
    </CardWrapper>
  );
}

export default Card;

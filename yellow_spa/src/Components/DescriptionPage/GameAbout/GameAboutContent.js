import React from "react";
import { GameAboutContentStyled } from "./gameAboutStyled";
import parse from "html-react-parser";

function GameAboutContent({ description }) {
  return (
    <div style={{ position: "relative" }}>
      <GameAboutContentStyled>
        <span>{parse(description)}</span>
      </GameAboutContentStyled>
    </div>
  );
}

export default GameAboutContent;

import React from "react";
import styled from "styled-components";

const RainbowTitleWrapper = styled.h4`
  margin-top: 5px;
  margin-bottom: 5px;
  display: block;
  border-top: 1px solid deepskyblue;
  border-bottom: 1px solid deepskyblue;

  text-align: center;
  /*text-decoration: underline;*/
  font-size: 32px;
  /*font-family: monospace;*/
  letter-spacing: 5px;
  animation: colorRotate 2s linear 0s infinite;
  
  @keyframes colorRotate {
  from {
    color: #6666ff;
  }
  10% {
    color: #0099ff;
  }
  50% {
    color: #00ff00;
  }
  75% {
    color: #ff3399;
  }
  100% {
    color: #6666ff;
  }
}
`;

function RainbowTitle({ text }) {
  return <RainbowTitleWrapper>{text}</RainbowTitleWrapper>;
}

export default RainbowTitle;

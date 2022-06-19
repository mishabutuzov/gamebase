import styled from "styled-components";

export const GameLinksContentStyled = styled.div`
  border: 2px solid #0f1b22;
  border-radius: 20px;
  padding: 30px;

  ::before {
    text-align: center;
    content: "LINKS";
    position: absolute;
    top: -12px;

    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    width: 100px;
    background: var(--dark);
    color: #757575;
    font-size: large;
    border-left: 2px solid #0f1b22;
    border-right: 2px solid #0f1b22;
    display: inline-block;
  }

  span,
  p {
    margin: 15px 0 15px 0;
  }

`;
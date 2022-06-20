import React from "react";
import styled from "styled-components";

export const AuthorsStyled = styled.div`
  display: flex;
  justify-content: center;
  font-size: x-small;
  margin: 10px;
  opacity: 0.5;
  word-break: break-word;
  text-align: center;
  
  & a{
  color: yellow;
  word-break: keep-all;
  }
`;

function Authors(props) {
  return (
    <AuthorsStyled>
        <div>
      Application development by&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={'https://www.linkedin.com/in/mikhail--butuzov'}>
        Mikhail Butuzov
      </a> &nbsp;
      and &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={'https://www.linkedin.com/in/viktor-berezhnyi/'}>
        Viktor Berezhniy
      </a> &nbsp;
      (2022) API granted by RAWG.IO
        </div>
    </AuthorsStyled>
  );
}

export default Authors;

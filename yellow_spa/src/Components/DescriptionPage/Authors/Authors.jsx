import React from "react";
import styled from "styled-components";

export const AuthorsStyled = styled.div`
  display: flex;
  justify-content: center;
  font-size: x-small;
  margin: 10px;
  opacity: 0.5;
`;

function Authors(props) {
  return (
    <AuthorsStyled>
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
    </AuthorsStyled>
  );
}

export default Authors;

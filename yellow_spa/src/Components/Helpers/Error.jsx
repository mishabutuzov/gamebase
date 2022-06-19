import React from 'react';
import styled from "styled-components";

const ErrorStyled = styled.div`

    margin:  30vh auto;
    border: 3px solid yellow;
    height: 20vh;
    width: 50vw;
    text-align: center;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

& span:hover{
    cursor: pointer;
}

`

function Error({fetchDescriptionData}) {
    return (
        <ErrorStyled>
            <div>
                Server error. Please{" "}
                <span
                    style={{fontWeight: 700, textDecoration: "underline"}}
                    onClick={fetchDescriptionData}>
              restart
            </span>{" "}
                the page.
            </div>
        </ErrorStyled>
    );
}

export default Error;
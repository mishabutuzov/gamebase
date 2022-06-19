import React from 'react';
import styled from "styled-components";

export const RatingStyled = styled.span`
span{
color: ${props => (props.rating <= 2.9) && "red"};
color: ${props => (props.rating <= 4 && props.rating >= 3) && "yellow"};
color: ${props => props.rating > 4 && "green"};
}
`

function Rating({rating}) {
    return (
        <RatingStyled rating={rating}>
            Rating: <span>{rating}</span>
        </RatingStyled>
    );
}

export default Rating;
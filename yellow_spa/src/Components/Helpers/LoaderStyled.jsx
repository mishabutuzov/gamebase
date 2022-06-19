import styled from "styled-components";

export const LoaderContainerStyled = styled.div`

display: flex;
justify-content: center;
align-items: center;

@media (min-width: 2560px) {
        height: 900px;
    }

@media (min-width: 1440px) and (max-width: 2560px) {
        height: 800px;
}

@media (min-width: 1024px) and (max-width: 1440px) {
        height: 650px;
}

@media (min-width: 768px) and (max-width: 1024px) {
        height: 600px;
}

@media (min-width: 425px) and (max-width: 768px) {
        height: 350px;
}

@media (min-width: 375px) and (max-width: 425px) {
        height: 290px;
}

@media (min-width: 320px) and (max-width: 375px) {
        height: 210px;
}

@media (max-width: 320px) {
        height: 110px;
}
`

export const LoaderStyled = styled.div`
    border: 0.8rem solid transparent; /* Light grey */
    border-top: ${props => props.isDescription ? "0.8rem solid gray" : "0.8rem solid var(--primary)"};
    border-bottom: ${props => props.isDescription ? "0.8rem solid gray" : "0.8rem solid var(--primary)"};

    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    animation: spin 3s linear infinite;
    margin: ${props => props.isDescription ? "0 auto" : "40vh auto"};
    
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }

`



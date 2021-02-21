import styled from "styled-components"

export const AlertWrapper = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid ${({theme}) => theme.color.red};
    border-radius: 15px;
    background-color: ${({theme}) => theme.color.alto};
    padding: 10px;
`

export const AlertParagraph = styled.p`
    color: ${({theme}) => theme.color.red};
    font-size: 40px;

    @media (max-width: ${({theme}) => theme.breakpoint.screenSmall}px){
        font-size: 30px;
    }
`
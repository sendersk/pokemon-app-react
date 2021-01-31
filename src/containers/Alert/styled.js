import styled from "styled-components"

export const AlertWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AlertParagraph = styled.p`
    color: ${({theme}) => theme.color.white};
    font-size: 40px;
`
import styled from "styled-components"

export const ErrorWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ErrorParagraph = styled.p`
    color: ${({theme}) => theme.color.red};
    font-size: 40px;
`
import styled from "styled-components"

export const LoaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
`

export const LoaderParagraph = styled.p`
    color: #fff;
    font-size: 100px;
    line-height: 80vh;
`
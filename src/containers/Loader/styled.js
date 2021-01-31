import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const LoaderParagraph = styled.p`
  color: ${({theme}) => theme.color.white};
  padding: 10px;
  font-size: 50px;
  line-height: 60vh;

  @media (max-width: ${({theme}) => theme.breakpoint.screenSmall}px){
      font-size: 30px;
  }
`;

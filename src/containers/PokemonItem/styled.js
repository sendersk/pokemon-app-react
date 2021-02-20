import styled from "styled-components"

export const Wrapper = styled.div`
  width: 45%;
  padding: 10px;
  background-color: ${({theme}) => theme.color.white};
  border: 3px solid ${({theme}) => theme.color.royalBlue};
  border-radius: 10px;

  @media (max-width: ${({theme}) => theme.breakpoint.screenSmall}px){
    width: 100%;

    h1 {
      font-size: 24px;
      padding: 5px;
    }
  }
`;
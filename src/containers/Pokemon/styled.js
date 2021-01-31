import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
`;

export const Item = styled.div`
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

export const PokemonWrapper = styled.div`
  width: 90%;
  margin: 20px auto 0;
  min-height: 90vh;
`;

export const PokemonHeader = styled.h1`
  font-size: 50px;
  padding: 10px;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  @media (max-width: ${({theme}) => theme.breakpoint.screenSmall}px) {
    margin-bottom: 15px;
    font-size: 30px;
  }
`;

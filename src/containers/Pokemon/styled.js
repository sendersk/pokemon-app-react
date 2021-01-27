import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
`;

export const Item = styled.div`
  width: 45%;
  padding: 10px;
  background-color: #fff;
  border: 3px solid royalblue;
  border-radius: 10px;

  @media (max-width: 450px){
    width: 100%;
  }
`;

export const PokemonWrapper = styled.div`
  width: 90%;
  margin: 20px auto 0;
  height: 90vh;
`;

export const PokemonHeader = styled.h1`
  font-size: 50px;
  padding: 10px;
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  @media (max-width: 450px) {
    margin-bottom: 15px;
  }
`;

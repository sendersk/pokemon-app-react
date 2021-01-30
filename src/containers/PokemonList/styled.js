import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 65px;
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ListItem = styled.div`
  margin: 10px 0;
  display: flex;
  height: 50px;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: royalblue;
  background-color: #fff;
  border: 2px solid royalblue;
  padding: 10px;
  border-radius: 7px;
`;

export const ListLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

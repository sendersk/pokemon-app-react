import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.royalBlue};
  border: none;
  border-radius: 10px;
  font-size: 1em;
  text-align: center;
  padding: 10px;
  margin: 10px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.screenSmall}px) {
    font-size: 16px;
  }
`;

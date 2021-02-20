import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.royalBlue};
  border: none;
  border-radius: 20px;
  font-size: 1em;
  text-align: center;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.screenSmall}px) {
    font-size: 16px;
  }
`;

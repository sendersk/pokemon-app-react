import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: flex-end;
  background-color: ${({theme}) => theme.color.royalBlue};
`;

export const NavigationLink = styled(NavLink)`
  margin-right: 100px;
  font-size: 20px;
  padding: 10px;
  border: 3px solid ${({theme}) => theme.color.white};
  border-radius: 20px;
  color: ${({theme}) => theme.color.white};
  text-decoration: none;

  &:hover {
    background-color: ${({theme}) => theme.color.royalBlue};
    filter: brightness(130%);
  }

  @media (max-width: ${({theme}) => theme.breakpoint.screenMedium}px){
    margin-right: 45px;
  }

  @media (max-width: ${({theme}) => theme.breakpoint.screenSmall}px) {
    margin-right: 20px;
  }
`;

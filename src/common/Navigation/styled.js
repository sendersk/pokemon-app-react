import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: flex-end;
  background-color: royalblue;
`;

export const NavigationLink = styled(NavLink)`
  margin-right: 100px;
  font-size: 20px;
  padding: 10px;
  border: 3px solid #fff;
  border-radius: 20px;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

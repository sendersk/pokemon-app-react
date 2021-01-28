import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";

export const ScrollTop = styled(FaArrowCircleUp)`
  position: fixed;
  width: 100%;
  bottom: 20px;
  align-items: center;
  height: 50px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
`;

import React from "react";
import { StyledButton } from "./styled";

function Button({ content }) {
  return (
    <StyledButton>
      <p>{content}</p>
    </StyledButton>
  );
}

export default Button;

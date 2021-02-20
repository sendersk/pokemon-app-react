import React from "react";
import { StyledButton } from "./styled";

function Button({ content }) {
  return (
    <StyledButton>
      {content}
    </StyledButton>
  );
}

export default Button;

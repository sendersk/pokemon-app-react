import React from "react";
import { AlertWrapper, AlertParagraph } from "./styled";

function Alert() {
  return (
    <AlertWrapper>
      <AlertParagraph>Oops! Something go wrong! Back to Pokemon List and try choose another one.</AlertParagraph>
    </AlertWrapper>
  );
}

export default Alert;

import React from "react";
import { AlertWrapper, AlertParagraph } from "./styled";

function Alert({content}) {
  return (
    <AlertWrapper>
      <AlertParagraph>{content}</AlertParagraph>
    </AlertWrapper>
  );
}

export default Alert;

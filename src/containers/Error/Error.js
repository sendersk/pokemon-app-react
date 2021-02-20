import React from "react";
import { ErrorWrapper, ErrorParagraph } from "./styled";

function Error({content}) {
  return (
    <ErrorWrapper>
      <ErrorParagraph>{content}</ErrorParagraph>
    </ErrorWrapper>
  );
}

export default Error;

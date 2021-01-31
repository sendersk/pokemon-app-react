import React from "react";
import { ErrorWrapper, ErrorParagraph } from "./styled";

function Error() {
  return (
    <ErrorWrapper>
      <ErrorParagraph>Error getting pokemon!</ErrorParagraph>
    </ErrorWrapper>
  );
}

export default Error;

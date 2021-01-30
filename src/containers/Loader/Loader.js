import React from "react";
import {LoaderWrapper, LoaderParagraph} from "./styled"

import { RotateCircleLoading } from "react-loadingg";

function Loader() {
  return (
    <LoaderWrapper>
      <RotateCircleLoading color="#fff" />
      <LoaderParagraph>Loading</LoaderParagraph>
    </LoaderWrapper>
  );
}

export default Loader;

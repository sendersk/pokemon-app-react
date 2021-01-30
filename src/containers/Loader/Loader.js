import React from "react";
import {LoaderWrapper, LoaderParagraph} from "./styled"

import { DisappearedLoading   } from "react-loadingg";

function Loader() {
  return (
    <LoaderWrapper>
      <DisappearedLoading   color="#fff" />
      <LoaderParagraph>Loading</LoaderParagraph>
    </LoaderWrapper>
  );
}

export default Loader;

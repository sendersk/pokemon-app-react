import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  .pagination {
    max-width: 500px;
    display: flex;
    margin: auto;
    list-style: none;
    justify-content: space-between;
    padding: 25px;
    color: #555;
    font-size: 16px;
    font-weight: 600;
  }
`;

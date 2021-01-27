import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;
  justify-content: center;
  font-size: 20px;
  align-items: center;
  margin: 20px 0;
  padding: 10px 15px;
  gap: 20px;
`;

export const SearchParagraph = styled.p`
  color: #555;
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 768px){
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const SearchInput = styled.input`
  line-height: 1.5;
  font-size: 20px;
  padding: 5px;
  border: 3px solid #777;
`;

export const SearchButton = styled.button`
  display: inline-block;
  color: #fff;
  background-color: royalblue;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  text-align: center;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
`;

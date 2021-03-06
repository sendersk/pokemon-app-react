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
  color: ${({theme}) => theme.color.stoneColdGrey};
  font-size: 30px;
  font-weight: 700;

  @media (max-width: ${({theme}) => theme.breakpoint.screenMedium}px){
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const SearchInput = styled.input`
  line-height: 1.5;
  font-size: 20px;
  padding: 5px;
  border: 3px solid ${({theme}) => theme.color.luckyGrey};

  @media (max-width: ${({theme}) => theme.breakpoint.screenSmall}px) {
    width: 60%;
    font-size: 16px;
  }
`;

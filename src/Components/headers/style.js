import styled from "styled-components";

export const List = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1440px) {
    width: 20%;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    font-size: 0.8em;
    justify-content: space-around;
  }
`;

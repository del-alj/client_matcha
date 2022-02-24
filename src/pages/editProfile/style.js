import styled from "styled-components";

import { InitSelect } from "../../Components/select";

export const Content = styled.div`
  text-align: center;
  font-family: "Electrolize", sans-serif;
  width: 100%;
  /* height: 100%; */
  /* min-height: 80vh; */

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  /* border: 1px solid black; */

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Localisation = styled.div`
  display: flex;
  padding: 2rem 0rem 5.5rem 0;

  @media screen and (max-width: 900px) {
    order: 2;
  }
`;

export const Select = styled(InitSelect).attrs((props) => ({
  ...props,
}))`
  display: none;
`;

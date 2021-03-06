import styled from "styled-components";

import { MoreInfoDiv } from "./tools/moreInfo";
export const Content = styled.div`
  text-align: center;
  font-family: "Electrolize", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Flex = styled.div`
  background-color: ${(props) =>
    props.background ? `${props.background}` : "none"};
  min-height: ${(props) => (props.height ? `${props.height}` : "none")};
  align-items: ${(props) =>
    props.alignItems ? `${props.alignItems}` : "none"};
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? `${props.justifyContent}` : "none"};
  flex-direction: ${(props) =>
    props.direction ? `${props.direction}` : "none"};
  padding-top: ${(props) =>
    props.paddingTop ? `${props.paddingTop}` : "none"};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Features = styled.div`
  font-size: 8px;
  padding: 0.5rem;
  h1 {
    margin: 0px;
  }
`;

export const PhotoProfile = styled.div`
  /* width: 300px;
  height: 300px;
  border-radius: 150px; */
  width: 300px;
  height: 300px;
  /* border: 7px solid; */
  border-radius: 50%;
  overflow: hidden;
  background-image: ${(props) => props?.src ?? `${props?.src}`};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  background-size: cover;
  background-position: center;
`;

export const H1 = styled.h1`
  margin: 0 0.5rem;
  padding-left: 1rem;
`;

export const H4 = styled.h4`
  margin: 0 0.5rem;
  padding-left: 1rem;
`;
export const P = styled.p`
  text-align: left;
  margin-left: 0.5rem;
  max-width: 500px;
  padding-left: 1rem;
`;

export const MoreInfo = styled(MoreInfoDiv)`
  border: 1px solid black;
  margin: 0 0.5rem;
  padding-left: 1rem;
`;

import styled from "styled-components";

import { InitSelect } from "../../Components/select";

export const Content = styled.div`
  text-align: center;
  font-family: "Electrolize", sans-serif;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

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

export const Box = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 30rem;
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  position: absolute;
  z-index: 999999999;
  width: 100%;
  max-width: 51em;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Tabs = styled.div`
  width: 30rem;
  height: 5rem;
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  color: ${(props) => (!props.status ? "#535353" : "none")};
  padding: 0 4rem;
  align-items: center;
  display: flex;
  background: ${(props) => (props.status ? "#f3f3f3" : "none")};
`;

export const PicButton = styled.button`
  padding: 20px 60px;
  font-size: 1em;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: none;
  color: white;
  margin: 13px 0;
  width: 10rem;
  font-family: "Electrolize", sans-serif;
`;

export const Blurry = styled.div`
  
  width: 100%;
  height: 100vh;
  position: absolute;
  background-image: linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.623)), url(img/000333.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100vh;
    /* filter: blur(8px); */
`;
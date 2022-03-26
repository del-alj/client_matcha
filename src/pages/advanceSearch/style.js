import styled from "styled-components";

export const Cadre = styled.div`
  min-width: 500px;
  height: 50px;
  background: #f5f5f5;
  border: 1px solid #f1f1f1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* @media screen and (max-width: 1440px) {

  } */
`;

export const Input = styled.input.attrs((props) => ({
  ...props,
}))`
  font-size: 1em;
  font-family: "Electrolize", sans-serif;
  ::placeholder {
    font-size: 1em;
    color: #535353;
    font-family: "Electrolize", sans-serif;
  }
  color: black;
  background: #f8f8f8;
  border: 0;
  outline: 0;
  border-left: ${(props) => props.border && "1px solid #535353"};
  height: 100%;
  /* width: 30%; */
  padding: 0 15px;
  margin: 13px 0;
`;

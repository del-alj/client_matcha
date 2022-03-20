import styled from "styled-components";

import { ContrysSelect } from "../select";

export const Local = styled.div`
  display: flex;
  padding: 2rem 0rem 5.5rem 0;

  @media screen and (max-width: 900px) {
    order: 2;
  }
`;

export const LocalButton = styled.button`
  padding: 10px 60px;
  font-size: 1em;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: none;
  color: white;
  margin: 13px 0;
  width: 10rem;
  font-family: "Electrolize", sans-serif;
  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
    box-shadow: hsl(27deg 39% 95%) 0 0 0 2px hsl(27deg 100% 56%) 0 0 0 4px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:active {
    outline-color: transparent;
    outline-style: solid;
    box-shadow: 0 0 0 1px black;
  }
`;


// export const Select = styled(ContrysSelect).attrs((props) => ({
//   ...props,
// }))`
//   display: none;
// `;

// export const Select = styled.select.attrs((props) => ({
//   ...props,
// }))`
//   width: ${(props) => (props.width ? props.width : "auto")};
//   padding: 1rem;
//   margin-top: 0.5rem;
//   background: #f8f8f8;
//   border-color: #f4f4f4;
//   outline: 0;
// `;

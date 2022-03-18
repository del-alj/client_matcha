import styled from "styled-components";

import { ContrysSelect } from "../select";

export const Local = styled.div`
  display: flex;
  padding: 2rem 0rem 5.5rem 0;

  @media screen and (max-width: 900px) {
    order: 2;
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

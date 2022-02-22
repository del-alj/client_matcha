import styled from "styled-components";

export const Status = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  /* display: inline-block; */
  background: ${(props) => (props?.state === "online" ? "#7ed957" : "#e6e6e6")};
`;

export const VisibilityDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Titel = styled.h5`
  padding-left: 0.2rem;
  margin: 0.3rem 0;
`;

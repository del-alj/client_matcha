import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 0rem;
  height: ${(props) =>
    props.height ? `${props.height}` : "calc(100vh - 180px - 2rem)"};
`;

export const Article = styled.div`
  justify-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Prop = styled.h3`
  color: black;
`;

import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
`;

export const Img = styled.img`
  width: 1.5em;
  height: 1.5em;
  border-radius: ${(props) => (props.type === "profile" ? "50px" : "none")};
`;

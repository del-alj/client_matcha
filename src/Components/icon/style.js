import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
`;

export const Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: ${(props) => (props.type === "profile" ? "50px" : "none")};
`;

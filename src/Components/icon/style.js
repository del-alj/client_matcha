import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
  border-radius: ${(props) => (props.type === "profile" ? "50px" : "none")};
`;

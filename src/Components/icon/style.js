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

export const RedPoint = styled.div`
  width: 10px;
  height: 10px;
  background: red;
  border-radius: 25px;
  position: relative;
  top: 10px;
  right: -30px;
  display: ${(props) => (props?.display == 'true' ? "block" : "none")};
`;

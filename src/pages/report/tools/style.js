import styled from "styled-components";

export const Button = styled.button`
  width: 50%;
  height: 4em;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: 3px solid #f5f5f5;
  color: white;
  font-family: "Electrolize", sans-serif;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
  @media screen and (max-width: 425px) {
    height: 2em;
  }
`;

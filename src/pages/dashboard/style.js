import styled from "styled-components";

export const Content = styled.div`
  font-family: "Electrolize", sans-serif;
  /* min-height: 100vh; */
  @media screen and (max-width: 1440px) {
  }

  /* background: #f5f5f5; */
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 0rem;
`;

export const Box = styled.div`
  padding: 3rem 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: #f5f5f5;
  min-width: 70%;
  /* border: 1px solid red; */

  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

export const SliderPictureDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 20px 60px;
  width: 100%;
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

  &:focus {
    outline: none;
    box-shadow: hsl(27deg 39% 95%) 0 0 0 2px hsl(27deg 100% 56%) 0 0 0 4px;
  }

  &:active {
    outline-color: transparent;
    outline-style: solid;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  padding-top: 0.7rem;
  @media screen and (max-width: 930px) {
`;

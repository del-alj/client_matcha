import styled from "styled-components";

export const SliderButton = styled.button.attrs((props) => ({
  ...props,
}))`
  background: transparent;
  border: none;

  font-size: 3rem;
  /* :hover {
    background-color: black;
    color: white;
  } */
  :active {
    background-color: black;
    color: white;
  }
`;

export const SliderPicture = styled.img`
  /* border: 0.2rem solid black; */
  outline: black solid 0.2rem;
  width: 600px;
  height: auto;
`;

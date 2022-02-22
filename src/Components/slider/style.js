import styled from "styled-components";

export const SliderButton = styled.button.attrs((props) => ({
  ...props,
}))`
  background: transparent;
  border: none;
  padding: 0px;
  font-size: 3rem;
  /* :hover {
    background-color: black;
    color: white;
  } */
`;

export const SliderPicture = styled.img`
  /* border: 0.2rem solid black; */
  outline: black solid 0.2rem;
  width: 42rem;
  height: auto;
  @media screen and (max-width: 770px) {
    width: 21rem;
  }
`;

export const IconSlid = styled.img.attrs((props) => ({
  ...props,
}))`
  margin: 0px 7rem;
  width: 2rem;
  :active {
     {
      opacity: 0.7;
    }
  }
`;
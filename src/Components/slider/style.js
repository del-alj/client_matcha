import styled from "styled-components";
import { Flex } from "../styles/Container.styles";
export const SliderDiv = styled.div`
  background: transparent;
  border: none;
  display: flex;
  order: ${(props) => (props.order ? `${props.order}` : "none")};
  align-items: center;
  @media screen and (max-width: 930px) {
    order: 1};
  }
`;

export const SliderButton = styled.button.attrs((props) => ({
  ...props,
}))`
  background: transparent;
  border: none;
  padding: 0px;
  font-size: 3rem;
`;

export const SliderPicture = styled.div`
  outline: black solid 0.2rem;
  width: 30em;
  min-height: 30em;
  position: relative;
  background-image: ${(props) => props?.src ?? `${props?.src}`};
  background-size: cover;
  background-position: center;
  /* width: 100px;
  height: 100px; */
  @media screen and (max-width: 500px) {
    width: 20em;
    min-height: 20em;
  }
  @media screen and (max-width: 320px) {
    width: 18em;
    min-height:18em;
  }
`;

export const IconSlid = styled.img.attrs((props) => ({
  ...props,
}))`
  margin: 0px 2rem;
  width: 2rem;
  :active {
     {
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 900px) {
    margin: 2rem;
  }
`;

export const Content = styled(Flex)`
  padding-block-end: 5rem;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const SliderPictureDiv = styled(SliderDiv)`
  @media screen and (max-width: 930px) {
    width: 100%;
    justify-content: center;
  } ;
`;
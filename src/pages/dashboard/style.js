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
  /* height: calc(100vh - 180px - 2rem); */
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
  }
`;

export const CartInfo = styled.div`
  width: 100%;
  height: 10%;
  position: absolute;
  z-index: 9999;
  top: 90%;
  background: white;
  opacity: 0.7;
  display: flex;
`;

export const Card = styled.div`
  position: relative;
  /* border: 1px solid blue; */
`;

export const RatingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  text-align: left;
  padding-left: 1rem;
  line-height: 0px;
`;

export const CartTags = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  z-index: 9999;
  right: 100%;
  top: 10%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  ul {
    display: flex;
    flex-direction: column;
    li {
      background: black;
      margin-right: 0px;
      /* width: max-content; */
      align-self: flex-end;
      a {
        color: white;
      }
    }
  }
`;
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
  @media screen and (max-width: 555px) {
    /* background: transparent; */
    padding: 3rem 3rem;
  }
`;

export const SliderPictureDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
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
  @media screen and (max-width: 425px) {
    padding-top: 0px;
  }
`;

export const CartInfo = styled.div`
  width: 100%;
  height: 10%;
  position: absolute;
  z-index: 9999;
  top: 89.5%;
  background: white;
  opacity: 0.7;
  display: flex;
  @media screen and (max-width: 375px) {
    top: 89.5%;
  }
`;

export const MiniCartInfo = styled.div`
  width: 100%;
  height: 10%;
  min-height: 4em;
  /* z-index: 9999; */
  background: black;
  color: white
  opacity: 0.7;
  display: flex;

`;

export const Card = styled.div`
  position: relative;
`;

export const RatingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  padding-left: 1rem;
  line-height: 0px;
  width: 80%;
  p {
    margin-left: 1rem;
  }

  @media screen and (max-width: 930px) {
    flex-direction: row;
    align-items: center;
    p {
      margin-left: 0.1rem;
    }
  }
  @media screen and (max-width: 430px) {
    font-size: 9px !important;
  }
`;

export const CartTags = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 100%;
  top: 10%;
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    flex-direction: column;
    li {
      background: black;
      margin-right: 0px;
      align-self: flex-end;
      a {
        color: white;
      }
    }
  }
  @media screen and (max-width: 555px) {
    display: none;
  }
`;

export const Features = styled.div`
  text-align: center;
  h1 {
    margin: 0px;
  }
  img {
    font-size: large;
    width: 1.5em;
    height: 1.5em;
  }
  @media screen and (max-width: 425px) {
    font-size: smaller;

    img {
      font-size: smaller;
      width: 1.5em;
      height: 1.5em;
    }
  }
  @media screen and (max-width: 320px) {
    font-size: xx-small;

    img {
      font-size: xx-small;
      width: 1.5em;
      height: 1.5em;
    }
  }
`;
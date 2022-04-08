import styled from "styled-components";


export const Cadre = styled.form`
  min-width: 600px;
  height: 800px;
  background: #f5f5f5;
  border: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 425px) {
    align-items: flex-start;
    max-width: 200px;
  }
`;

export const Div = styled.div`
  min-width: 600px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 200px;
  }
`;

export const H5 = styled.h5`
  padding: 0 0 0 20px;
  color: black;
`;

export const SecDiv = styled.div`
  min-width: 80%;
  min-height: 100%;
  display: flex;
  /* border: 1px solid black; */
  align-items: center;
`;

export const DivButton = styled.div`
  width: 90px;
  height: 35px;
  display: flex;
  background: #e6e6e6;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 40px;
  height: 30px;
  color: white;
  border: none;
  font-family: "Electrolize", sans-serif;
  background: ${(props) => (props.status ? "black" : "#e6e6e6")};
  padding: 0px;
`;

export const Input = styled.input`
  font-size: 1em;
  font-family: "Electrolize", sans-serif;
  ::placeholder {
    font-size: 1em;
    color: #535353;
    font-family: "Electrolize", sans-serif;
  }
  color: black;
  background: #f8f8f8;
  border: 0;
  outline: 0;
  border-left: ${(props) => props.border && "1px solid #535353"};
  height: 100%;
  padding: 0 15px;
  margin: 13px 0;
`;

export const SliderRange = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const NewAgs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Slider = styled.span`
  justify-content: center;
  height: 15px;
  input[type="range"] {
    box-sizing: border-box;
    appearance: none;
    width: 300px;
    margin: 0;
    padding: 0 2px;
    /* Add some L/R padding to ensure box shadow of handle is shown */
    overflow: hidden;
    border: 0;
    border-radius: 1px;
    outline: none;
    background: linear-gradient(white, white) center;
    /* Use a linear gradient to generate only the 2px height background */
    background-size: 100% 2px;
    pointer-events: none;

    &:active,
    &:focus {
      outline: none;
    }
    //this moraba3
    &::-webkit-slider-thumb {
      height: 15px;
      width: 15px;
      background-color: white;
      position: relative;
      cursor: pointer;
      appearance: none;
      pointer-events: all;
      background: black;

      /* &::before {
        content: " ";
        display: block;
        position: absolute;
        top: 13px;
        left: 100%;
        width: 2000px;
        height: 2px;
      } */
    }
  }
  background: #e6e6e6 !important;

  position: relative;
  height: 15px;
  input[type="range"] {
    position: absolute;

    &:nth-child(1) {
      &::-webkit-slider-thumb::before {
        background-color: white;
      }
    }

    &:nth-child(2) {
      background: none;

      &::-webkit-slider-thumb::before {
        background-color: white;
      }
    }
  }
`;

export const DivImg = styled.div`
  width: 100%;
  height: auto;
  padding: 5em;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const Img = styled.img`
  width: 20em;
  height: 20em;
  border: 6px solid black;
`;

export const Blur = styled.div`
  :hover img {
    opacity: 0.5;
  }
`;
export const Heart = styled.div`
  position: absolute;
  top: 150px;
  right: 150px;
  display: ${(props) => (props?.display ? "block" : "none")};
  img {
    opacity: 0;
  }
  :hover img {
    opacity: 1;
  }
`;
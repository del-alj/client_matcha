import styled from "styled-components";


export const Cadre = styled.div`
  min-width: 600px;
  height: 800px;
  background: #f5f5f5;
  border: 1px solid #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
  /* position: absolute; */
  /* justify-content: space-between; */
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.2;
  transition: opacity 0.2s;
  z-index: 1;
  :hover {
    /* z-index: 0; */
    opacity: 0.5;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    z-index: 999999999999;
    background: black;
    opacity: 1;
    cursor: pointer;
    appearance: none;
    pointer-events: all;
  }
  /* &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: black;
    cursor: pointer;
    pointer-events: all;

    z-index: 999;
    outline: 0;
    border: none;
  } */
`;

export const InitialeAgs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NewAgs = styled.div`
  display: flex;
  flex-direction: row;
`;
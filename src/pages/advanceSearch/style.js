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
  /* padding-right: 20px; */
  padding: 0 0 0 20px;
  color: black;
`;

export const SecDiv = styled.div`
  min-width: 80%;
  min-height: 100%;
  /* background: blue; */
  border: 1px solid #f1f1f1;
  /* display: flex;
  flex-direction: row; */
  /* justify-content: space-around; */
  align-items: center;
`;

export const DivButton = styled.div`
  width: 100px;
  min-height: 50px;
  display: flex;
  background: #e6e6e6;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  color: white;
  border: none;
  background: ${(props) => (props.status ? "black" : "#e6e6e6")};
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
  /* width: 30%; */
  padding: 0 15px;
  margin: 13px 0;
`;

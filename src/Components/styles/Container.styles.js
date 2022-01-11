import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  /* margin: 0 auto; */
  display: flex;
  border: 1px solid yellow;
  font-family: "Electrolize", sans-serif;
  h1 {
    font-size: 44px;
  }
  align-items: center;
  justify-content: center;
  /* align-content: space-around; */
  /* border: 1px solid black; */
  @media screen and (max-width: 1440px) {
    width: auto;
    align-items: center;
    justify-content: center;
  }
`;

export const Block = styled.div`
  width: 50%;
  /* height: 100%; */
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  justify-content: space-around;
  img {
    //more
    width: auto;
    height: 100vh;
  }
  @media screen and (max-width: 768px) {
    img {
      display: none;
    }
    width: auto;
    align-items: center;
    justify-content: center;
  }
`;

export const Div = styled.div`
  /* width: 65%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-around;
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
  border-bottom: 1px solid #535353;
  height: 60px;
  width: 30%;
  padding: 0 15px;
  margin: 13px 0;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  font-size: 0.8em;
  font-family: "Electrolize", sans-serif;
  color: #535353;
  text-align: right;
  margin: 13px 0;
`;

export const Form = styled.form`
  height: 80%;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  align-content: space-around;
`;

export const Button = styled.button`
  width: 33%;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  margin: 13px 0;
  font-family: "Electrolize", sans-serif;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;
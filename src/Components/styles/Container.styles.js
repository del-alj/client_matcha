import styled from "styled-components";

export const Header = styled.header`
  font-family: "Electrolize", sans-serif;
  overflow: hidden;
  font-size: 1.5em;
  /* background-color: #333; */
  position: fixed;
  top: 0;
  width: 100%;
  padding: 40px 60px;
`;

export const Content = styled.div`
  text-align: center;

  width: 100%;
  height: 100%;
  display: flex;
  font-family: "Electrolize", sans-serif;
  margin: 0;
  min-height: 100vh;
  h1 {
    font-size: 44px;
  }
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    /* width: 100%; */
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 50%;
  background-image: ${(props) =>
    props.picture ? `url(${props.picture})` : "none"};
  background-size: cover;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: ${(props) => (props.picture ? "none" : "flex")};
    background-image: "none";
    justify-content: center;
    align-items: center;
  }
`;

export const Div = styled.div`
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
    width: 50%;
  }
  @media screen and (max-width: 768px) {
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
  height: 50%;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;
`;

export const Button = styled.button`
  height: 60px;
  width: 30%;
  font-size: 1em;
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
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Homebackground = styled.div`
  height: 100vh;
  width: 100%;
  display: block;
  position: relative;
  color: black;
  justify-content: center;
  align-items: center;

  h1 {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 3.5em;
  }
  p {
    font-size: 2.5em;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 3.5em;
  }
  ::after {
    content: "";
    background: ${(props) =>
      props.picture ? `url(${props.picture})` : "none"};
    background-size: cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  @media screen and (max-width: 425px) {
    h1 {
      font-size: 2.5em;
    }
    p {
      font-size: 1.5em;
    }
  }
`;
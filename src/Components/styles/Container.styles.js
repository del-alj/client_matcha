import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 80px;
  padding: 0px 30px;
  font-size: 1.5em;
  font-family: "Electrolize", sans-serif;
  z-index: 1;
  overflow: hidden;
  position: fixed;
  border-bottom: 1px solid #535353;
  background: white;
`;

export const Footer = styled.footer`
  min-height: 100px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1440px) {
    width: 20%;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    font-size: 0.8em;
    flex-direction: column;
    justify-content: space-around;
  }
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
  min-height: 100vh;
  justify-content: ${(props) =>
    props.justifyContent ? `${props.justifyContent}` : "none"};
  width: 50%;
  background-image: ${(props) =>
    props.picture ? `url(${props.picture})` : "none"};
  background-size: cover;
  background-position: center;
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



export const Input = styled.input.attrs((props) => ({
  ...props,
}))`
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

export const Search = styled.input.attrs((props) => ({
  ...props,
}))`
  font-size: 0.7em;
  font-family: "Electrolize", sans-serif;
  ::placeholder {
    font-size: 0.9em;
    color: #535353;
    opacity: 0.5;
    font-family: "Electrolize", sans-serif;
  }
  color: black;
  background: #f8f8f8;
  border: 0;
  outline: 0;
  height: 40px;
  width: 100%;
  padding: 0 15px;
  margin: 13px 0;

  @media screen and (max-width: 425px) {
    ::placeholder {
      font-size: 0.7em;
    }
  }
`;

export const SearchDiv = styled.div`
  justify-content: center;
  width: 30%;
  margin: 0;
`;


export const StyledLink = styled(Link)`
  font-size: 0.8em;
  font-family: "Electrolize", sans-serif;
  color: #535353;
  text-align: right;
  margin: 13px 0;
  color: ${(props) => (props.color ? props.color : "")};
  text-decoration: ${(props) => (props.inline ? props.inline : "")}; ;
`;


export const StyledLinkLogout = styled.button`
  font-size: 0.8em;
  font-family: "Electrolize", sans-serif;
  color: #535353;
  text-align: right;
  margin: 13px 0;
  color: ${(props) => (props.color ? props.color : "")};
  text-decoration: ${(props) => (props.inline ? props.inline : "")};
  border: none;
  background: none;
`;

export const Form = styled.form`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: center;
`;

export const Button = styled.button`
  /* height: 60px; */
  padding: 20px 60px;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  /* align-content: space-around; */
  align-items: center;
  justify-content: center;
  background-color: black;
  border: none;
  color: white;
  margin: 13px 0;
  font-family: "Electrolize", sans-serif;
  @media screen and (max-width: 1440px) {
    /* width: 50%; */
  }
  @media screen and (max-width: 768px) {
    /* width: 100%; */
  }
`;

export const Homebackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 100px 10px;
  background-image: ${(props) =>
    props.picture ? `url(${props.picture})` : "none"};
  background-size: cover;
  background-position: center;
  color: black;
  /* opacity: 0.5; */
  h1 {
    font-size: 3.5em;
  }
  p {
    font-size: 2.5em;
  }
  /* ::after {
    content: "";
    background-image: ${(props) =>
    props.picture ? `url(${props.picture})` : "none"};
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  } */
  @media screen and (max-width: 425px) {
    h1 {
      font-size: 2.5em;
    }
    p {
      font-size: 1.5em;
    }
  }
`;

// export const Icon = styled.button`
//   background: none;
//   border: none;
// `;

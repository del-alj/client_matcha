import styled from "styled-components";

export const Input = styled.input`
  width: 21rem;
  /* height: 150px; */

  height: 60px;
  padding: 0 15px;
  margin: 13px 0;

  background: #f8f8f8;
  font-size: 1em;
  font-family: "Electrolize", sans-serif;

  ::placeholder {
    font-size: 1em;
    color: #535353;
    font-family: "Electrolize", sans-serif;
  }
  color: black;
  border: 0;
  outline: 0;
  /* box-sizing: border-box;
  resize: none; */
`;

export const Textarea = styled.textarea`
  width: 21rem;
  height: 10rem;
  padding: 0.8rem 1rem;
  margin: 13px 0;
  line-height: 1.6;

  background: #f8f8f8;
  font-size: 1em;
  font-family: "Electrolize", sans-serif;

  ::placeholder {
    font-size: 1em;
    color: #535353;
    font-family: "Electrolize", sans-serif;
  }
  color: black;
  border: 0;
  outline: 0;
`;

export const Label = styled.label``;

export const Div = styled.div`
  display: flex;
  /* border: 1px solid black; */
  /* padding: 0 2rem; */
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
`;

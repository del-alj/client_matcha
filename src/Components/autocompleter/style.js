import styled from "styled-components";

export const Autocomplete = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;

  .autocomplete-items {
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    z-index: 99;
    /*position the autocomplete items to be the same width as the container:*/
    top: 100%;
    left: 0;
    right: 0;
  }

  .autocomplete-items div {
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;
  }

  /*when hovering an item:*/
  .autocomplete-items div:hover {
    background-color: #e9e9e9;
  }

  /*when navigating through the items using the arrow keys:*/
  .autocomplete-active {
    background-color: #535353 !important;
    color: #ffffff;
  }
`;

export const Input = styled.input`
  border: 1px solid transparent;
  background-color: #f8f8f8;
  padding: 10px;
  font-size: 16px;

  background-color: #f8f8f8;
  width: 100%;
`;

export const Button = styled.button`
  padding: 20px 60px;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: none;
  color: white;
  margin: 13px 0;
  font-family: "Electrolize", sans-serif;
  &:hover:not(:disabled) {
    opacity: 0.8;
    /* color: red; */
  }

  &:focus {
    outline: none;
    box-shadow: hsl(27deg 39% 95%) 0 0 0 2px hsl(27deg 100% 56%) 0 0 0 4px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:active {
    outline-color: transparent;
    outline-style: solid;
    box-shadow: 0 0 0 1px black;
  }
  width: 200px;
  align-self: center;
`;

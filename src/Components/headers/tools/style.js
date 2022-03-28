import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: center;
  margin: 0;
  padding: 15px;
  width: 60px;
  z-index: 9999;
  position: fixed;
  top: 60px;
  /* left: 79%; */
  background: #f6f6f6;
  min-width: 100px;
  block-align: right;

  /* right: -300; */
`;

export const Li = styled.li`
  font-size: 0.5em;
  font-family: "Electrolize", sans-serif;
  text-align: left;
  /* border: none; */
  background: none;
  line-height: 3px;
  a {
    margin: 13px 0;
    text-decoration: none;
    color: black;
  }
  height: 30px;
  display: flex;
  :hover {
    background: #e6e6e6;
  }
`;

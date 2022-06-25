import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: center;
  margin: 0;
  padding: 15px;
  min-width: 60px;
  z-index: 99999;
  /* position: fixed; */
  top: 210px;
  /* left: 79%; */
  background: #f6f6f6;
  min-width: 100px;
  /* block-align: right; */
  /* border: 1px solid black; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* right: -300; */
`;

export const Li = styled.li`
  font-size: 0.8rem;
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

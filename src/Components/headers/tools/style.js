import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: center;
  margin: 0;
  padding: 15px;
  /* min-width: 60px; */
  z-index: 9999;
  position: fixed;
  top: 60px;
  /* left: 79%; */
  background: #f6f6f6;
  min-width: 300px;
  /* block-align: right; */
  /* border: 1px solid black; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* right: -300; */
  max-height: 300px;
  overflow-y: scroll;
`;

export const Li = styled.li`
  font-size: 0.5em;
  font-family: "Electrolize", sans-serif;
  text-align: left;
  /* border: none; */
  background: none;
  line-height: 3px;
  a {
    /* border: 1px solid black; */
    height: 20px;
    /* text-align: center; */
    margin: 13px 0;
    text-decoration: none;
    color: black;
    display: flex;
    > h1 {
      margin: 0px;
      font-size: 1.3em;
      /* width: 50px; */
    }
    > p {
      margin: 0px 0px 0px 10px;
      color: #808080;
      width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      /* border: 1px solid black; */
      line-height: 10px;       
    }
  }
  height: 30px;
  display: flex;
  :hover {
    background: #e6e6e6;
  }
`;

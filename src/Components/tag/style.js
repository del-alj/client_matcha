import styled from "styled-components";

export const Li = styled.li`
  float: left;
  a {
    /* color: #535353; */
    color: ${(props) => (props.active ? "white" : "#535353")};
    text-decoration: none;
  }
  /* background: #e6e6e6; */
  background: ${(props) => (props.active ? "black" : "#e6e6e6")};
  border-radius: 3px 0 0 3px;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  -webkit-transition: color 0.2s;

  ::before {
    /* background: #fff; */
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: "";
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px;
  }

  ::after {
    background: #fff;
    border-bottom: 13px solid transparent;
    /* border-left: 10px solid #e6e6e6; */
    //notwork white this
    border-left: ${(props) =>
      props.active ? "10px solid black" : "10px solid #e6e6e"};
    border-top: 13px solid transparent;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
  }

  :hover {
    background-color: black;
    a {
      color: white;
    }
  }

  :hover::after {
    border-left-color: Black;
  }
  clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0 100%, 20px 50%);

  :active {
    background-color: black;
    a {
      color: white;
    }
  }

  :visited::after {
    border-left-color: white;
  }
  /* clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0 100%, 20px 50%); */
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  overflow: hidden;
  max-width: 350px;
  justify-content: center;
  padding: 20px 0 0;
`;

export const EditLi = styled.li`
  /* float: left; */
  a {
    color: #535353;
    text-decoration: none;
  }
  background: #e6e6e6;
  border-radius: 3px 0 0 3px;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  /* -webkit-transition: color 0.2s; */

  ::before {
    /* box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: "";
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 10px; */
  }
  clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0 100%, 20px 50%);
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  z-index: 10;
  margin: 0px;
  padding: 0;
  right: -20px;
  :hover {
    background: white;
  }
`;

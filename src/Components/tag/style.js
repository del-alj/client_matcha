import styled from "styled-components";

import { TagDiv } from "./index";

export const Li = styled.li`
  float: left;

  .tag {
    background: #e6e6e6;
    border-radius: 3px 0 0 3px;
    color: #535353;
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 20px 0 23px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    -webkit-transition: color 0.2s;
  }

  .tag::before {
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

  .tag::after {
    background: #fff;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #e6e6e6;
    border-top: 13px solid transparent;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
  }

  .tag:hover {
    background-color: black;
    color: white;
  }

  .tag:hover::after {
    border-left-color: Black;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  margin: 0;
  overflow: hidden;
  max-width: 350px;
  justify-content: center;
  padding: 20px 0 0;
`;

export const Tag = styled(TagDiv)`
  border: 1px solid black;
`;

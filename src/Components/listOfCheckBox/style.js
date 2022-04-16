import styled from "styled-components";

export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 5rem;
  height: 3rem;
  opacity: 0;
  cursor: pointer;
`;

export const CheckBox = styled.div`
  flex-direction: initial !important;
  ${Input}[type="checkbox"]:checked ~ div {
    background: #535353;
    color: #e6e6e6;
  }

  position: relative;
  width: 5rem;
  height: 3rem;
  float: left;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  transition: 0.5s ease;
  background: #f8f8f8;
  color: #535353;
  /* :first-child {
  } */
  margin-right: 8px;
  > div {
    width: 5rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

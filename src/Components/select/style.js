import styled from "styled-components";

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
`;

export const Li = styled.li`
  > a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }

  /* Change the link color on hover */
  > a:hover {
    background-color: #555;
    color: white;
  }
`;

export const Select = styled.select.attrs((props) => ({
  ...props,
}))`
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: 1rem;
  margin-top: 0.5rem;
  background: #f8f8f8;
  border-color: #f4f4f4;
  outline: 0;
`;

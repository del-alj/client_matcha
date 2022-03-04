import styled from "styled-components";

export const Div = styled.div`
  max-width: 50rem;
  width: 100%;
  /* flex: 1; */
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  // for there is no picture
  justify-content: ${(props) => (props.status ? "center" : "none")};
  > div {
    margin: ${(props) => (props.status ? "3rem" : "none")};
  }
`;

export const Img = styled.img`
  width: 33.33%;
  padding: 2rem;
`;

export const Add = styled.button`
  width: 5rem;
  height: 5rem;
  align-items: center;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-shadow: 1px 1px #f8f8f8;
  padding: 2rem;
  margin-left: 3rem;
`;

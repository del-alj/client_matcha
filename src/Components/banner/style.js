import styled from "styled-components";

export const BannerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0px 30px;
  min-width: 40%;
  height: 200px;
  font-family: "Electrolize", sans-serif;

  border: 1px solid
    ${(props) => (props.borderColor ? `${props.borderColor}` : "#e6e6e6")};

  background-color: ${(props) =>
    props.background ? `${props.background}` : "#F8F8F8"};

  a {
    color: green;
  }
  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.8rem;
  }
`;

export const Div = styled.div`
  min-height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
  padding: 100px 20px;
`;

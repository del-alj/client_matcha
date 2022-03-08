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
  :hover {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  :active {
    opacity: 0.3;
  }
  //mabratch tkhedem
  /* :focus {
    border: 1px solid black;
  } */
  :focus {
    border: 1px solid black;
  }
`;

export const Add = styled.div`
  width: 5rem;
  height: 5rem;
  align-items: center;
  /* display: flex; */

  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-shadow: 1px 1px #f8f8f8;
  /* padding: 2rem; */
  margin-left: 3rem;
`;

export const Uploadpicture = styled.input`
  border: 1px solid black;
  width: 100%;
  height: 100%;
  opacity: 0;
  left: 0px;
  top: 10px;
`;

export const Text = styled.p`
  position: relative;
  left: 0px;
  top: -65px;
`;

export const PicButton = styled.button`
  padding: 20px 60px;
  font-size: 1em;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: none;
  color: white;
  margin: 13px 0;
  width: 10rem;
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
`;
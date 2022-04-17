import styled from 'styled-components';

export const ListMessages = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background: white;
  height: 30em;
  padding: 1em;
`;

export const Board = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background: white;
  height: 30em;
  padding: 1em;
  overflow-y: scroll;
`;

export const Heart = styled.img`
  width: 50px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const Circle = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 25px;
  background: black;
  border: 1px solid black;
  margin: 4px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;
export const Message = styled.input.attrs((props) => ({
  ...props,
}))`
  font-size: 0.7em;
  font-family: 'Electrolize', sans-serif;
  ::placeholder {
    font-size: 0.9em;
    color: #535353;
    opacity: 0.5;
    font-family: 'Electrolize', sans-serif;
  }
  color: black;
  background: #f8f8f8;
  border: 0;
  outline: 0;
  height: 40px;
  width: 100%;
  padding: 0 15px;
  margin: 13px 0;

  @media screen and (max-width: 425px) {
    ::placeholder {
      font-size: 0.7em;
    }
  }
`;

export const MessageDiv = styled.div`
  justify-content: center;
  width: 80%;
  margin: 0;
`;

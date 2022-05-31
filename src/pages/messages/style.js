import styled from "styled-components";

export const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 13px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  justify-content: center;
`;

export const ListMessages = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  background: white;
  padding: 1em;

  overflow-y: scroll;
  border-right: 2px solid #f3f3f3;

  height: 100%;

  ::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    /* background-color:  #F5F5F5; */
    /* border: 2px solid #555555; */
  }
  @media screen and (max-width: 809px) {
    display: none;
  }
`;

export const Board = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  background: white;
  /* height: 30em; */
  padding: 1em;
  /* overflow-y: scroll; */
  height: 100%;
  position: relative;
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

export const MessageDiv = styled.div`
  justify-content: center;
  width: 80%;
  min-width: 20em;
  margin: 0;
  height: 60em;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  position: relative;

  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

export const ConversationDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
  border-bottom: 1.5px solid #d1d1d1;

  :hover {
    background-color: rgb(245, 243, 243);
  }
`;

export const FriendImg = styled.div`
  display: ${(props) => (props?.display == true ? "block" : "none")};
  margin-right: 20px;
  /* border: 1px solid black; */
  width: 10px;
  height: 10px;
  border-radius: 50%;
  /* overflow: hidden; */
  /* background-image: ${(props) => props?.src ?? `${props?.src}`};
  background-size: cover;
  background-position: center; */
  background-color: red;
  /* @media screen and (max-width: 375px) {
    width: 20px;
    height: 20px;
  } */
`;

export const FriendName = styled.span`
  font-weight: 500;
`;

export const TypingSection = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  /* flex: 1; */
  /* border: solid; */
  /* justify-content: space-between; */
`;

export const Button = styled.button`
  padding: 11px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  border: none;
  color: white;
  margin: 13px 7px;
  font-family: "Electrolize", sans-serif;
  &:hover:not(:disabled) {
    opacity: 0.8;
  }
  @media screen and (max-width: 375px) {
    font-size: 9px;
    padding: 11px 5px;
  }
`;

export const ChatsSection = styled.div`
  /* flex: ; */
  /* flex: 1; */
  height: 60%;
  min-height: 549px;
  overflow-y: scroll;
  padding-right: 10px;
  /* padding-top: 120px; */
  /* border: solid; */

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #555555;
    border: 2px solid #555555;
  }
`;

export const MessageInput = styled.input`
  font-size: 0.7em;
  font-family: "Electrolize", sans-serif;
  ::placeholder {
    font-size: 0.9em;
    color: #535353;
    opacity: 0.5;
    font-family: "Electrolize", sans-serif;
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

export const MessageText = styled.p`
  padding: 10px;

  color: black;
  max-width: 10em;
  text-align: initial;
  background-color: ${(props) => (props?.own ? "black" : "#f8f8f8")};
  color: ${(props) => (props?.own ? "#f8f8f8" : "black")}; ;
`;
export const MessageTop = styled.div`
  display: flex;
`;

export const MessageBox = styled.div`
  display: flex;
  justify-content: ${(props) => (props?.own ? "flex-end" : "flex-start")};
`;

export const StikyDiv = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
  width: 100%;
  /* min-height: 80px; */
  padding: 0px 30px;
  font-size: 1.5em;
  font-family: "Electrolize", sans-serif;
  z-index: 1;
  overflow: hidden;
  position: absolute;
  border-bottom: 1.5px solid #d1d1d1;
  top: 0px;
  background: #ffffff;
`;

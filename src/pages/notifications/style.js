import styled from "styled-components";

export const NotificationContent = styled.span`
padding-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  > a {
      color: black;
      text-decoration: none;
      margin-bottom: 17px;
      :hover {
        text-decoration: underline;

        background-color: rgb(245, 243, 243);
      }
  }
  /* border: 1px solid black; */
`;

export const Box = styled.div`
padding: 20px;
  width: 30rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background: #f6f6f6;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  max-width: 51em;
  left: 50%;
  top: 50%;
`;

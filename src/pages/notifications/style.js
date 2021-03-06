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
    }
  }
`;

export const Box = styled.div`
  height: -webkit-fill-available;
  padding: 20px;
  width: 30rem;
  display: flex;
  flex-direction: column;
  background: #f6f6f6;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  max-width: 51em;
  left: 50%;
  top: 50%;
`;

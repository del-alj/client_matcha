import React from "react";

import {
  Content,
  Block,
  Input,
  Div,
  Form,
  Button,
} from "../../styles/Container.styles";
import forgot from "../../../images/forgot.jpg";
const ForgotPassword = () => {
  return (
    <Content>
      <Block>
        <img src={forgot} alt="forgot" />
      </Block>
      <Block>
        <h1>Forgot passward</h1>
        <Form>
          <Div>
            <Input
              placeholder="New Password"
              type="password"
              id="newPassword"
            />
          </Div>
          <Div>
            <Input
              placeholder="Confirm New Password"
              type="password"
              id="confirmNewPassword"
            />
          </Div>
          <Div>
            <Button type="button">Submit</Button>
          </Div>
        </Form>
      </Block>
    </Content>
  );
};

export { ForgotPassword };

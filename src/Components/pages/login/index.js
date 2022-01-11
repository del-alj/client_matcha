import React from "react";

import {
  Content,
  Block,
  Input,
  Link,
  Div,
  Form,
  Button,
} from "../../styles/Container.styles";
import venus from "../../../images/venus.jpg";
const Login = () => {
  return (
    <Content>
      <Block>
        <h1>Login</h1>
        <Form>
          <Div>
            <Input placeholder="User Name" type="userName" id="userName" />
          </Div>
          <Div>
            <Input placeholder="Password" type="password" id="Password" />
            <Link href="change-password">Forgot password?</Link>
          </Div>
          <Div>
            <Button type="button">Login</Button>
          </Div>
        </Form>
      </Block>
      <Block>
        <img src={venus} alt="Login" />
      </Block>
    </Content>
  );
};

export { Login };

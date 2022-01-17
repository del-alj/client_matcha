import React from "react";

import { Link } from "react-router-dom";
import {
  Content,
  Block,
  Input,
  StyledLink,
  Div,
  Form,
  Button,
} from "../../Components/styles/Container.styles";
import venus from "../../assets/venus.jpg";
import { Layout } from "../../layouts/signinLayout";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Login = () => {
  return (
    <Layout>
      <Content>
        <Block>
          <Form method="POST" action={`${BASE_URL}/login`}>
            <h1>Login</h1>
            <Div>
              <p>
                Need a Matcha account?
                <StyledLink to="signup">Create an account</StyledLink>
              </p>
              <Input placeholder="User Name" type="userName" id="userName" />
            </Div>
            <Div>
              <Input placeholder="Password" type="password" id="Password" />
              <StyledLink to="change-password">Forgot password?</StyledLink>
            </Div>
            <Div>
              <Button type="submit">Login</Button>
            </Div>
          </Form>
        </Block>
        <Block picture={venus} color="yellow">
          {/* <img src={venus} alt="Login" /> */}
        </Block>
      </Content>
    </Layout>
  );
};

export { Login };

import React from "react";

import {
  Content,
  Block,
  Input,
  Div,
  Form,
  Button,
} from "../../Components/styles/Container.styles";
import mars from "../../assets/mars.jpg";
import { Layout } from "../../layouts/signinLayout";

const Signup = () => {
  return (
    <Layout>
      <Content>
        <Block picture={mars}>{/* <img src={mars} alt="Signup" /> */}</Block>
        <Block>
          <Form method="POST" action="http://localhost:7000/registration">
            <h1>Sign up</h1>
            <Div>
              <Input placeholder="User Name" type="userName" id="userName" />
            </Div>
            <Div>
              <Input placeholder="First Name" type="firstName" id="firstName" />
            </Div>
            <Div>
              <Input placeholder="Last Name" type="lastName" id="lastName" />
            </Div>
            <Div>
              <Input placeholder="Email" type="email" id="email" />
            </Div>
            <Div>
              <Input placeholder="Password" type="password" id="Password" />
            </Div>
            <Div>
              <Button type="submit">Sign up</Button>
            </Div>
          </Form>
        </Block>
      </Content>
    </Layout>
  );
};

export { Signup };

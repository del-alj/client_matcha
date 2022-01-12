import React from "react";

import {
  Content,
  Block,
  Input,
  Div,
  Form,
  Button,
} from "../../styles/Container.styles";
import mars from "../../../images/mars.jpg";
const Signup = () => {
  return (
    <Content>
      <Block picture={mars}>{/* <img src={mars} alt="Signup" /> */}</Block>
      <Block>
        <Form>
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
            <Button type="button">Sign up</Button>
          </Div>
        </Form>
      </Block>
    </Content>
  );
};

export { Signup };

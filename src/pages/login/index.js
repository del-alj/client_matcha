import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  let history = useHistory();
  const url = `${BASE_URL}/login`;
  const [data, setData] = useState({
    userName: "",

    Password: "",
  });

  const param = {
    user_name: data.userName,
    password: data.Password,
  };

  const config = {
    headers: {
      "content-Type": "application/json",
    },
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, param, config)
      .then((res) => {
        history.push("/home");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };
  return (
    <Layout>
      <Content>
        <Block>
          <Form onSubmit={(e) => submit(e)}>
            <h1>Login</h1>
            <Div>
              <p>
                Need a Matcha account?
                <StyledLink to="signup">Create an account</StyledLink>
              </p>
              <Input
                onChange={(e) => handelChange(e)}
                placeholder="User Name"
                type="userName"
                id="userName"
              />
            </Div>
            <Div>
              <Input
                onChange={(e) => handelChange(e)}
                placeholder="Password"
                type="password"
                id="Password"
              />
              <StyledLink to="change-password">Forgot password?</StyledLink>
            </Div>
            <Div>
              <Button type="submit">Login</Button>
            </Div>
          </Form>
        </Block>
        <Block picture={venus}></Block>
      </Content>
    </Layout>
  );
};

export { Login };
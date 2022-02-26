import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { validation } from "../../assets/validationSchema/registration";
import {
  Content,
  Block,
  Input,
  Div,
  Form,
  Button,
} from "../../Components/styles/Container.styles";
import { Layout } from "../../layouts/signinLayout";
//
import mars from "../../assets/mars.jpg";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Signup = () => {
  let history = useHistory();

  const url = `${BASE_URL}/registration`;
  const [data, setData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    Password: "",
  });

  const param = {
    user_name: data.userName,
    password: data.Password,
    last_name: data.lastName,
    first_name: data.firstName,
    email: data.email,
  };

  const headers = {
    headers: {
      "content-Type": "application/json",
    },
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, param, headers)
      .then((res) => {
        history.push("/confirmSignup");
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
        <Block picture={mars} />
        <Block>
          <Form onSubmit={(e) => submit(e)}>
            <h1>Sign up</h1>
            <Div>
              <Input
                onChange={(e) => handelChange(e)}
                placeholder="User Name"
                type="userName"
                id="userName"
                {...validation["userName"]}
              />
            </Div>
            <Div>
              <Input
                onChange={(e) => handelChange(e)}
                placeholder="First Name"
                type="firstName"
                id="firstName"
                {...validation["firstName"]}
              />
            </Div>
            <Div>
              <Input
                onChange={(e) => handelChange(e)}
                placeholder="Last Name"
                type="lastName"
                id="lastName"
                {...validation["lastName"]}
              />
            </Div>
            <Div>
              <Input
                onChange={(e) => handelChange(e)}
                placeholder="Email"
                type="email"
                id="email"
                {...validation["email"]}
              />
            </Div>
            <Div>
              <Input
                onChange={(e) => handelChange(e)}
                placeholder="Password"
                type="password"
                id="Password"
                {...validation["password"]}
              />
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

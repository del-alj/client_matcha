import React, { useState } from "react";

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
import { axios } from "axios";

const Signup = () => {
  const url = "http://localhost:7000/registration";
  const [data, setData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    Password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        userName: data.userName,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        Password: data.Password,
      })
      .then((res) => {
        console.log(res.data);
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
        <Block picture={mars}>{/* <img src={mars} alt="Signup" /> */}</Block>
        <Block>
          <Form onSubmit={(e) => submit(e)}>
            <h1>Sign up</h1>
            <Div>
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
                placeholder="First Name"
                type="firstName"
                id="firstName"
              />
            </Div>
            <Div>
              <Input
                onChange={(e) => handelChange(e)}
                placeholder="Last Name"
                type="lastName"
                id="lastName"
              />
            </Div>
            <Div>
              <Input
                onChange={(e) => handelChange(e)}
                placeholder="Email"
                type="email"
                id="email"
              />
            </Div>
            <Div>
              <Input
                onChange={(e) => handelChange(e)}
                placeholder="Password"
                type="password"
                id="Password"
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

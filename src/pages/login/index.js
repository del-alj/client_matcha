import React, { useState, useContext } from "react";
import axios from "axios";

import { validation } from "../../assets/validationSchema/registration";
import { Layout } from "../../layouts/signinLayout";
import {
  Content,
  Block,
  Input,
  StyledLink,
  Div,
  Form,
  Button,
} from "../../Components/styles/Container.styles";
import { authentication } from "../../Components/contexts/usecontext";

import venus from "../../assets/venus.jpg";

const Login = () => {
  const { setAuth } = useContext(authentication);
  const url = `${process.env.REACT_APP_BASE_URL}/login`;

  const [data, setData] = useState({
    userName: "",

    Password: "",
  });

  const param = {
    user_name: data?.userName,
    password: data?.Password,
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, param)
      .then((res) => {
        // setAuth in localstorage
        localStorage.setItem("Token", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        localStorage.setItem("userId", JSON.stringify(res.data?.user?.user_id));
        localStorage.setItem("reported", res.data?.user?.reported);
        setAuth((prev) => ({
          ...prev,
          token: res.data.accessToken,
          userId: res.data?.user?.user_id,
          reported: res.data?.user?.reported ?? false,
          userName: param?.user_name,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
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
                <StyledLink to="/signup">Create an account</StyledLink>
              </p>
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
                placeholder="Password"
                type="password"
                id="Password"
                {...validation["password"]}
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

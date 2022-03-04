import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { validation } from "../../assets/validationSchema/registration";
import { Layout } from "../../layouts/signinLayout";
import { UserProfile } from "../userProfile";
import {
  Content,
  Block,
  Input,
  StyledLink,
  Div,
  Form,
  Button,
} from "../../Components/styles/Container.styles";
import { UserContext } from "../../Components/contexts/usercontext";

import venus from "../../assets/venus.jpg";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Login = () => {
  // const [user, setUser] = useState();
  const { userDetails, setUserDetails } = useContext(UserContext);

  const token = localStorage.getItem("Token");

  if (token) {
    console.log("done");
  }
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
        // setToken in localstorage
        localStorage.setItem("Token", JSON.stringify(res.data.accessToken));
        localStorage.setItem("userId", JSON.stringify(res.data?.user?.user_id));
        setUserDetails({
          userName: res.data?.user?.user_name,
          firstName: res.data?.user?.first_name,
          lastName: res.data?.user?.last_name,
          email: res.data?.user?.email,
        });
        //not work
        history.push("/profile");
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
    <>
      {token ? (
        <UserProfile user={userDetails} />
      ) : (
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
      )}
    </>
  );
};

export { Login };

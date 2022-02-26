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

//
import forgot from "../../assets/forgot.jpg";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ForgotPassword = () => {
  let history = useHistory();
  const url = `${BASE_URL}/reset`;
  const [data, setData] = useState({
    email: "",
  });

  const param = {
    email: data.email,
  };

  const headers = {
    headers: {
      "content-Type": "application/json",
    },
  };

  const submit = (e) => {
    console.log("test", param);
    e.preventDefault();
    axios
      .post(url, param, headers)
      .then((res) => {
        history.push("/reset");
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
    <Content>
      <Block picture={forgot} color="yellow">
        {/* <img src={forgot} alt="forgot" /> */}
      </Block>
      <Block>
        <Form onSubmit={(e) => submit(e)}>
          <h1>Forgot password</h1>
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
            <Button type="submit">Submit</Button>
          </Div>
        </Form>
      </Block>
    </Content>
  );
};

export { ForgotPassword };

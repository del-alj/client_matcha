import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  Content,
  Block,
  Input,
  Div,
  Form,
  Button,
} from "../../Components/styles/Container.styles";
import forgot from "../../assets/forgot.jpg";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const ResetPassword = () => {
  let history = useHistory();
  let { token } = useParams();
  const url = `${BASE_URL}/reset/${token}`;
  const [data, setData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const param = {
    password: data.newPassword === data.confirmNewPassword && data.newPassword,
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
      .put(url, param, headers)
      .then((res) => {
        history.push("/login");
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
              placeholder="New Password"
              type="password"
              id="newPassword"
            />
          </Div>
          <Div>
            <Input
              onChange={(e) => handelChange(e)}
              placeholder="Confirm New Password"
              type="password"
              id="confirmNewPassword"
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

export { ResetPassword };

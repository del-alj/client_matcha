import React, { useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

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

const ResetPassword = () => {
  let history = useHistory();
  let { token } = useParams();
  const url = `/reset/${token}`;
  const [data, setData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const param = {
    password:
      data.newPassword === data.confirmNewPassword ? data.newPassword : null,
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .put(url, param)
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
      <Block picture={forgot} color="yellow"></Block>
      <Block>
        <Form onSubmit={(e) => submit(e)}>
          <h1>Forgot password</h1>
          <Div>
            <Input
              onChange={(e) => handelChange(e)}
              placeholder="New Password"
              type="password"
              id="newPassword"
              {...validation["password"]}
            />
          </Div>
          <Div>
            <Input
              onChange={(e) => handelChange(e)}
              placeholder="Confirm New Password"
              type="password"
              id="confirmNewPassword"
              {...validation["password"]}
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

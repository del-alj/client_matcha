import React from "react";
import { Button } from "react-bootstrap";
import bootstrap from "bootstrap";

import { Content, Block } from "../../styles/Container.styles";

const Login = () => {
  return (
    <Content>
      <Block>{/* picture */}</Block>
      <Block>
        <h2>Log in</h2>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              User Name
            </label>
            <input type="userName" class="form-control" id="userName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <Button>Submit</Button>
        </form>
      </Block>
    </Content>
  );
};

export { Login };

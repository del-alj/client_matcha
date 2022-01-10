import React from "react";
import { Button } from "react-bootstrap";

import { Content, Block } from "../../styles/Container.styles";
export const Signup = () => {
  return (
    <Content>
      <Block>
        <h2>Sign up</h2>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              First Name
            </label>
            <input type="userName" class="form-control" id="firstName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Last Name
            </label>
            <input type="userName" class="form-control" id="lastName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              User Name
            </label>
            <input type="userName" class="form-control" id="userName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email
            </label>
            <input type="userName" class="form-control" id="email" />
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
          </div>
          <div class="d-grid col-6 mx-auto">
            <button type="button" class="btn btn-dark">
              Sign up
            </button>
          </div>
        </form>
      </Block>
      <Block>{/* picture */}</Block>
    </Content>
  );
};

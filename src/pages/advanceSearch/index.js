import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../layouts/signinLayout";
import { Flex, Button } from "../../Components/styles/Container.styles";
import { Cadre, Input } from "./style.js";
import { useHistory } from "react-router-dom";
import { authentication } from "../../Components/contexts/usecontext";

const url = `/Search`;

export const AdvanceSearch = () => {
  let history = useHistory();
  const { auth } = useContext(authentication);

  return (
    <Layout login={true}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <h5>Advance Search :</h5>
        {/* <Cadre>
          <h5>Age v</h5>
          <h5>Localization v</h5>
          <h5>Tags v</h5>
          <h5>Ranting v</h5>
        </Cadre> */}

        <Cadre>
          <Input placeholder="Age" type="number" />
          <Input placeholder="Localization" border={true} />
          <Input placeholder="Tags" border={true} />
          <Input placeholder="Ranting" border={true} />
        </Cadre>
        <Button>Search</Button>
      </Flex>
    </Layout>
  );
};

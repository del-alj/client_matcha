import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../layouts/signinLayout";
import { Flex, Button } from "../../Components/styles/Container.styles";
import { Cadre, Div, Input } from "./style.js";
import { useHistory } from "react-router-dom";
import { authentication } from "../../Components/contexts/usecontext";
import { AgeBar } from "./tools/ageBar";
import { LocalizationBar } from "./tools/localizationbar";
import { TagsBar } from "./tools/tagsbar";
import { RatingBar } from "./tools/ratingBar";

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

        <Cadre>
          {/* <AgeBar title="Age" /> */}
          <LocalizationBar title="Localization" />
          <RatingBar title="Rating" />
          <TagsBar title="Tags" />
          <Button>Search</Button>
        </Cadre>
      </Flex>
    </Layout>
  );
};

import React, { useContext, useEffect, useState } from "react";

import { Layout } from "../../layouts/signinLayout";
import { SliderPicture } from "../../Components/slider/style";
import { Content, Box, SliderPictureDiv, Card, CartTags } from "./style";
import { CartInfoDiv } from "./tools/cardInfo";
import { Tags } from "../../Components/tag";

import { UserContext } from "../../Components/contexts/usercontext";
import { authentication } from "../../Components/contexts/usecontext";

import { getUser } from "../editProfile/tools";
import { Buttons } from "./tools/buttons";
import venus from "../../assets/venus.jpg";

export const Dashboard = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const { auth } = useContext(authentication);

  const url = `/user/${auth.userId}`;

  useEffect(() => {
    getUser(url, setUserDetails);
  }, []);
  const tags = [
    { titel: "traveling", link: "#", tagId: 0 },
    { titel: "exercise", link: "#", tagId: 0 },
    { titel: "going to the theater", link: "#", tagId: 0 },
  ];
  return (
    <Layout login={true}>
      <Content>
        <Box>
          <SliderPictureDiv>
            <Card>
              <CartTags>
                <Tags tags={tags} />
              </CartTags>
              <CartInfoDiv
                name={"Diana"}
                age={"22"}
                city={"khouribga"}
                rating={"8"}
              />
              <SliderPicture src={venus}></SliderPicture>
            </Card>
            <Buttons />
          </SliderPictureDiv>
        </Box>
      </Content>
    </Layout>
  );
};

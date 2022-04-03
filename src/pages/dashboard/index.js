import React, { useContext, useEffect, useState } from "react";

import { Layout } from "../../layouts/signinLayout";
import { SliderPicture } from "../../Components/slider/style";
import { Content, Box, SliderPictureDiv, Card, CartTags } from "./style";
import { CartInfoDiv } from "./tools/cardInfo";
import { Tags } from "../../Components/tag";

import { UserContext } from "../../Components/contexts/usercontext";
import { authentication } from "../../Components/contexts/usecontext";
import { getListUsers } from "./tools/getusers";
import { getUser } from "../editProfile/tools";
import { Buttons } from "./tools/buttons";

export const Dashboard = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [usersList, setUsersList] = useState({});
  const [next, setNext] = useState(false);
  const [index, setIndex] = useState(-1);

  const { auth } = useContext(authentication);

  const url = `/user/${auth.userId}`;

  useEffect(() => {
    getUser(url, setUserDetails);
  }, []);

  useEffect(() => {
    getListUsers(auth.userId, setUsersList);
  }, [auth]);

  useEffect(() => {
    console.log("this is index", index);
    setIndex(index + 1);
  }, [next]);

  const tags = [
    { titel: "traveling", link: "#", tagId: 0 },
    { titel: "exercise", link: "#", tagId: 0 },
    { titel: "going to the theater", link: "#", tagId: 0 },
  ];
  console.log("tx", usersList);

  const user = usersList?.[index];
  return (
    <Layout login={true}>
      <Content>
        <Box>
          <SliderPictureDiv>
            <Card>
              <CartTags>
                <Tags tags={user?.tags} />
              </CartTags>
              <CartInfoDiv
                name={user?.user_name}
                age={user?.age}
                city={`${user?.distance?.toFixed(1)}Km`}
                rating={"8"}
              />
              <SliderPicture src={user?.image_path}></SliderPicture>
            </Card>
            <Buttons setNext={setNext} next={next} />
          </SliderPictureDiv>
        </Box>
      </Content>
    </Layout>
  );
};
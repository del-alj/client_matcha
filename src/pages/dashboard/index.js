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
import { Loading } from "../../Components/loading";
export const Dashboard = (props) => {
  const [userDetails, setUserDetails] = useContext(UserContext);
  const [usersList, setUsersList] = useState({});
  const [next, setNext] = useState(false);
  const [index, setIndex] = useState(-1);
  const [display, setDisplay] = useState(true);
  const [ids, setIds] = useState({});
  const { auth } = useContext(authentication);
  const [user, setUser] = useState(null);
  const url = `/user/${auth.userId}`;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUser(url, setUserDetails);
  }, []);

  useEffect(() => {
    getListUsers(auth.userId, setUsersList);
  }, [auth]);

  useEffect(() => {
    setUser(usersList?.[index]);
    setIndex(index + 1);
    if (index >= usersList?.length - 1) setDisplay(false);
  }, [next, usersList]);
  useEffect(() => {
    setIndex(index + 1);
    setIds({
      user_id: parseInt(auth?.userId),
      suggestion_user_id: user?.user_id,
    });
  }, [user]);

  useEffect(() => {
    if (usersList.length > 0 && user && display)
      setIsLoading(true)
  }, [usersList, user, display]);
  
  console.log(isLoading);
  return (
    <Layout login={true}>
      {isLoading ? (
        <Content>
          <Box>
            {display ? (
              <SliderPictureDiv>
                <Card>
                  <CartTags>
                    <Tags tags={user?.tags} />
                  </CartTags>
                  <CartInfoDiv
                    name={user?.user_name}
                    age={user?.age}
                    city={`${user?.distance?.toFixed(1)}Km`}
                    rating={user?.rating || 0}
                  />
                  <SliderPicture
                    src={`url(${user?.image_path})`}
                  ></SliderPicture>
                </Card>
                <Buttons setNext={setNext} next={next} ids={ids} />
              </SliderPictureDiv>
            ) : (
              <></>
            )}
          </Box>
        </Content>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

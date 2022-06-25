import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../layouts/signinLayout";
import { SecondSection } from "./secondSection";
import { ThirdSection } from "./thirdSection";
import { AddFirstPicture } from "./addFirstPicture";
import { Content } from "./style";
import { Button, Flex } from "../../Components/styles/Container.styles";

import { UserContext } from "../../Components/contexts/usercontext";
import { useHistory } from "react-router-dom";
import { authentication } from "../../Components/contexts/usecontext";
import { ImageContext } from "../../Components/contexts/imageContext";
import { Loading } from "../../Components/loading";
import { PhotoProfile } from "../userProfile/style";
import { TagsSection } from "./tagsSection";
import { getUser } from "../editProfile/tools";
import { tagsContext } from "../../Components/contexts/tagsContext";
import { addNewUserInfo } from "../../api/completnewUser";
import axiosInstance from "../../services/AxiosInstance";

const user_id = localStorage.getItem("userId");
const url = `/user/${user_id}`;
const urledit = `/user/edit/${user_id}`;
const urlAddUserInfo = `/user/addinfo/${user_id}`;

const addPicture = async (image, setPhotoId) => {
  const url = `/picture/upload/${user_id}`;
  await axiosInstance
    .post(url, image)
    .then((res) => {
      setPhotoId(res?.data?.image_id);
    })
    .catch((err) => {
      console.error(err);
    });
};
export const CreatProfile = (props) => {
  let history = useHistory();
  const { auth } = useContext(authentication);
  const [disable, setDisable] = useState(true);
  const [userdetails, setUserDetails] = useContext(UserContext);
  const [imageDetails, setImageDetails] = useContext(ImageContext);
  const [tagsDetails, setTagsDetails] = useContext(tagsContext);
  const [photoId, setPhotoId] = useState(null);
  const [imagePath, setImagePath] = useState("");
  const urlImages = `/picture/${auth?.userId}`;
  const [next, setNext] = useState(0);

  useEffect(() => {
    getUser(url, setUserDetails);
  }, [auth?.userId]);

  useEffect(() => {}, [next]);
  useEffect(() => {
    if (photoId) {
      console.log(photoId)
      const param = {
        photo_profile_id: photoId,
        user: userdetails,
        tags: tagsDetails
      };
      console.log(param);
       addNewUserInfo(urlAddUserInfo, param, history);
    }
  }, [photoId]);
  // const submit = (e) => {
  //   e.preventDefault();
  //   updateUser(urledit, userdetails);
  //   history.push("/profile");
  // };

  let formData = new FormData();
  if (imageDetails && imageDetails[0]) {
    formData?.append("image", imageDetails[0], imageDetails[0].name);
  }

  const addUserInfo = async () => {
    await addPicture(formData, setPhotoId);
  };

  const handelChange = (e) => {
    setDisable(false);
    const newData = { ...userdetails };
    newData[e.target.id] = e.target.value;
    setUserDetails(newData);
    console.log(newData);
  };

  return (
    <Layout login={true}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Content>
          <div
            style={{
              display: "block",
              justifyContent: "center",
              paddingBottom: "9rem"
            }}
          >
            <Content
              style={{
                display: "flex"
              }}
            >
              {next === 0 ? (
                <AddFirstPicture
                  setNext={setNext}
                  next={next}
                  setImagePath={setImagePath}
                />
              ) : next === 1 ? (
                <Flex>
                  <div style={{ padding: "0 2rem" }}>
                    <PhotoProfile
                      src={`url(${imagePath})`}
                      alt="Photo Profile"
                    ></PhotoProfile>
                  </div>
                  <SecondSection handelChange={handelChange} />
                  <ThirdSection handelChange={handelChange} />
                </Flex>
              ) : next === 2 ? (
                <TagsSection setNext={setNext} />
              ) : (
                <h1>
                  welcome, You are just a step away to activate your account,
                  click on submit{" "}
                </h1>
              )}
            </Content>
            {next == 1 ? (
              <Button
                disabled={disable}
                style={{ width: "15rem", margin: "auto" }}
                onClick={() => {
                  setNext(2);
                }}
              >
                Next
              </Button>
            ) : next == 3 ? (
              <Button
                disabled={disable}
                style={{ width: "15rem", margin: "auto" }}
                onClick={async () => {
                  // setDisable(true);
                  await addUserInfo();
                }}
              >
                Sumbit
              </Button>
            ) : (
              <></>
            )}
          </div>
        </Content>
      </Flex>
    </Layout>
  );
};

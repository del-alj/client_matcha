import React, { useEffect, useState } from "react";
import axiosInstance from "../../../services/AxiosInstance";

import { AddImageFile } from "./addImageFile";
import { Div, PicButton } from "../../../Components/pictures/style";

// On file select (from the pop up)

const user_id = localStorage.getItem("userId");

const urladd = `/picture/upload/${user_id}`;

export const PhotoProfile = (props) => {
  const { userdetails, setUserDetails } = props;

  const [files, setFiles] = useState([]);
  const [disable, setDisable] = useState(true);
  const url = `/user/edit/photoprofile/${userdetails?.userId}`;
  const uploadFile = async (url, param) => {
    // Create an object of formData
    let formData = new FormData();

    // Send formData object
    formData.append("image", files[0], files[0].name);
    await axiosInstance
      .post(url, formData)
      .then((res) => {
        setUserDetails({
          ...userdetails,
          photoProfileId: res?.data?.image_id,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateImgProfile = async (url, param) => {
    await axiosInstance.put(url, param).catch((err) => {
      console.error(err);
    });
    console.log("photo  profile updated !!");
    // history.push("/profile");
  };

  useEffect(() => {}, [userdetails]);
  return (
    <>
      <Div style={{ justifyContent: "center" }}>
        <AddImageFile
          files={files}
          setFiles={setFiles}
          setDisable={setDisable}
          style={{ width: "500px", justifyContent: "center" }}
        ></AddImageFile>
      </Div>
      <PicButton
        disabled={disable}
        onClick={async () => {
          await uploadFile(urladd, files);
          console.log(userdetails?.photoProfileId);
          // await updateImgProfile(url, userdetails?.photoProfileId);
        }}
      >
        Submit
      </PicButton>
    </>
  );
};

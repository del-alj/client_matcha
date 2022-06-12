import React, { useEffect, useState, useContext } from "react";
import axiosInstance from "../../../services/AxiosInstance";

import { AddImageFile } from "./addImageFile";
import { Div, PicButton } from "../../../Components/pictures/style";
import { authentication } from "../../../Components/contexts/usecontext";

// On file select (from the pop up)


export const PhotoProfile = (props) => {
  const { auth } = useContext(authentication);
  const url = `/picture/upload/${auth?.userId}`;
  const { userdetails, setUserDetails } = props;
  const [files, setFiles] = useState([]);
  const [disable, setDisable] = useState(true);

  useEffect(() => {}, [auth?.userId]);

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
      return res?.data?.image_id;
    })
    .catch((err) => {
      console.error(err);
    });
  };
  console.log(files);
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
          await uploadFile(url, files);
        }}
      >
        Submit
      </PicButton>
    </>
  );
};

import React, { useEffect, useState } from "react";
import axios from "axios";

import { AddNew } from "./addNew";
import { Div, Img, PicButton, Add, Text, Uploadpicture } from "./style";

// On file select (from the pop up)

export const Gallery = (props) => {
  const { pictures } = props;
  const updateImgProfile = () => {};

  return (
    <>
      <Div>
        {pictures.map((picture, index) => (
          <Img key={index} src={picture} />
        ))}
      </Div>
      <PicButton onClick={updateImgProfile}>Submit</PicButton>
    </>
  );
};

export const EditGallery = (props) => {
  const { pictures } = props;
  const status = pictures.length !== 0 ? false : true;

  const [files, setFiles] = useState([]);
  const [disable, setDisable] = useState(true);

  const uploadFile = (e) => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    [...files].map((file) => formData.append("Picture", file, file.name));

    // Request made to the backend api
    // Send formData object
    console.log(files);
    console.log(formData.getAll("Picture"));

    // axios.post("api/uploadfile", formData);
  };
  return (
    <>
      <Div status={status}>
        {pictures.map((picture, index) => (
          <Img key={index} src={picture} />
        ))}
        <AddNew
          files={files}
          setFiles={setFiles}
          setDisable={setDisable}
          style={{ border: "1px solid black", width: "500px" }}
        ></AddNew>
      </Div>
      <PicButton disabled={disable} onClick={uploadFile}>
        Submit
      </PicButton>
    </>
  );
};

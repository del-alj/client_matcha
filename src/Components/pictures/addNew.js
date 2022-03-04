import React, { useState } from "react";

import { Add } from "./style";

export const AddNew = (props) => {
  const [files, setFiles] = useState(null);

  // On file select (from the pop up)
  const onFileChange = (e) => {
    // Update the state
    setFiles(e.target.files);
  };

  const uploadFile = (e) => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    [...files].forEach((file) => formData.append("Picture", file, file.name));

    // Request made to the backend api
    // Send formData object
    console.log(files);
    console.log(formData.getAll("Picture"));

    // axios.post("api/uploadfile", formData);
  };

  return (
    <>
      {/* <img src={image} /> */}
      <input type="file" onChange={onFileChange} multiple />
      <Add onClick={uploadFile}>+</Add>
    </>
  );
};

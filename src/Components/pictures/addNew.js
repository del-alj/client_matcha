import React, { useEffect, useState } from "react";

import { Add, Text, Img, Uploadpicture } from "./style";
export const AddNew = ({ files, setFiles, setDisable }) => {
  const [imagesURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (files?.length < 1) return;
    const newImagesUrls = [];

    if (files?.length > 0) {
      console.log();
      [...files].forEach((file) =>
        newImagesUrls.push(URL.createObjectURL(file))
      );
    }
    setImageURLs(newImagesUrls);
  }, [files]);

  // On file select (from the pop up)
  const onFileChange = (e) => {
    // Update the state
    setFiles(e.target.files);
    setDisable(false);
  };

  return (
    <>
      {imagesURLs?.map((imageSrc, index) => (
        <Img key={index} src={imageSrc} />
      ))}
      <Add>
        <Uploadpicture type="file" onChange={onFileChange} multiple />
        <Text>+</Text>
      </Add>
    </>
  );
};

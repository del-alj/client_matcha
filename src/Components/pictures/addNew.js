import React, { useEffect, useState } from "react";

import {
  Add,
  Text,
  Img,
  Uploadpicture,
  DeleteButton,
  DeleteIcon,
} from "./style";
import del from "../../assets/icons/del.png";

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
        <div
          style={{
            width: "33.33%",
            position: "relative",
          }}
        >
          <Img key={index} src={imageSrc} />
          <DeleteButton
            onClick={() => {
              // need work on it after stor picture with god way
              // deleteImg(urldelete, picture?.image_id, config);
              // setImageURLs( [...imagesURLs].filter(
              //   (imagesURL) => imagesURL !==
              // ));
            }}
          >
            <DeleteIcon src={del} alt="" />
          </DeleteButton>
        </div>
      ))}

      <Add>
        <Uploadpicture type="file" onChange={onFileChange} multiple />
        <Text>+</Text>
      </Add>
    </>
  );
};

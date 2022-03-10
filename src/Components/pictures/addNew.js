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
    console.log("this is file :", e.target);
    setFiles(e.target.files);
    setDisable(false);
  };

  return (
    <>
      {imagesURLs?.map((imageSrc, index) => (
        <div
          key={`div${index}`}
          style={{
            width: "33.33%",
            position: "relative",
          }}
        >
          <Img key={`img${index}`} src={imageSrc} />
          <DeleteButton
            key={`but${index}`}
            onClick={() => {
              // need work on it after stor picture with god way
              // deleteImg(urldelete, picture?.image_id, config);
              // setImageURLs( [...imagesURLs].filter(
              //   (imagesURL) => imagesURL !==
              // ));
            }}
          >
            <DeleteIcon key={`delIco${index}`} src={del} alt="" />
          </DeleteButton>
        </div>
      ))}

      <Add>
        <Uploadpicture type="file" onChange={onFileChange} />
        {/* <Uploadpicture type="file" onChange={onFileChange} multiple /> */}
        <Text>+</Text>
      </Add>
    </>
  );
};

import React, { useEffect, useState } from "react";

import {
  AddPhoto,
  Text,
  Uploadpicture,
} from "../../../Components/pictures/style";
import { PhotoProfile } from "../../userProfile/style";

export const AddImageFile = ({ files, setFiles, setDisable, setImagePath }) => {
  const [imagesURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (files?.length < 1) return;
    const newImagesUrls = [];

    if (files?.length > 0) {
      [...files].forEach((file) =>
        newImagesUrls.push(URL.createObjectURL(file))
      );
    }
    setImageURLs(newImagesUrls);
    setImagePath(newImagesUrls[0]);
  }, [files]);

  // On file select (from the pop up)
  const onFileChange = (e) => {
    // Update the state
    setFiles(e.target.files);
    setDisable(false);
  };

  return (
    <div>
      {imagesURLs[0] ? (
        <PhotoProfile src={`url(${imagesURLs[0]})`} alt="Photo Profile" />
      ) : (
        <AddPhoto>
          <Uploadpicture type="file" onChange={onFileChange} />
          <Text>+</Text>
        </AddPhoto>
      )}
    </div>
  );
};

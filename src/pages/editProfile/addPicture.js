import React, { useState, useContext } from "react";

import { Box, Tabs, Title, PicButton, Blurry } from "./style";
import { Gallery, EditGallery } from "../../Components/pictures/gallery.js";
import { ImageContext } from "../../Components/contexts/imageContext";

export const AddPicture = (props) => {
  const [imageDetails] = useContext(ImageContext);

  const [addStatus, setAddStatus] = useState(true);
  const [changeStatus, setChangeStatus] = useState(false);

  const handelClick = (e) => {
    setAddStatus();
    setChangeStatus();
  };
  return (
    <Box>
      <Tabs>
        <Title
          onClick={() => {
            setAddStatus(true);
            setChangeStatus(false);
          }}
          status={addStatus}
        >
          Add Pictures
        </Title>
        <Title
          onClick={() => {
            setChangeStatus(true);
            setAddStatus(false);
          }}
          status={changeStatus}
        >
          change Pictures
        </Title>
      </Tabs>
      {/* <Blurry /> */}
      {addStatus ? (
        <EditGallery pictures={imageDetails}></EditGallery>
      ) : (
        <Gallery pictures={imageDetails}></Gallery>
      )}
    </Box>
  );
};

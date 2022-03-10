import React, { useState, useContext } from "react";

import { Box, Tabs, Title, PicButton, Blurry } from "./style";
import { Gallery, EditGallery } from "../../Components/pictures/gallery.js";
import { ImageContext } from "../../Components/contexts/imageContext";
import { UserContext } from "../../Components/contexts/usercontext";

export const AddPicture = (props) => {
  const [imageDetails] = useContext(ImageContext);
  const [userdetails, setUserDetails] = useContext(UserContext);

  const [addStatus, setAddStatus] = useState(true);
  const [changeStatus, setChangeStatus] = useState(false);
  // console.log("from ", userdetails);
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
          change Profile Picture
        </Title>
      </Tabs>
      {/* <Blurry /> */}
      {addStatus ? (
        <EditGallery
          pictures={imageDetails}
          photoProfileId={userdetails?.photoProfileId}
        ></EditGallery>
      ) : (
        <Gallery
          pictures={imageDetails}
          photoProfileId={userdetails?.photoProfileId}
        ></Gallery>
      )}
    </Box>
  );
};

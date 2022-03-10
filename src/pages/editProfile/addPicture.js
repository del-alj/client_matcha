import React, { useState, useContext, useEffect } from "react";

import { Box, Tabs, Title, PicButton, Blurry, ExitButton } from "./style";
import { Gallery, EditGallery } from "../../Components/pictures/gallery.js";
import { ImageContext } from "../../Components/contexts/imageContext";
import { UserContext } from "../../Components/contexts/usercontext";

export const AddPicture = (props) => {
  const [imageDetails] = useContext(ImageContext);
  const [userdetails, setUserDetails] = useContext(UserContext);

  const [addStatus, setAddStatus] = useState(true);
  const [changeStatus, setChangeStatus] = useState(false);

  const { display, setDisplay } = props;
  // console.log("from ", userdetails);
  const handelClick = (e) => {
    setAddStatus();
    setChangeStatus();
  };
  useEffect(() => {
    console.log("add picture file");
  }, [display]);
  return (
    <Box>
      <ExitButton
        type="radio"
        name="myRadios"
        onClick={(e) => {
          console.log("radio", e);
          setDisplay(false);
        }}
      >
        x
      </ExitButton>
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

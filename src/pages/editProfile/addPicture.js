import React, { useState } from "react";

import { Box, Tabs, Title, PicButton, Blurry } from "./style";
import { Gallery, EditGallery } from "../../Components/pictures/gallery.js";

export const AddPicture = (props) => {
  const { pictures } = props;
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
        <EditGallery pictures={pictures}></EditGallery>
      ) : (
        <Gallery pictures={pictures}></Gallery>
      )}

      <PicButton>Submit</PicButton>
    </Box>
  );
};

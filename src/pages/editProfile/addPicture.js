import React, { useEffect, useState } from "react";

import { Box, Tabs, Title, PicButton, Blurry } from "./style";
import { Flex } from "../../Components/styles/Container.styles";
import { Gallery, EditGallery } from "../../Components/pictures/gallery.js";

import forgot from "../../assets/forgot.jpg";
import home from "../../assets/home.png";
import mars from "../../assets/mars.jpg";
import venus from "../../assets/venus.jpg";

export const AddPicture = (props) => {
  //   useEffect(() => {
  //     console.log("tetst");
  //   }, [addStatus, changeStatus]);

  const data = [forgot, home, home, mars, venus];

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
        <EditGallery pictures={data}></EditGallery>
      ) : (
        <Gallery pictures={data}></Gallery>
      )}

      <PicButton>Submit</PicButton>
    </Box>
  );
};

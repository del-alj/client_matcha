import React, { useState, useContext } from "react";

import { Box, Tabs, Title } from "./style";

import { AddImageFile } from "./tools/addImageFile";
import { Div, PicButton } from "../../Components/pictures/style";
import { ImageContext } from "../../Components/contexts/imageContext";

export const AddFirstPicture = (props) => {
  const { next, setNext, setImagePath } = props;
  const [files, setFiles] = useState([]);
  const [disable, setDisable] = useState(true);
  const [imageDetails, setImageDetails] = useContext(ImageContext);

  return (
    <Box>
      <Tabs>
        <Title>Add Profile Picture</Title>
      </Tabs>
      <>
        <Div style={{ justifyContent: "center" }}>
          <AddImageFile
            setImagePath={setImagePath}
            files={files}
            setFiles={setFiles}
            setDisable={setDisable}
            style={{ width: "500px", justifyContent: "center" }}
            ></AddImageFile>
        </Div>
        <PicButton
          disabled={disable}
          onClick={() => {
            setImageDetails(files);
            setNext(next + 1);
          }}
        >
          Next
        </PicButton>
      </>
    </Box>
  );
};

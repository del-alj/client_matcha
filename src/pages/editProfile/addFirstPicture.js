import React, { useState, useContext, useEffect } from "react";

import { Box, Tabs, Title } from "./style";
import { UserContext } from "../../Components/contexts/usercontext";
import { PhotoProfile } from "./tools/photoProfile";
export const AddFirstPicture = (props) => {
  const [userdetails, setUserDetails] = useContext(UserContext);
  const [changeStatus, setChangeStatus] = useState(false);

  const { setDisplay } = props;

  useEffect(() => {
    userdetails?.photoProfileId && setDisplay(false);
  }, [userdetails]);

  return (
    <Box>
      <Tabs>
        <Title>Add Profile Picture</Title>
      </Tabs>
      <PhotoProfile
        userdetails={userdetails}
        setUserDetails={setUserDetails}
      ></PhotoProfile>
    </Box>
  );
};

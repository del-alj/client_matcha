import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../../../Components/styles/Container.styles";
import { Flex, H1, H4, P, MoreInfo } from "../style";
import { UserContext } from "../../../Components/contexts/usercontext";

// console.log(data);
// const token = localStorage.getItem("Token");
// console.log(token);

export const DefinitionSection = ({ visibility }) => {
  const [userdetails] = useContext(UserContext);
  let history = useHistory();

  const handleClick = () => {
    history.push("/profile/edit");
  };

  return (
    <Flex direction="column" alignItems="flex-start" paddingTop="5rem">
      <H1>{userdetails?.userName}</H1>
      <H4>
        {userdetails?.firstName} {userdetails?.lastName}
      </H4>
      <P>{userdetails?.bio}</P>
      {visibility ? (
        <Button onClick={handleClick}>Edit Profile</Button>
      ) : (
        <MoreInfo personaleInfo={userdetails} />
      )}
    </Flex>
  );
};;

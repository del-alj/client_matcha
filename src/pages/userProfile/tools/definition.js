import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../../../Components/styles/Container.styles";
import { Flex, H1, H4, P, MoreInfo } from "../style";

export const DefinitionSection = (props) => {
  let history = useHistory();
  const { visibility, personaleInfo } = props;

  const handleClick = () => {
    history.push("/editProfile");
  };

  return (
    <Flex direction="column" alignItems="flex-start" paddingTop="5rem">
      <H1>{personaleInfo?.userName}</H1>
      <H4>
        {personaleInfo?.firstName} {personaleInfo?.lastName}
      </H4>
      <P>{personaleInfo?.bio}</P>
      {visibility ? (
        <Button onClick={handleClick}>Edit Profile</Button>
      ) : (
        <MoreInfo personaleInfo={personaleInfo} />
      )}
    </Flex>
  );
};

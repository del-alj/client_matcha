import React from "react";

// import useLocalStorage from '../../hooks/useLocaleStorage';
import { Flex, H1, H4, P, MoreInfo } from "../style";
import { Button } from "../../../Components/styles/Container.styles";
import { useHistory } from "react-router-dom";

export const DefinitionSection = (props) => {
  const { visibility } = props;
  const data = props.data;
  let history = useHistory();

  const handleClick = () => {
    history.push("/editProfile");
  };

  return (
    <Flex direction="column" alignItems="flex-start" paddingTop="5rem">
      <H1>{data?.userName}</H1>
      <H4>
        {data?.firstName} {data?.lastName}
      </H4>
      <P>{data?.bio}</P>
      {visibility ? (
        <Button onClick={handleClick}>Edit Profile</Button>
      ) : (
        <MoreInfo info={props.data} />
      )}
    </Flex>
  );
};

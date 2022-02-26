import React from "react";

import { EditTags } from "../../Components/tag";
import { Flex } from "../../Components/styles/Container.styles";
import { PhotoProfile } from "../userProfile/style";
import { AddPicture } from "./addPicture";
import venus from "../../assets/venus.jpg";
import { useHistory } from "react-router-dom";

export const FirstSection = (props) => {
  // const [name, setName] = useLocalStorage("name", () => "");
  const { status, tags } = props;

  const editPicture = () => {
    return <AddPicture />;
  };

  let history = useHistory();

  const handleClick = () => {
    // setChangepicture()
    history.push("/addPicture");
  };

  return (
    <Flex justifyContent="center" style={{ padding: "0 2rem" }}>
      <Flex direction="row">
        <Flex direction="column">
          <div>
            <PhotoProfile src={venus} alt="Photo Profile"></PhotoProfile>
          </div>
          <a
            href="#"
            style={{
              fontSize: "1.1rem",
              color: "#535353",
              textDecoration: "none",
            }}
            onClick={handleClick}
          >
            Change Profile Photo
          </a>
          <EditTags tags={tags} />
        </Flex>
      </Flex>
      <AddPicture />
    </Flex>
  );
};

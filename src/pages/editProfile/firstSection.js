import React from "react";

// import useLocalStorage from '../../hooks/useLocaleStorage';
// import { Tags } from "../../Components/tag/style";
import { Tags } from "../../Components/tag";
import { Flex } from "../../Components/styles/Container.styles";
import { PhotoProfile } from "../userProfile/style";

import { Visibility } from "../../Components/visibility";
import venus from "../../assets/venus.jpg";

const data = {
  userName: "Diana",
  firstName: "Ama",
  lastName: "Diana",
  bio: "This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand.",
  gender: "woman",
  preferences: "Man",
  age: "24",
};

export const FirstSection = (props) => {
  // const [name, setName] = useLocalStorage("name", () => "");
  const { status, tags } = props;

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
          >
            Change Profile Photo
          </a>
          <Tags tags={tags} />
        </Flex>
      </Flex>
    </Flex>
  );
};

import React from "react";

// import useLocalStorage from '../../hooks/useLocaleStorage';
import { Tag, Tags } from "../../Components/tag/style";
import { Flex, PhotoProfile } from "./style";
import { DefinitionSection } from "./tools/definition";
import { MiniSection } from "./tools/miniSection";
import { Visibility } from "../../Components/visibility";
import venus from "../../assets/venus.jpg";

const data = {
  userName: "Diana",
  firstName: "Ama",
  lastName: "Diana",
  bio: "This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand.",
};

export const FirstSection = () => {
  // const [name, setName] = useLocalStorage("name", () => "");
  return (
    <Flex height="500px" direction="row" justifyContent="center">
      <Flex direction="row">
        <Flex direction="column">
          <div>
            <PhotoProfile src={venus} alt="Photo Profile"></PhotoProfile>
            <Visibility status="online" />
          </div>
          {/* tags */}
          <Tags>
            <Tag link={"#"} titel="piercing" />
            <Tag link={"#"} titel="geek" />
            <Tag link={"#"} titel="vegan" />
          </Tags>
        </Flex>
        <DefinitionSection data={data} />
      </Flex>
      <MiniSection />
    </Flex>
  );
};

import React from "react";
import ReactLoading from "react-loading";
import { Section, Article, Prop } from "./style";

const list = {
    prop: "bars",
    name: "Loading . . .",
  };

export const Loading = (props) => (
  <Section height={props?.height}>
    <Article key={list}>
      <ReactLoading type={list.prop} color="#000" />
      <Prop>{list.name}</Prop>
    </Article>
  </Section>
);


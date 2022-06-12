import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../layouts/signinLayout";
import { Flex, Button } from "../../Components/styles/Container.styles";
import { Cadre } from "./style.js";
import { authentication } from "../../Components/contexts/usecontext";
import { AgeBar } from "./tools/ageBar";
import { LocalizationBar } from "./tools/localizationbar";
import { TagsBar } from "./tools/tagsbar";
import { RatingBar } from "./tools/ratingBar";
import { DisplayUsers } from "./tools/displayUsers";
import axiosInstance from "../../services/AxiosInstance";
import { Loading } from "../../Components/loading";

export const AdvanceSearch = () => {
  const { auth } = useContext(authentication);
  const url = `/search/${auth?.userId}`;
  const [users, setusers] = useState(false);
  const [data, setData] = useState({
    age: { min: 18, max: 60 },
    localization: "",
    rating: false,
    tags: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const param = {
    age: { min: data?.age?.min || 18, max: data?.age?.max || 60 },
    localization: data?.localization,
    rating: data?.rating,
    tags: data?.tags,
  };

  const submit = (e) => {
    setIsLoading(false);
    e.preventDefault();
    axiosInstance
      .put(url, param)
      .then((res) => {
        setusers(res?.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  useEffect(() => {}, [users]);
  return (
    <Layout login={true}>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <h5>Advance Search :</h5>

          {!users ? (
            <Cadre onSubmit={(e) => submit(e)}>
              <AgeBar data={data} setData={setData} title="Age" />
              <LocalizationBar
                handelChange={handelChange}
                title="Localization"
                name="localization"
              />
              <RatingBar
                data={data}
                setData={setData}
                name="rating"
                title="Rating"
              />

              <TagsBar data={data} setData={setData} title="Tags" />
              <Button type="submit" disabled={!isLoading}>Search</Button>
              {!isLoading && <Loading/>}
            </Cadre>
          ) : ( <DisplayUsers users={users}></DisplayUsers>)}
        </Flex>
    </Layout>
  );
};

import axiosInstance from "../../services/AxiosInstance";

/* get all tags */

export const getAllTags = async (url, setTags) => {
  const data = await axiosInstance.get(url).catch((err) => {
    console.error(err);
  });
  const tags = data.data;
  const temp = tags.map((tag, index) => {
    return { titel: tag.tag_name, link: "#", tagId: tag.tag_id };
  });
  setTags(temp);
};

/* get user tags */

export const getUserTags = async (url, setUserTags) => {
  const data = await axiosInstance.get(url).catch((err) => {
    console.error(err);
  });
  const tags = data.data;
  const temp = tags.map((tag, index) => {
    return { titel: tag.tag_name, link: "#", tagId: 0 };
  });
  setUserTags(temp);
};

/* get user */

export const getUser = async (url, setUserDetails) => {
  await axiosInstance
    .get(url)
    .then((res) => {
      setUserDetails({
        userName: res.data?.user_name,
        firstName: res.data?.first_name,
        lastName: res.data?.last_name,
        email: res.data?.email,
        bio: res.data?.bio,
        age: res.data?.age,
        gender: res.data?.gender,
        preference: res.data?.preference,
        photoProfileId: res.data?.photo_profile_id,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

/* get user images */

export const getUserImages = async (url, setImageDetails) => {
  await axiosInstance
    .get(url)
    .then((res) => {
      setImageDetails(res?.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

/* update user tags */

export const updateTags = async (url, tagsDetails) => {
  const data = await axiosInstance.post(url, tagsDetails).catch((err) => {
    console.error(err);
  });
  console.log("test", data);
};

/* update user */

export const updateUser = async (url, param, setUserDetails, history) => {
  console.info("param", param);

  await axiosInstance
    .put(url, param)
    .then((res) => {
      console.log("this is data ", res.data);
      setUserDetails({
        userName: res.data?.user_name,
        firstName: res.data?.first_name,
        lastName: res.data?.last_name,
        email: res.data?.email,
        bio: res.data?.bio,
        age: res.data?.age,
        gender: res.data?.gender,
        preference: res.data?.preference,
        photoProfileId: res.data?.photo_profile_id,
      });
      history.push("/profile");
    })
    .catch((err) => {
      console.error(err);
    });

};



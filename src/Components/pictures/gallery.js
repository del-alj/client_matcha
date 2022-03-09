import React, { useEffect, useContext, useState } from "react";
import axiosInstance from "../../services/AxiosInstance";
import { useHistory } from "react-router-dom";

import { AddNew } from "./addNew";
import { Div, Img, PicButton, DeleteButton, DeleteIcon } from "./style";

import del from "../../assets/icons/del.png";

import { ImageContext } from "../../Components/contexts/imageContext";

// On file select (from the pop up)

const user_id = localStorage.getItem("userId");

const url = `/user/edit/photoprofile/${user_id}`;
const urldelete = `/picture/${user_id}`;

export const Gallery = (props) => {
  let history = useHistory();
  const [profilePicture, setprofilePicture] = useState();
  const [disable, setDisable] = useState(true);

  const { pictures } = props;

  const updateImgProfile = async (url, param) => {
    await axiosInstance
      .put(url, param)
      .then((res) => {
        console.log("photo  profile updated !!");
        history.push("/profile");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const updateImgselect = (e) => {
    setprofilePicture({ photoProfileId: e.target.selected });
    setDisable(false);
  };

  return (
    <>
      <Div>
        {pictures.map((picture, index) => (
          <div
            style={{
              width: "33.33%",
            }}
          >
            <Img
              key={index}
              src={picture?.image_path}
              selected={picture?.image_id}
              onClick={updateImgselect}
              // classname={`photo_${index}`}
              // focus={profilePicture}
            />
          </div>
        ))}
      </Div>
      <PicButton
        disabled={disable}
        onClick={() => {
          updateImgProfile(url, profilePicture);
        }}
      >
        Submit
      </PicButton>
    </>
  );
};

export const EditGallery = (props) => {
  const { pictures } = props;
  const status = pictures.length !== 0 ? false : true;

  const [imageDetails, setImageDetails] = useContext(ImageContext);

  const [files, setFiles] = useState([]);
  const [disable, setDisable] = useState(true);
  const [display, setDisplay] = useState(true);
  const uploadFile = (e) => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    [...files].map((file) => formData.append("Picture", file, file.name));

    // Request made to the backend api
    // Send formData object
    console.log(files);
    console.log(formData.getAll("Picture"));
  };

  const deleteImg = async (url, param) => {
    await axiosInstance
      .delete(`${url}/${param}`)
      .then((res) => {
        console.log("delete photo!!");
        setImageDetails(
          [...imageDetails].filter(
            (imageDetail) => imageDetail?.image_id !== param
          )
        );

        //khesni ndire update n context image
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    console.log("imageDetails", imageDetails);
    pictures?.length < 5 ? setDisplay(true) : setDisplay(false);
    console.log("tets", display);
  }, [imageDetails]);

  return (
    <>
      <Div status={status}>
        {pictures.map((picture, index) => (
          <div
            style={{
              width: "33.33%",
              position: "relative",
            }}
          >
            <Img key={index} src={picture?.image_path} />
            <DeleteButton
              onClick={() => {
                deleteImg(urldelete, picture?.image_id);
              }}
            >
              <DeleteIcon src={del} alt="" />
            </DeleteButton>
          </div>
        ))}
        {display ? (
          <AddNew
            files={files}
            setFiles={setFiles}
            setDisable={setDisable}
            style={{ width: "500px" }}
          ></AddNew>
        ) : (
          <></>
        )}
      </Div>
      <PicButton disabled={disable} onClick={uploadFile}>
        Submit
      </PicButton>
    </>
  );
};

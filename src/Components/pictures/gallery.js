import React, { useEffect, useContext, useState } from "react";
import axiosInstance from "../../services/AxiosInstance";
import { useHistory } from "react-router-dom";

import { AddNew } from "./addNew";
import { Div, Img, PicButton, DeleteButton, DeleteIcon } from "./style";

import del from "../../assets/icons/del.png";

import { ImageContext } from "../../Components/contexts/imageContext";
import { Loading } from "../../Components/loading";

// On file select (from the pop up)

const user_id = localStorage.getItem("userId");
const env = `${process.env.REACT_APP__ENV}`;
const url = `http://${env}/user/edit/photoprofile/${user_id}`;
const urldelete = `/picture/${user_id}`;
const urladd = `/picture/upload/${user_id}`;

export const Gallery = (props) => {
  let history = useHistory();
  const [profilePicture, setprofilePicture] = useState();
  const [disable, setDisable] = useState(true);
  const [border, setBorder] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { pictures } = props;

  const updateImgProfile = async (url, param) => {
    setIsLoading(true);
    await axiosInstance.put(url, param).catch((err) => {
      console.error(err);
    });
    console.log("photo  profile updated !!");
    history.push("/profile");
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
            key={`div${index}`}
            style={{
              width: "33.33%",
            }}
          >
            <Img
              status={border === index ?? true}
              key={`img${index}`}
              src={picture?.image_path}
              selected={picture?.image_id}
              onClick={(e) => {
                updateImgselect(e);
                setBorder(index);
              }}
            />
          </div>
        ))}
      </Div>
      <PicButton
        disabled={disable}
        onClick={(e) => {
          setDisable(true);
          updateImgProfile(url, profilePicture);
        }}
      >
        Submit
      </PicButton>
      {isLoading && <Loading height="100px !important" />}
    </>
  );
};

export const EditGallery = (props) => {
  const { pictures } = props;
  let history = useHistory();

  const status = pictures.length !== 0 ? false : true;

  const [imageDetails, setImageDetails] = useContext(ImageContext);

  const [files, setFiles] = useState([]);
  const [disable, setDisable] = useState(true);
  const [display, setDisplay] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const uploadFile = async (url, param) => {
    setIsLoading(true);
    // Create an object of formData
    let formData = new FormData();

    // Update the formData object
    // [...files].map((file) => formData.append("Picture", file, file.name));

    // Request made to the backend api
    // Send formData object
    formData.append("image", files[0], files[0].name);

    await axiosInstance
      .post(url, formData)
      .then((res) => {
        console.log("photo  added !!");
        history.push("/profile");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteImg = async (url, param) => {
    await axiosInstance
      .delete(`${url}/${param.image_id}/${param.image_name}`)
      .then((res) => {
        console.log("delete photo!!");
        setImageDetails(
          [...imageDetails].filter(
            (imageDetail) => imageDetail?.image_id !== param.image_id
          )
        );

        //khesni ndire update n context image
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    pictures?.length < 5 ? setDisplay(true) : setDisplay(false);
  }, [imageDetails]);

  return (
    <>
      <Div status={status}>
        {pictures.map((picture, index) => (
          <div
            key={`div${index}`}
            style={{
              width: "33.33%",
              position: "relative",
            }}
          >
            <Img key={index} src={picture?.image_path} />
            <DeleteButton
              key={`but${index}`}
              onClick={() => {
                const param = {
                  image_id: picture?.image_id,
                  image_name: picture?.image_path?.split("/")[7]?.split(".")[0],
                };
                deleteImg(urldelete, param);
              }}
            >
              <DeleteIcon key={`delIco${index}`} src={del} alt="" />
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
      <PicButton
        disabled={disable}
        onClick={() => {
          setDisable(true);
          uploadFile(urladd, files);
        }}
      >
        Submit
      </PicButton>
      {isLoading && <Loading height="100px !important" />}
    </>
  );
};

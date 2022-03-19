import React, { useState, useEffect, useContext } from "react";

import { Local } from "./style";
import { Icon } from "../icon";
import gps from "../../assets/icons/gps.png";
import axios from "axios";
import axiosInstance from "../../services/AxiosInstance";
import { autontication } from "../contexts/usecontext";
import { Select } from "./style";
const access_key = "55620d1f15bcca05c276bb2a59c3e768";

const local = "khouribga, Morocco";
// const getContry = async (setContry) => {
//   const allContry = await axios.get(
//     "https://countriesnow.space/api/v0.1/countries/iso"
//   );
//   console.log(allContry.data.data);
//   setContry(allContry);
// };

const getGeoLocal = async (setGeolocal) => {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    console.log(crd.latitude, crd.longitude);
    setGeolocal({
      latitude: crd.latitude,
      longitude: crd.longitude,
      authorized: true,
    });
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  if (navigator.geolocation) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state === "granted") {
          console.log(result.state);
          navigator.geolocation.getCurrentPosition(success);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, error, options);
        } else if (result.state === "denied") {
          axios
            .get(
              `http://api.ipstack.com/62.251.161.88?access_key=${access_key}`
            )
            .then((res) => {
              console.log(res.data.latitude, res.data.longitude);
              setGeolocal({
                latitude: res.data.latitude,
                longitude: res.data.longitude,
                authorized: false,
              });
            });
        }
        result.onchange = function () {
          console.log(result.state);
        };
      });
  } else {
    alert("Sorry Not available!");
  }
};

const addGeolocal = async (url, param) => {
  await axiosInstance.post(url, param).catch((err) => {
    console.error(err);
  });
};

const getuserGeoLocal = async (url, setGeolocal) => {
  await axiosInstance
    .get(url)
    .then((res) => {
      setGeolocal(res.data[0]);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const Localisation = (props) => {
  const [status, setStatus] = useState(false);
  const element = props.list;
  const { onChange } = props;
  const [contrys, setContrys] = useState();
  const [geolocal, setGeolocal] = useState(null);
  const { auth } = useContext(autontication);

  const url = `/localization/${auth.userId}`;

  useEffect(() => {
    getuserGeoLocal(url, setGeolocal);
  });
  //khesni l9a tari9a n bedel bayn tems dyal add localisation
  // useEffect(() => {
  //   setStatus(!status)
  // });

  return (
    <>
      <Local>
        <Icon img={gps} alt="localisation" />
        {status ? (
          <h3 style={{ margin: "0px" }}>{local}</h3>
        ) : (
          <>
            <a
              href="#"
              onClick={(e) => {
                getGeoLocal(setGeolocal);
                addGeolocal(url, geolocal);
              }}
            >
              add Localisation
            </a>
            {/* <input /> */}
            {/* <Select
              name="country"
              title="country"
              list={contrys}
              // onChange={handelChange}
              // value={locadetails?.country}
            />
            <Select
              name="city"
              title="city"
              // list={citys}
              // onChange={handelChange}
              // value={locadetails?.city}
            /> */}
          </>
        )}
      </Local>
    </>
  );
};

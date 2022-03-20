import React, { useState, useEffect, useContext } from "react";

import { Local } from "./style";
import { Icon } from "../icon";
import gps from "../../assets/icons/gps.png";
import { authentication } from "../contexts/usecontext";
import { handelLocation, findCoord } from "./tools";
import { Select } from "./style";
import { InputFull } from "../input/inputFull";
import { validation } from "../../assets/validationSchema/localization";

const local = "khouribga, Morocco";

export const Localisation = (props) => {
  const [geolocal, setGeolocal] = useState(null);
  const { auth } = useContext(authentication);
  const [city, setCity] = useState(null);
  const url = `/localization/${auth.userId}`;
  const [status, setStatus] = useState(false);

  const [disable, setDisable] = useState(true);

  const getNewCoord = async (city) => {
    const data = await findCoord(city);
    setGeolocal(data.data);
  };

  useEffect(() => {
    const getCoord = async () => {
      const data = await handelLocation(url);
      setGeolocal(data);
      setStatus(true);
    };
    getCoord();
  }, []);

  useEffect(() => {
    // const getNewCoord = async (city) => {
    //   const data = await findCoord(city);
    //   setGeolocal(data.data);
    // };
    // if (city) getNewCoord(city);
  }, [city]);

  const handelChange = (e) => {
    setDisable(false);
    const newData = { ...city };
    newData[e.target.id] = e.target.value;
    console.log(newData);
    setCity(newData);
  };

  console.log("coord ", geolocal);

  //faba maradixi nhtaj xi tari9a nbedel binatom khesni ran nxof xdin radi ndir wax input awla select
  //khesni n 9ad daba ui
  return (
    <>
      <Local>
        {!status ? (
          <>
            <Icon img={gps} alt="localisation" />
            <h3 style={{ margin: "0px" }}>{local}</h3>
          </>
        ) : (
          <div style={{ width: "100%" }}>
            <InputFull
              onChange={handelChange}
              placeholder="ex: khouribga"
              name="addLocalisation"
              label="Localisation"
              text={city}
              {...validation["city"]}
            />
            <button
              disabled={disable}
              style={{ width: "100%", margin: "auto" }}
              onClick={() => {
                console.log("here button edit localisation", city);
                if (city) getNewCoord(city);
              }}
            >
              Edit
            </button>
          </div>
        )}
      </Local>
    </>
  );
};

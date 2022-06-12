import React, { useState, useEffect, useContext } from "react";

import { Local, LocalButton } from "./style";
import { Icon } from "../icon";
import gps from "../../assets/icons/gps.png";
import { authentication } from "../contexts/usecontext";
import {
  handelLocation,
  getNewCoord,
  VAlidationCity,
  updateGeolocal,
} from "./tools";
import { InputFull } from "../input/inputFull";

const local = "Add you Localization";

export const Localisation = (props) => {
  const [geolocal, setGeolocal] = useState(null);
  const [newGeolocal, setNewGeolocal] = useState(null);

  const { auth } = useContext(authentication);
  const [city, setCity] = useState(null);
  const url = `/localization/${auth.userId}`;
  const [status, setStatus] = useState(false);

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const getCoord = async () => {
      const data = await handelLocation(url);
      setGeolocal(data);
      setStatus(true);
    };
    getCoord();
  }, []);

  useEffect(() => {
    const addNewCoord = async () => {
      const data = await updateGeolocal(url, newGeolocal);
      return data.status === 200 ? geolocal : null;
    };
    if (newGeolocal) addNewCoord();
  }, [newGeolocal]);

  const handelChange = (e) => {
    setDisable(false);
    const newData = { ...city };
    newData[e.target.id] = e.target.value;
    setCity(newData.addLocalisation);
  };

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
              placeholder="Name Of City"
              name="addLocalisation"
              label="Localisation"
              text={city}
            />
            <LocalButton
              disabled={disable}
              style={{ width: "100%", margin: "auto" }}
              onClick={async (e) => {
                setDisable(true);
                if (VAlidationCity(city) === true) {
                  const coordinates = await getNewCoord(city);
                  setNewGeolocal(coordinates);
                }
              }}
            >
              Edit
            </LocalButton>
          </div>
        )}
      </Local>
    </>
  );
};

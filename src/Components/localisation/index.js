import React, { useState, useEffect, useContext } from "react";

import { Local } from "./style";
import { Icon } from "../icon";
import gps from "../../assets/icons/gps.png";
import { authentication } from "../contexts/usecontext";
import { handelLocation, findCoord } from "./tools";
import { Select } from "./style";

const local = "khouribga, Morocco";

export const Localisation = (props) => {
  const [geolocal, setGeolocal] = useState(null);
  const { auth } = useContext(authentication);
  const [city, setCity] = useState(null);
  const url = `/localization/${auth.userId}`;
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const getCoord = async () => {
      const data = await handelLocation(url);
      setGeolocal(data);
      setStatus(true);
    };
    getCoord();
  }, []);

  useEffect(() => {
    const getNewCoord = async (city) => {
      const data = await findCoord(city);
      setGeolocal(data.data);
    };
    if (city) getNewCoord(city);
  }, [city]);

  console.log("coord ", geolocal);

  //faba maradixi nhtaj xi tari9a nbedel binatom khesni ran nxof xdin radi ndir wax input awla select
  //khesni n 9ad daba ui
  return (
    <>
      <Local>
        <Icon img={gps} alt="localisation" />
        {status ? (
          <h3 style={{ margin: "0px" }}>{local}</h3>
        ) : (
          <>
            <a href="#">add Localisation</a>
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

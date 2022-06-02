import axios from "axios";
import axiosInstance from "../../services/AxiosInstance";

import { validation } from "../../assets/validationSchema/localization";

// must put it in .env file
const access_key = "55620d1f15bcca05c276bb2a59c3e768";

const getCoordinatesFormApi = async () => {
  const temp = await axios
    .get(`http://api.ipstack.com/62.251.161.88?access_key=${access_key}`)
    .then((res) => {
      console.log(
        "im here get user getCoordinatesFormApir",
        res.data.latitude,
        res.data.longitude
      );

      return {
        latitude: res.data.latitude,
        longitude: res.data.longitude,
        authorized: false,
      };
    })
    .catch((err) => {
      console.log("Error: ", err);
      return null;
    });
  return temp;
};

export const getGeoLocal = async () => {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (pos) => {
    var crd = pos.coords;
    return {
      latitude: crd.latitude,
      longitude: crd.longitude,
      authorized: true,
    };
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  if (navigator.geolocation) {
    const temp = navigator.permissions
      .query({ name: "geolocation" })
      .then((result) => {
        if (result.state === "granted") {
          return navigator.geolocation.getCurrentPosition(success);
        } else if (result.state === "prompt") {
          return navigator.geolocation.getCurrentPosition(
            success,
            error,
            options
          );
        } else if (result.state === "denied") {
          // if i dont have permission
          return getCoordinatesFormApi();
        }
      })
      .catch((error) => {
        return getCoordinatesFormApi();
      });
    return temp;
  } else {
    alert("Sorry Not available!");
    return null;
  }
};

export const addGeolocal = async (url, param) => {
  const data = await axiosInstance.post(url, param).catch((err) => {
    console.error(err);
  });
  return data;
};

export const updateGeolocal = async (url, param) => {
  const data = await axiosInstance.put(url, param).catch((err) => {
    console.error(err);
  });
  return data;
};

export const getuserGeoLocal = async (url) => {
  const temp = await axiosInstance
    .get(url)
    .then((res) => {
      return res.data[0];
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
  return temp;
};

export const handelLocation = async (url) => {
  const userGeoLocal = await getuserGeoLocal(url);
  if (userGeoLocal) {
    return userGeoLocal;
  } else {
    const geoLocal = await getGeoLocal();
    if (geoLocal) {
      const data = await addGeolocal(url, geoLocal);
      return data.status === 200 ? geoLocal : null;
    }
  }
};

export const findCoord = async (city) => {
  const api_url_endpoint = `https://documentation-resources.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&q=${city}`;

  const temp = await axios.get(api_url_endpoint);
  return temp;
};

export const VAlidationCity = (str) => {
  if (!String(str).match(validation["city"].pattern)) {
    return validation["city"].error;
  } else return true;
};

export const getNewCoord = async (city) => {
  const data = await findCoord(city);
  const coordinates = data.data?.records[0]?.geometry?.coordinates;
  return {
    latitude: coordinates[1],
    longitude: coordinates[0],
    authorized: true,
  };
};
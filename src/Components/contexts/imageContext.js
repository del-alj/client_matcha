import React, { createContext, useState } from "react";

export const ImageContext = createContext(null);

const ContextImage = (props) => {
  const [imageDetails, setImageDetails] = useState({});

  return (
    <ImageContext.Provider value={[imageDetails, setImageDetails]}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ContextImage;

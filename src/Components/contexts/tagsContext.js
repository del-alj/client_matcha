import React, { createContext, useState } from "react";

export const tagsContext = createContext(null);

const ContextTags = (props) => {
  const [tagsDetails, setTagsDetails] = useState([]);

  return (
    <tagsContext.Provider value={[tagsDetails, setTagsDetails]}>
      {props.children}
    </tagsContext.Provider>
  );
};

export default ContextTags;

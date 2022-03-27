import React, { useContext, useEffect, useState } from "react";
import { Div, SecDiv, H5, DivButton, Button } from "../style";
import { useHistory } from "react-router-dom";
import { authentication } from "../../../Components/contexts/usecontext";

export const RatingBar = (props) => {
  let history = useHistory();
  const { auth } = useContext(authentication);

  const [rating, setRating] = useState(false);

  return (
    <Div>
      <H5>{props.title}</H5>
      <SecDiv>
        <DivButton>
          <Button
            status={rating}
            onClick={(e) => {
              setRating(true);
            }}
          >
            Yes
          </Button>
          <Button
            status={!rating}
            onClick={(e) => {
              setRating(false);
            }}
          >
            No
          </Button>
        </DivButton>
      </SecDiv>
    </Div>
  );
};

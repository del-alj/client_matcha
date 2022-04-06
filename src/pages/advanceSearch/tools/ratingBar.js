import React, { useEffect, useState } from "react";
import { Div, SecDiv, H5, DivButton, Button } from "../style";

export const RatingBar = (props) => {
  const [rating, setRating] = useState(false);

  useEffect(() => {
    const newData = { ...data };
    newData["rating"] = rating;
    setData(newData);
    console.log(newData);
  }, [rating]);

  const { data, setData } = props;
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

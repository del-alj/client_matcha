export const calRating = (data) => {
  if (data?.like?.length === 0) return 0;
  else if (data?.vue?.length > data?.like?.length) {
    return (10 - (data?.like?.length / data?.vue?.length) * 10).toFixed(0);
  } else if (data?.vue?.length <= data?.like?.length) return 1;
};

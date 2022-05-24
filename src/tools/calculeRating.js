export const calRating = (data) => {
  if (data?.like?.length === 0) return 0;
  else if (data?.vue?.length > data?.like?.length) {
    return (data?.like?.length / data?.vue?.length) * 10 - 10;
  } else if (data?.vue?.length <= data?.like?.length) return 1;
};

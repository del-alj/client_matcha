export const calRating = (data) => {
  if (data?.like?.length === 0 && data?.vue?.length > 0) return 1;
  const temp = (data?.vue?.length / data?.like?.length * 10);
  return isNaN(temp) ? 0 : (temp);
};

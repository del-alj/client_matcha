export const calRating = (data) => {
    const temp = data?.like?.length / data?.vue?.length;
    return isNaN(temp) ? 0 : temp ;
  };
export const get_photoprofile = (
  imageDetails,
  userDetails,
  setPhotoProfile
) => {
  let temp = {};
  if (imageDetails.length && userDetails) {
    temp = imageDetails.find(
      (imageDetail) => imageDetail?.image_id === userDetails?.photoProfileId
    );
    setPhotoProfile(temp);
  }
};

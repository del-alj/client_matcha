
import axiosInstance from "../services/AxiosInstance";
export const blockuser = async (user_id, bloker_id) => {
  const url = "/block";
  const param = { user_id, bloker_id };
  console.log(user_id, bloker_id)
  if (user_id && bloker_id) {
    axiosInstance
      .put(url, param)
      .then((res) => {
        console.log("blocked dones", res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const unblockuser = async (user_id, unbloker_id) => {
  const url = `/block/${user_id}/${unbloker_id}`;
  if (user_id && unbloker_id) {
    axiosInstance
      .delete(url)
      .then((res) => {
        console.log("unblocked dones");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const reportuser = async (user_id, reporter_id) => {
  const url = "/report";
  const param = { user_id, reporter_id};
  if (user_id && reporter_id) {
    axiosInstance
      .put(url, param)
      .then((res) => {
        console.log("reported dones",res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

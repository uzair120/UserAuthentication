import axios from "../configs/axiosConfig";

export const loginAPICall = (email, password, callback) => {
  axios
    .post(`/auth/login`, {
      email,
      password
    })
    .then((result) => {
      console.log(result);
      callback(result.data);
    })
    .catch((err) => {
      console.log(err.response);
      callback(err.response?.data);
    });
};

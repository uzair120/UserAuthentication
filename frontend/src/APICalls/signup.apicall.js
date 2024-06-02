import axios from "../configs/axiosConfig";
export const signUpAPICall = (name, email, password, callback) => {
  axios
    .post("/auth/signup", {
      name,
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

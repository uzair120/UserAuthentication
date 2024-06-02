import axios from "axios";
import { serverBaseUrl } from "../Constants";

console.log("Axios base url", serverBaseUrl);
const instance = axios.create({
  baseURL: `${serverBaseUrl}`
});

export default instance;

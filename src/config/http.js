import axios from "axios";
// import { getToken } from "./storage";

const urlDefault = process.env.REACT_APP_API || "http://localhost:3333" ;

const http = axios.create({
  baseURL: urlDefault,
});

// re hydrate token 
// if (getToken()) {
//   http.defaults.headers["Authorization"] = `bearer ${getToken()}`;
// }

http.defaults.headers["content-type"] = "application/json";

export default http;

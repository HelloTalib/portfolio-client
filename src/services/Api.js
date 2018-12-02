import axios from "axios";

// `http://localhost:80`
//http://jaredbookr.io

export default () => {
  return axios.create({
    baseURL: `http://localhost:8080`
  });
};

import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `http://104.248.62.50`
  });
};

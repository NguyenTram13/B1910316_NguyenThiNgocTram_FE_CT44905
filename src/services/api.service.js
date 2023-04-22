import axios from "axios";

const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "aplication/json",
  },
};

export default (baseURL) => {
  return axios.create({
    baseURL,
    ...commonConfig,
  });
};

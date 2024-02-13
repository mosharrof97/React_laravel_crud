// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from "axios";

const Api = () => {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
      "content-type": "application/json",
    },
  });
  return instance;
};
export default Api;

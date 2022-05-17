import axios from "axios";

// eslint-disable-next-line import/prefer-default-export
export const CmsApi = axios.create({
  baseURL: "http://ec2-3-69-19-183.eu-central-1.compute.amazonaws.com:3005",
  headers: {
    "Content-type": "application/json",
  },
});

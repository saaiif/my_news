import axios from "axios";
import { store } from "../store";

const URL = process.env.REACT_APP_API_URL;

export const getNews = (val, params) => {
  console.log(URL + `${val}`, null, { params: params },params,"54564fd56");
  return axios.get(URL + `${val}`,  { params: params });
};

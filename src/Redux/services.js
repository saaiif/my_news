import axios from "axios";
import { store } from "../store";

const URL = process.env.REACT_APP_API_URL;

export const getNews = (val, params) => {
  return axios.get(URL + `${val}`,  { params: params });
};

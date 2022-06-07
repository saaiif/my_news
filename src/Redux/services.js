import axios from "axios";
import { store } from "../store";

const URL = process.env.REACT_APP_API_URL;

function authHeader() {
  // return authorization header with jwt token
  let state = store.getState();
  let token = state?.userDetails?.details?.token;
  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}

export const signInPostService = (newData) => {
  return axios.post(URL + "login", null, { params: newData });
};
export const getUserProfile = (userId) => {
  return axios.get(URL + "userProfile/" + userId, {
    headers: authHeader(),
  });
};
export const getDashboard = (newData) => {
  return axios.get(URL + "dashboard", {
    headers: authHeader(),
  });
};

export const getTrackDetails = (userId, trackId) => {
  return axios.get(URL + "trackDetails/" + userId + "/" + trackId, {
    headers: authHeader(),
  });
};

export const submitAssignmentService = (params) => {
  return axios.post(URL + "submit", null, {
    headers: authHeader(),
    params,
  });
};
export const getAdminTrack = () => {
  return axios.get(URL + "admin/tracks", {
    headers: authHeader(),
  });
};
export const postAdminTrack = (data) => {
  return axios.post(URL + "admin/track", data, {
    headers: authHeader(),
  });
};
export const updateAdminTrack = (id, data) => {
  return axios.put(URL + `admin/track/${id}`, data, {
    headers: authHeader(),
  });
};
export const deleteAdminTrack = (id) => {
  return axios.delete(URL + `admin/track/${id}`, {
    headers: authHeader(),
  });
};
export const getDesignations = () => {
  return axios.get(URL + "admin/designations", {
    headers: authHeader(),
  });
};

export const getRoles = () => {
  return axios.get(URL + "admin/roles", {
    headers: authHeader(),
  });
};

export const getHuProduct = () => {
  return axios.get(URL + "admin/huproducts", {
    headers: authHeader(),
  });
};

export const getUsers = () => {
  return axios.get(URL + "admin/users", {
    headers: authHeader(),
  });
};
export const fetchUserByRole = (role) => {
  return axios.get(URL + "admin/users/" + role, {
    headers: authHeader(),
  });
};

export const createUser = (data) => {
  return axios.post(URL + "admin/user", data, {
    headers: authHeader(),
  });
};
export const deleteUser = (id) => {
  return axios.delete(URL + "admin/user/" + id, {
    headers: authHeader(),
  });
};
export const updateUser = (data) => {
  return axios.put(URL + "admin/user/" + data.id, data, {
    headers: authHeader(),
  });
};
export const getAllBatches = () => {
  return axios.get(URL + "admin/batches", {
    headers: authHeader(),
  });
};
export const getNewProfile = () => {
  return axios.get(URL + "profile", {
    headers: authHeader(),
  });
};
export const getAdminTrackTypes = () => {
  return axios.get(URL + "admin/trainingtypes", {
    headers: authHeader(),
  });
};
export const getTrainingTrack = () => {
  return axios.get(URL + "admin/trainings", {
    headers: authHeader(),
  });
};
export const postTrainingTrack = (data) => {
  return axios.post(URL + "admin/training", data, {
    headers: authHeader(),
  });
};
export const updateAdminTraining = (id, name, data) => {
  return axios.put(URL + `admin/training/${name}/${id}`, data, {
    headers: authHeader(),
  });
};
export const deleteAdminTraining = (id) => {
  return axios.delete(URL + `admin/training/${id}`, {
    headers: authHeader(),
  });
};

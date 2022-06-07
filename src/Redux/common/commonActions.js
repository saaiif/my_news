import { SUCCESS_MESSAGE } from "./commonActionTypes";

export const snackbar = (val) => {
  return {
    type: SUCCESS_MESSAGE,
    payload: val,
  };
};

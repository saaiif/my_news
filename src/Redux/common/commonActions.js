import { SUCCESS_MESSAGE } from "./commonActionTypes";

export const snackbarAction = (val) => {
  return {
    type: SUCCESS_MESSAGE,
    payload: val,
  };
};

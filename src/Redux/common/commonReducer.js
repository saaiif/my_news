import { SUCCESS_MESSAGE } from "./commonActionTypes";

const initialState = {
  open: false,
  message: "",
  status: "",
};

export const snackbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_MESSAGE:
      return {
        ...state,
        open: action?.payload?.open,
        message: action?.payload?.message,
        status: action?.payload?.status,
      };

    default:
      return state;
  }
};

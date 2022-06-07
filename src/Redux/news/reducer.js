import { NEWS_DETAILS } from "./actionTypes";

const initialState = {
  newsdetails: [],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_DETAILS:
      return {
        ...state,
        newsdetails: action?.payload,
      };

    default:
      return state;
  }
};
